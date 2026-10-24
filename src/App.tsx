import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChatPage } from './pages/ChatPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardPage } from './pages/DashboardPage';
import { AboutPage } from './pages/AboutPage';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, BarChart3, CircleHelp, MessageSquareText, ShieldCheck } from 'lucide-react';

function Layout() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Chat Support', path: '/chat' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-black text-slate-950">
              S
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-slate-200">SUCCESSOR</p>
              <p className="text-xs text-slate-400">WEB3 SUPPORT</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <Link to="/chat" className="primary-button hidden md:inline-flex">
            Start Chat
          </Link>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="section-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Successor Web3 Support</p>
            <p className="mt-2 text-sm text-slate-400">Your Web3 questions, answered.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Security-first support</span>
            <span className="inline-flex items-center gap-2"><MessageSquareText className="h-4 w-4 text-violet-300" /> AI customer support</span>
            <span className="inline-flex items-center gap-2"><BarChart3 className="h-4 w-4 text-cyan-300" /> Dashboard insights</span>
          </div>
          <div className="text-sm text-slate-400">Built by Successor</div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return <Layout />;
}
