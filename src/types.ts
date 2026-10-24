export type QuestionCategory =
  | 'Web3'
  | 'Blockchain'
  | 'Cryptocurrency'
  | 'DeFi'
  | 'Stablecoins'
  | 'NFTs'
  | 'RWA'
  | 'Airdrops'
  | 'Crypto Wallets'
  | 'Deposits'
  | 'Withdrawals'
  | 'Trading'
  | 'Account Support'
  | 'Security'
  | 'Scam Awareness'
  | 'General';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  category?: string;
}

export interface BotReply {
  answer: string;
  category: string;
  followUp?: string;
  confidence: 'high' | 'medium' | 'low';
  requiresEscalation?: boolean;
}

export interface SupportTicket {
  id: string;
  name: string;
  email: string;
  category: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  description: string;
  status: 'Open' | 'Resolved';
  createdAt: string;
}
