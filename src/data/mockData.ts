import { FaqItem } from '../types';

export const supportCategories = [
  'Getting Started',
  'Wallets',
  'DeFi',
  'Trading',
  'Deposits & Withdrawals',
  'Security',
  'Account Issues',
] as const;

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Getting Started',
    question: 'What is Web3?',
    answer:
      'Web3 is a vision for a more open internet where users can interact directly with digital services, often using blockchain-based networks, wallets, and decentralized applications.',
    tags: ['web3', 'internet', 'blockchain', 'apps'],
  },
  {
    id: 'faq-2',
    category: 'Wallets',
    question: 'How do I connect my wallet?',
    answer:
      'Choose a supported wallet, confirm the wallet extension or app is installed, then connect it from the platform using the “Connect Wallet” flow. Always verify you are on the official website before approving anything.',
    tags: ['wallet', 'connect', 'metamask', 'extension'],
  },
  {
    id: 'faq-3',
    category: 'Wallets',
    question: 'What is a crypto wallet?',
    answer:
      'A crypto wallet stores your wallet address and helps you interact with blockchains. It does not usually hold money like a traditional bank account; it gives you control of your digital assets and private keys.',
    tags: ['wallet', 'crypto wallet', 'private key'],
  },
  {
    id: 'faq-4',
    category: 'DeFi',
    question: 'What is DeFi?',
    answer:
      'DeFi, or decentralized finance, refers to financial services built on blockchain networks, such as lending, trading, and earning yield, without relying on a traditional bank.',
    tags: ['defi', 'finance', 'lending', 'yield'],
  },
  {
    id: 'faq-5',
    category: 'Trading',
    question: 'What is slippage?',
    answer:
      'Slippage happens when the price changes between the time you submit a trade and the time it is executed. It is common in volatile markets and can be reduced by setting a smaller slippage tolerance.',
    tags: ['slippage', 'trade', 'price'],
  },
  {
    id: 'faq-6',
    category: 'Deposits & Withdrawals',
    question: 'Why is my withdrawal pending?',
    answer:
      'A pending withdrawal can happen due to network congestion, a review of the transaction, or security checks. The status can vary by chain and platform rules, so official platform updates are the most reliable source.',
    tags: ['withdrawal', 'pending', 'network', 'status'],
  },
  {
    id: 'faq-7',
    category: 'Security',
    question: 'How do I keep my wallet safe?',
    answer:
      'Use trusted wallet software, verify website URLs, enable 2FA where available, avoid phishing links, and never share private keys, recovery phrases, or OTP codes with anyone.',
    tags: ['security', 'wallet safety', '2fa', 'phishing'],
  },
  {
    id: 'faq-8',
    category: 'Account Issues',
    question: 'I forgot my password. What should I do?',
    answer:
      'Use the official account recovery flow on the platform website or app. Never share your password, OTP code, or recovery phrase with anyone claiming to help you.',
    tags: ['password', 'account', 'recovery', 'login'],
  },
  {
    id: 'faq-9',
    category: 'Security',
    question: 'What is a scam in crypto?',
    answer:
      'Crypto scams often involve fake airdrops, phishing links, fake support accounts, or requests for seed phrases or private keys. If something asks for sensitive information, stop and verify through official channels.',
    tags: ['scam', 'phishing', 'fake support', 'suspicious link'],
  },
  {
    id: 'faq-10',
    category: 'Getting Started',
    question: 'What is a blockchain?',
    answer:
      'A blockchain is a shared digital ledger that records transactions across many computers. It helps people verify ownership and activity without depending on one central authority.',
    tags: ['blockchain', 'ledger', 'transactions'],
  },
  {
    id: 'faq-11',
    category: 'DeFi',
    question: 'What is an RWA?',
    answer:
      'RWA stands for Real-World Asset. It is a tokenized or digital representation of a real asset, such as real estate, bonds, or commodities, that can be accessed using blockchain infrastructure.',
    tags: ['rwa', 'real world asset', 'tokenized'],
  },
  {
    id: 'faq-12',
    category: 'Getting Started',
    question: 'What is an NFT?',
    answer:
      'An NFT, or non-fungible token, is a unique digital asset that represents ownership or proof of authenticity for something such as artwork, collectibles, or digital items.',
    tags: ['nft', 'token', 'digital asset'],
  },
  {
    id: 'faq-13',
    category: 'Cryptocurrency',
    question: 'What is a stablecoin?',
    answer:
      'A stablecoin is a cryptocurrency designed to keep a more stable value, often by pegging it to a fiat currency such as USD or to a basket of assets.',
    tags: ['stablecoin', 'usdc', 'usdt', 'stable'],
  },
  {
    id: 'faq-14',
    category: 'Deposits & Withdrawals',
    question: 'How do I deposit USDT?',
    answer:
      'Typically, you select your wallet, choose the blockchain network that matches your token, and then send USDT to the deposit address shown in the platform. Always verify the address and network before sending funds.',
    tags: ['usdt', 'deposit', 'wallet', 'network'],
  },
  {
    id: 'faq-15',
    category: 'Security',
    question: 'Why is a support agent never asking for my seed phrase?',
    answer:
      'A legitimate support agent should never require your seed phrase, private key, OTP code, or password. If someone requests this, it is likely a scam attempt and should be treated as suspicious.',
    tags: ['seed phrase', 'private key', 'support', 'scam'],
  },
];

