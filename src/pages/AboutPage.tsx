import { ShieldCheck } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="section-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">About us</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Built for safer, simpler Web3 support</h1>
          <p className="mt-4 text-slate-300">
            Successor Web3 Support was designed to help users navigate Web3 concepts, crypto fundamentals, wallet best practices, and common support questions with clarity and caution.
          </p>
          <p className="mt-4 text-slate-300">
            We believe great support should be educational, secure, and transparent. That is why the experience focuses on clear explanations, safe escalation flows, and respectful handling of sensitive account issues.
          </p>
        </div>

        <div className="glass-panel p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-200">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Our principles</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Security and clarity</h2>
            </div>
          </div>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li>• Explain Web3 topics in plain language.</li>
            <li>• Never ask for seed phrases, private keys, passwords, or OTPs.</li>
            <li>• Direct sensitive issues to official verification channels.</li>
            <li>• Escalate uncertain cases to a human support agent.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
