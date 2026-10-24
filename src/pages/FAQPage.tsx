import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { faqItems, supportCategories } from '../data/mockData';

export function FAQPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return faqItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="section-shell py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Knowledge base</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Frequently asked questions</h1>
      </div>

      <div className="glass-panel p-4 sm:p-5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search FAQs by topic or keyword"
            className="input-field pl-10"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {['All', ...supportCategories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-2 text-xs font-medium transition ${
                activeCategory === category
                  ? 'bg-violet-500 text-white'
                  : 'border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        {visibleFaqs.length > 0 ? (
          visibleFaqs.map((item) => (
            <div key={item.id} className="glass-panel p-5">
              <div className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-300">{item.category}</div>
              <h2 className="text-xl font-semibold text-white">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
            </div>
          ))
        ) : (
          <div className="glass-panel p-8 text-center">
            <p className="text-lg font-medium text-white">No answers match this search yet.</p>
            <p className="mt-2 text-sm text-slate-300">Try another keyword or browse the category filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
