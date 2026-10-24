import { BookOpen, ChevronRight, FileText, LoaderCircle, MessageSquareText, ShieldAlert, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { getBotReply } from '../lib/ai';
import { ChatMessage } from '../types';

const starterQuestions = [
  'What is DeFi?',
  'How do I connect my wallet?',
  'How do I deposit USDT?',
  'Why is my withdrawal pending?',
  'How do I keep my wallet safe?',
];

export function ChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! I can help with Web3 basics, wallets, DeFi, deposits, withdrawals, and security topics. Ask me anything in plain language.',
      category: 'General',
    },
  ]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<Record<number, 'helpful' | 'not-helpful'>>({});

  const latestMessage = useMemo(() => messages[messages.length - 1], [messages]);

  const submitQuestion = (question: string) => {
    const userQuestion = question.trim();
    if (!userQuestion) return;

    const newUserMessage: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: userQuestion,
    };

    setMessages((previous) => [...previous, newUserMessage]);
    setValue('');
    setIsLoading(true);

    window.setTimeout(() => {
      const reply = getBotReply(userQuestion);
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: reply.answer,
        category: reply.category,
      };

      setMessages((previous) => [...previous, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="section-shell py-10">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Support chat</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Ask a support question</h1>
        </div>
        <button onClick={() => navigate('/contact')} className="secondary-button">
          Contact Support
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel overflow-hidden">
          <div className="border-b border-slate-800 bg-slate-950/80 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/15 text-violet-200">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Successor Support AI</p>
                <p className="text-xs text-slate-400">Secure, educational guidance</p>
              </div>
            </div>
          </div>

          <div className="max-h-[560px] space-y-4 overflow-y-auto p-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    message.sender === 'user'
                      ? 'bg-violet-500 text-white'
                      : 'border border-slate-700 bg-slate-900 text-slate-100'
                  }`}
                >
                  {message.text}
                  {message.category && message.sender === 'bot' && (
                    <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      {message.category}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300">
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-800 p-4">
            <div className="flex gap-3">
              <input
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') submitQuestion(value);
                }}
                placeholder="Ask about wallets, DeFi, deposits, or security..."
                className="input-field flex-1"
              />
              <button onClick={() => submitQuestion(value)} className="primary-button">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-5">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Quick prompts</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {starterQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => submitQuestion(question)}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-200 transition hover:border-violet-400 hover:text-white"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {latestMessage?.sender === 'bot' && (
            <div className="glass-panel p-5">
              <div className="mb-4 flex items-center gap-2 text-sm text-slate-200">
                <ShieldAlert className="h-4 w-4 text-amber-300" />
                Was this helpful?
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setFeedback((current) => ({ ...current, [latestMessage.id]: 'helpful' }))}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${
                    feedback[latestMessage.id] === 'helpful'
                      ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
                      : 'border-slate-700 bg-slate-900 text-slate-200'
                  }`}
                >
                  <ThumbsUp className="h-4 w-4" /> Helpful
                </button>
                <button
                  onClick={() => setFeedback((current) => ({ ...current, [latestMessage.id]: 'not-helpful' }))}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${
                    feedback[latestMessage.id] === 'not-helpful'
                      ? 'border-rose-400 bg-rose-500/10 text-rose-300'
                      : 'border-slate-700 bg-slate-900 text-slate-200'
                  }`}
                >
                  <ThumbsDown className="h-4 w-4" /> Not helpful
                </button>
              </div>

              <textarea
                rows={4}
                className="input-field mt-4"
                placeholder="Optional: tell us how we can improve this answer"
              />
            </div>
          )}

          <div className="glass-panel p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-500/10 p-2 text-amber-300">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-white">Not confident about this issue?</p>
                <p className="text-sm text-slate-300">I’m not confident I can safely resolve this issue. Would you like to contact a human support agent?</p>
              </div>
            </div>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
              Contact Support <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
