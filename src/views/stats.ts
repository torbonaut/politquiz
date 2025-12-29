export function renderStats(stats: { asked: number; correct: number; wrong: number }, allTags: string[] = []) {
  const percentage = stats.asked > 0 ? Math.round((stats.correct / stats.asked) * 100) : 0;

  return `
    <div class="flex flex-col gap-2 w-full py-3" id="stats-bar">
      <div class="flex justify-between items-center w-full">
        <span class="text-base font-bold text-slate-900 dark:text-slate-100">Polit Quiz</span>
        <div class="relative">
          <button
            id="menu-toggle"
            class="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-pointer border border-slate-300 dark:border-slate-600"
            title="Menu"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <div id="menu-dropdown" class="hidden absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl border-2 border-slate-200 dark:border-slate-700 z-50">
            <div class="p-3">
              <!-- Theme Toggle -->
              <button
                id="theme-toggle"
                class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
                title="Toggle dark/light mode"
              >
                <span id="theme-icon">☀️</span>
                <span>Toggle Theme</span>
              </button>

              <!-- Reset Stats -->
              <button
                hx-post="/api/reset-stats"
                hx-target="#stats-bar"
                hx-swap="outerHTML"
                hx-confirm="Are you sure you want to reset your statistics?"
                class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
                title="Reset Statistics"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <span>Reset Stats</span>
              </button>

              ${allTags.length > 0 ? `
                <div class="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 px-3 mb-2">Filter by Tag</div>
                  <div class="max-h-48 overflow-y-auto px-3">
                    ${allTags.map(tag => `
                      <a href="/tag/${encodeURIComponent(tag)}" class="inline-block mr-1.5 mb-1.5">
                        <span class="inline-block px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 rounded text-xs transition-colors">${tag}</span>
                      </a>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
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
