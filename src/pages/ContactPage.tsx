import { useState } from 'react';

const categories = ['Wallets', 'DeFi', 'Trading', 'Deposits & Withdrawals', 'Security', 'Account Issues'];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Human support</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Contact a support agent</h1>
          <p className="mt-4 text-slate-300">
            We’re here to help with sensitive account, wallet, or transaction concerns. Please use the form below to request a human review.
          </p>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="glass-panel p-4">
              <p className="font-medium text-white">Response goal</p>
              <p className="mt-2">Average first response time: under 4 hours during business hours.</p>
            </div>
            <div className="glass-panel p-4">
              <p className="font-medium text-white">Security reminder</p>
              <p className="mt-2">Never share your seed phrase, private key, password, or OTP code with anyone.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input required className="input-field" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input required type="email" className="input-field" placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Issue category</label>
              <select className="input-field">
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Description</label>
              <textarea required rows={5} className="input-field" placeholder="Tell us what happened and what you need help with" />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Priority</label>
              <select className="input-field">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>

            <button type="submit" className="primary-button w-full">
              Submit request
            </button>

            {submitted && (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                Your support request has been created. A human agent will review it shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