export const knowledgeBase = [
  {
    id: 'kb-web3',
    title: 'Web3 overview',
    category: 'Web3',
    summary: 'A more open internet built on blockchain networks and digital wallets.',
    answer:
      'Web3 refers to blockchain-based applications and services that aim to give users more control over their identity, digital assets, and online interactions. It can include wallets, decentralized apps, and token-based ecosystems.',
    tags: ['web3', 'internet', 'blockchain'],
  },
  {
    id: 'kb-defi',
    title: 'DeFi basics',
    category: 'DeFi',
    summary: 'Decentralized finance brings lending, trading, and yield opportunities without a central bank.',
    answer:
      'DeFi uses blockchain networks to provide financial services like lending, borrowing, staking, and swaps without relying on a traditional central institution. Always understand the risks before interacting with DeFi protocols.',
    tags: ['defi', 'trading', 'lending'],
  },
  {
    id: 'kb-wallets',
    title: 'Crypto wallets',
    category: 'Crypto Wallets',
    summary: 'Wallets help you access blockchain networks and manage digital assets.',
    answer:
      'A crypto wallet helps you hold or control your wallet address, interact with decentralized apps, and sign transactions. It is important to store recovery phrases safely and never share them with anyone.',
    tags: ['wallet', 'private key', 'seed'],
  },
  {
    id: 'kb-security',
    title: 'Security safety',
    category: 'Security',
    summary: 'Use official apps and never share sensitive account data.',
    answer:
      'Only use official wallet apps, websites, and support channels. Do not share seed phrases, private keys, passwords, or OTPs. If a request seems urgent or unusual, verify it independently before acting.',
    tags: ['security', 'phishing', 'scam'],
  },
  {
    id: 'kb-deposits',
    title: 'Deposits and withdrawals',
    category: 'Deposits',
    summary: 'Deposits and withdrawals depend on network conditions and platform review.',
    answer:
      'Crypto deposits and withdrawals can be affected by blockchain congestion, verification checks, or a platform review. Use the transaction hash or network explorer to track progress, and rely on official status pages for confirmation.',
    tags: ['deposit', 'withdrawal', 'pending', 'network'],
  },
  {
    id: 'kb-account-support',
    title: 'Account support',
    category: 'Account Support',
    summary: 'Support can guide you through account issues, but never asks for private data.',
    answer:
      'Account issues such as login trouble, verification problems, or password resets should be handled through the official support flow. Official support will never ask for a private key, recovery phrase, or OTP.',
    tags: ['account', 'login', 'password', 'support'],
  },
];

export const dashboardMetrics = {
  totalConversations: 1842,
  openSupportRequests: 27,
  resolvedRequests: 143,
  frequentlyAskedQuestions: 63,
  userSatisfaction: 94,
};

export const recentTickets = [
  {
    id: 'ST-1042',
    user: 'Ari M.',
    category: 'Wallets',
    issue: 'Wallet connection issue on browser extension',
    status: 'Open',
    priority: 'High',
    time: '12 min ago',
  },
  {
    id: 'ST-1039',
    user: 'Nadia O.',
    category: 'Withdrawals',
    issue: 'Withdrawal amount pending beyond expected time',
    status: 'Open',
    priority: 'Medium',
    time: '1 hour ago',
  },
  {
    id: 'ST-1036',
    user: 'Theo L.',
    category: 'Security',
    issue: 'Suspicious email phishing report',
    status: 'Resolved',
    priority: 'Urgent',
    time: '2 hours ago',
  },
  {
    id: 'ST-1033',
    user: 'Maya S.',
    category: 'Deposits',
    issue: 'USDT deposit routed to wrong network',
    status: 'Resolved',
    priority: 'High',
    time: 'Today',
  },
];
