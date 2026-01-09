"use client";

export default function WakaTimeSummary() {
  const stats = {
    totalThisWeek: "18 hrs 19 mins",
    dailyAverage: "2 hrs 37 mins",
    allTime: "893 hrs 51 mins",
  };

  const languages = [
    { name: "TypeScript", percent: 87.82, color: "bg-blue-600" },
    { name: "Markdown", percent: 3.86, color: "bg-blue-400" },
    { name: "JavaScript", percent: 1.88, color: "bg-yellow-400" },
    { name: "JSON", percent: 1.53, color: "bg-blue-300" },
    { name: "Bash", percent: 0.53, color: "bg-cyan-500" },
    { name: "CSS", percent: 0.49, color: "bg-indigo-500" },
  ];

  return (
    // Gunakan mx-auto untuk menengahkan kontainer max-width
    <div className="w-full max-w-4xl mx-auto p-6 text-zinc-300 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.1)] font-sans">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center text-[10px] font-bold text-blue-400">
          ✓
        </div>
        <h2 className="text-lg font-semibold text-white tracking-tight">
          WakaTime Stats
        </h2>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left">
        <div className="p-4 bg-blue-950/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <p className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1">
            Total This Week
          </p>
          <p className="text-xl font-bold text-zinc-100">
            {stats.totalThisWeek}
          </p>
        </div>
        <div className="p-4 bg-blue-950/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <p className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1">
            Daily Average
          </p>
          <p className="text-xl font-bold text-zinc-100">
            {stats.dailyAverage}
          </p>
        </div>
        <div className="p-4 bg-blue-950/20 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <p className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1">
            All-Time Coding
          </p>
          <p className="text-xl font-bold text-zinc-100">{stats.allTime}</p>
        </div>
      </div>

      {/* Top Languages Section */}
      <div className="p-5 bg-zinc-900/40 rounded-xl border border-white/5 text-left">
        <h3 className="text-sm font-medium text-blue-300 mb-6 flex items-center gap-2">
          Top Languages
          <span className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></span>
        </h3>
        {/* Konten bahasa tetap rapi ke kiri di dalam kotak yang sudah di tengah */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
          {languages.map((lang) => (
            <div key={lang.name} className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-200">{lang.name}</span>
                <span className="text-blue-400 font-mono">{lang.percent}%</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                <div
                  className={`h-full ${lang.color} rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)] transition-all duration-1000`}
                  style={{ width: `${lang.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
        <p className="text-[10px] text-zinc-600 italic font-medium">
          Coding activity over the past 7 days
        </p>
        <p className="text-[10px] text-blue-500/60 font-bold tracking-tighter">
          Jan 03 - Jan 09, 2026
        </p>
      </div>
    </div>
  );
}
