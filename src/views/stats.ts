export function renderStats(stats: { asked: number; correct: number; wrong: number }) {
  const percentage = stats.asked > 0 ? Math.round((stats.correct / stats.asked) * 100) : 0;

  return `
    <div class="flex flex-col gap-2 w-full py-3" id="stats-bar">
      <div class="flex justify-between items-center w-full">
        <span class="text-base font-bold text-slate-900 dark:text-slate-100">Polit Quiz</span>
        <div class="flex gap-2 items-center">
          <button
            hx-post="/api/reset-stats"
            hx-target="#stats-bar"
            hx-swap="outerHTML"
            hx-confirm="Are you sure you want to reset your statistics?"
            class="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-pointer border border-slate-300 dark:border-slate-600"
            title="Reset Statistics"
          >
            Reset
          </button>
          <button
            id="theme-toggle"
            class="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-pointer border border-slate-300 dark:border-slate-600"
            title="Toggle dark/light mode"
          >
            <span id="theme-icon">☀️</span>
          </button>
        </div>
      </div>
      <div class="flex gap-3 justify-center">
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-xs text-slate-600 dark:text-slate-400">Asked</span>
          <span class="text-lg font-semibold text-slate-900 dark:text-slate-100">${stats.asked}</span>
        </div>
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-xs text-emerald-600 dark:text-emerald-400">Correct</span>
          <span class="text-lg font-semibold text-emerald-600 dark:text-emerald-400">${stats.correct}</span>
        </div>
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-xs text-red-600 dark:text-red-400">Wrong</span>
          <span class="text-lg font-semibold text-red-600 dark:text-red-400">${stats.wrong}</span>
        </div>
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-xs text-slate-600 dark:text-slate-400">Success Rate</span>
          <span class="text-lg font-semibold text-slate-900 dark:text-slate-100">${percentage}%</span>
        </div>
      </div>
    </div>
  `;
}
