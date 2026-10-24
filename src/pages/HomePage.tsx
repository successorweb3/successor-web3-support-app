import { ArrowRight, BadgeCheck, CheckCircle2, ChevronRight, HeartHandshake, MessageSquareText, ShieldCheck, Sparkles, Wallet2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureCards = [
  {
    icon: MessageSquareText,
    title: 'AI Support',
    description: 'Quick, simple answers for common Web3 and crypto support questions.',
  },
  {
    icon: BookOpen,
    title: 'Web3 Knowledge Base',
    description: 'Structured guidance across blockchain, wallets, DeFi, and account basics.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    description: 'Safe UX with clear protections against phishing and account credential requests.',
  },
  {
    icon: HeartHandshake,
    title: 'Human Support',
    description: 'Fast escalation to an agent when a question needs deeper review.',
  },
];

const onboardingSteps = [
  'Ask a Web3 or crypto question in plain language.',
  'Review the relevant knowledge-base guidance and quick answers.',
  'Escalate to a support agent when a more sensitive issue needs review.',
];

export function HomePage() {
  return (
    <div className="pb-20">
      <section className="section-shell pt-16 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered support for the Web3 era
            </div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Web3 questions, answered.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-300">
              Get simple, reliable guidance on crypto, DeFi, wallets, and Web3 without the jargon.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/chat" className="primary-button">
                Start Chat
              </Link>
              <Link to="/faq" className="secondary-button">
                Explore FAQs
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Secure support guidance
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Human escalation when needed
              </span>
            </div>
          </div>

          <div className="glass-panel p-5">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Live support</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Successor Support</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <Wallet2 className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="ml-auto max-w-[80%] rounded-2xl bg-violet-500/20 px-4 py-3 text-sm text-violet-50">
                  What is DeFi?
                </div>
                <div className="max-w-[85%] rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200">
                  DeFi refers to financial services built on blockchain networks such as lending, swaps, and yield opportunities.
                </div>
                <div className="ml-auto max-w-[80%] rounded-2xl bg-cyan-500/15 px-4 py-3 text-sm text-cyan-50">
                  Why is my withdrawal pending?
                </div>
                <div className="max-w-[85%] rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200">
                  Network activity, security checks, or review rules can delay a withdrawal. Official support status updates are always the safest source.
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                <span className="text-sm text-slate-300">Need help with a sensitive issue?</span>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                  Contact support <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-violet-300">Why people choose Successor</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <div key={title} className="glass-panel p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell mt-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Simple workflow</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Fast support without the extra friction</h2>
            </div>
            <div className="space-y-4">
              {onboardingSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
