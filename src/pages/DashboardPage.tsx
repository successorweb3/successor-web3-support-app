import { Activity, ArrowUpRight, CircleDashed, MessageSquareWarning, TrendingUp } from 'lucide-react';
import { dashboardMetrics, recentTickets } from '../data/mockData';

export function DashboardPage() {
  const cards = [
    { label: 'Total conversations', value: dashboardMetrics.totalConversations.toLocaleString(), icon: MessageSquareWarning },
    { label: 'Open support requests', value: dashboardMetrics.openSupportRequests.toString(), icon: CircleDashed },
    { label: 'Resolved requests', value: dashboardMetrics.resolvedRequests.toString(), icon: Activity },
    { label: 'Frequently asked questions', value: dashboardMetrics.frequentlyAskedQuestions.toString(), icon: ArrowUpRight },
  ];

  return (
    <div className="section-shell py-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Support dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Operations overview</h1>
        </div>
        <div className="glass-panel flex items-center gap-3 px-4 py-3">
          <TrendingUp className="h-5 w-5 text-emerald-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">User satisfaction</p>
            <p className="text-lg font-semibold text-white">{dashboardMetrics.userSatisfaction}%</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass-panel p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-300">{label}</p>
              <div className="rounded-xl bg-violet-500/10 p-2 text-violet-200">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-6 text-3xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 glass-panel p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Recent support tickets</h2>
          <button className="secondary-button px-3 py-2 text-xs">View all</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-200">
            <thead className="text-xs uppercase tracking-[0.18em] text-slate-400">
              <tr>
                <th className="pb-4 pr-4">Ticket</th>
                <th className="pb-4 pr-4">User</th>
                <th className="pb-4 pr-4">Category</th>
                <th className="pb-4 pr-4">Issue</th>
                <th className="pb-4 pr-4">Priority</th>
                <th className="pb-4 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTickets.map((ticket) => (
                <tr key={ticket.id} className="border-t border-slate-800 text-slate-200">
                  <td className="py-4 pr-4 font-medium text-white">{ticket.id}</td>
                  <td className="py-4 pr-4">{ticket.user}</td>
                  <td className="py-4 pr-4">{ticket.category}</td>
                  <td className="py-4 pr-4">{ticket.issue}</td>
                  <td className="py-4 pr-4">
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-xs">{ticket.priority}</span>
                  </td>
                  <td className="py-4 pr-4">
                    <span className={`rounded-full px-2 py-1 text-xs ${ticket.status === 'Open' ? 'bg-amber-500/10 text-amber-300' : 'bg-emerald-500/10 text-emerald-300'}`}>
                      {ticket.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
