# Successor Web3 Support

Successor Web3 Support is a modern AI-powered customer support website for a fictional Web3 and crypto platform. It helps users understand blockchain basics, wallets, DeFi, security, deposits, withdrawals, trading, and general account support in a simple, educational, and secure way.

## What this project does

- Provides an AI-style customer support chat for Web3/crypto questions
- Offers a searchable FAQ and structured knowledge base
- Includes escalation to human support when a question is sensitive or uncertain
- Uses mock data for a portfolio-ready MVP without requiring a real backend
- Keeps all responses educational and safe, without asking for private keys, seed phrases, passwords, or OTP codes

## Features

- Landing page with product-style hero section and CTA buttons
- Chat support experience for common Web3 questions
- Searchable FAQ with categories
- Contact support form
- Support dashboard with mock analytics and recent tickets
- About page with mission and safety principles
- Dark, modern Web3-inspired design
- Responsive layout for mobile, tablet, and desktop
- Clean architecture for future AI API and backend integration

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React icons

## Project structure

- `src/App.tsx` — app layout and route configuration
- `src/pages/` — landing page, chat page, FAQ, contact, dashboard, and about page
- `src/data/mockData.ts` — mock FAQ, knowledge base, and dashboard data
- `src/lib/ai.ts` — AI routing and safe response logic for prototype support answers
- `src/types.ts` — shared TypeScript types
- `src/index.css` — Tailwind and global styles
- `package.json` — app scripts and dependencies
- `vite.config.ts` — Vite configuration

## Getting started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

## Environment configuration

This project is structured for future AI integration. Create a local `.env` file using the example file:

```bash
cp .env.example .env
```

### `.env.example`

```env
VITE_APP_NAME="Successor Web3 Support"
VITE_API_BASE_URL="http://localhost:3000"
VITE_OPENAI_API_KEY="your-openai-key"
VITE_OPENAI_MODEL="gpt-4o-mini"
VITE_SUPPORT_EMAIL="support@successor.example"
```

### Required variables

- `VITE_OPENAI_API_KEY` — API key for a future AI integration
- `VITE_OPENAI_MODEL` — LLM model name to use for support responses
- `VITE_API_BASE_URL` — backend endpoint when a real support service is connected

If you are not connecting a real AI backend yet, the app still works with mock data and safe default responses.

## Contributing

Contributions are welcome. Please read the `CONTRIBUTING.md` file for code, style, and pull request guidelines.

## Future improvements

- Real AI backend integration
- Live support ticket system
- Authentication and user accounts
- Analytics dashboard with real data
- Multilingual support
- Dark/light theme toggle
- More Web3 FAQ categories and content
- Better conversational memory and follow-up behavior

## License

This project is licensed under the MIT License.
