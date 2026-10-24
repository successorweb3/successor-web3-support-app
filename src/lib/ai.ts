import { BotReply, FaqItem } from '../types';
import { faqItems, knowledgeBase } from '../data/mockData';

const safePatterns = [
  'seed phrase',
  'private key',
  'mnemonic',
  'recovery phrase',
  'otp',
  'one time password',
  'password',
  'api key',
  'secret key',
  'wallet recovery',
  'send me your private',
];

const categoryMap: Record<string, string> = {
  web3: 'Web3',
  blockchain: 'Blockchain',
  crypto: 'Cryptocurrency',
  defi: 'DeFi',
  stablecoin: 'Stablecoins',
  nft: 'NFTs',
  rwa: 'RWA',
  airdrop: 'Airdrops',
  wallet: 'Crypto Wallets',
  deposit: 'Deposits',
  withdrawal: 'Withdrawals',
  trade: 'Trading',
  trading: 'Trading',
  account: 'Account Support',
  security: 'Security',
  scam: 'Scam Awareness',
};

export function classifyQuestion(question: string): string {
  const lower = question.toLowerCase();

  if (safePatterns.some((pattern) => lower.includes(pattern))) {
    return 'Security';
  }

  for (const [keyword, category] of Object.entries(categoryMap)) {
    if (lower.includes(keyword)) {
      return category;
    }
  }

  return 'General';
}

export function searchFaq(query: string, category?: string): FaqItem[] {
  const normalized = query.trim().toLowerCase();

  return faqItems.filter((item) => {
    const matchesCategory = !category || category === 'All' || item.category === category;
    const matchesQuery =
      !normalized ||
      item.question.toLowerCase().includes(normalized) ||
      item.answer.toLowerCase().includes(normalized) ||
      item.tags.some((tag) => tag.toLowerCase().includes(normalized));

    return matchesCategory && matchesQuery;
  });
}

export function getBotReply(userInput: string): BotReply {
  const input = userInput.trim();
  const lower = input.toLowerCase();

  if (!input) {
    return {
      answer: 'Please tell me what you would like help with, and I can explain the basics or direct you to the right support flow.',
      category: 'General',
      confidence: 'high',
    };
  }

  if (safePatterns.some((pattern) => lower.includes(pattern))) {
    return {
      answer:
        'Do not share your seed phrase, private key, password, or OTP code. A legitimate support agent should never ask for that information. Stop the interaction, use the official app or website, and verify the request before taking any action.',
      category: 'Security',
      confidence: 'high',
      followUp: 'Would you like a quick security checklist for wallets or account protection?',
    };
  }

  const category = classifyQuestion(lower);
  const matches = knowledgeBase.filter(
    (item) => item.category === category || item.tags.some((tag) => lower.includes(tag.toLowerCase())),
  );

  if (matches.length > 0) {
    const match = matches[0];
    return {
      answer: match.answer,
      category: match.category,
      confidence: 'high',
      followUp: 'Would you like a quick follow-up explanation or help with a related question?',
    };
  }

  const sensitiveTerms = ['withdrawal', 'deposit', 'transaction', 'wallet balance', 'account issue', 'lost funds', 'transfer'];
  if (sensitiveTerms.some((term) => lower.includes(term))) {
    return {
      answer:
        'I can provide general educational information, but I cannot verify your account, wallet, or transaction status. Please check the official platform status, transaction history, and support channels for the latest account-specific information.',
      category: 'Account Support',
      confidence: 'medium',
      requiresEscalation: true,
      followUp: 'Would you like to contact a human support agent?',
    };
  }

  return {
    answer:
      'I can help explain Web3 basics, wallets, DeFi, blockchain concepts, and common security practices. If this is about a specific account issue or transaction, I recommend checking the official platform details before taking action.',
    category: 'General',
    confidence: 'medium',
    followUp: 'Would you like to learn about wallets, DeFi, blockchain, or staking?',
  };
}
