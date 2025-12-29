const teaserTexts = [
  "Du solltest dich besser auskennen!",
  "Zeig, was du drauf hast!",
  "Bist du bereit für die Herausforderung?",
  "Kennst du dich wirklich aus?",
  "Politik-Profi oder Anfänger?",
  "Teste dein Wissen!",
  "Wie gut kennst du Österreich?",
  "Zeit für ein Quiz!",
  "Kannst du alle Fragen beantworten?",
  "Bist du ein Politik-Experte?",
  "Das wird knifflig!",
  "Mal sehen, was du weißt!",
  "Bereit für echte Herausforderungen?",
  "Politik ist dein Ding?",
  "Zeig dein Können!",
  "Wie gut bist du wirklich?",
  "Das schaffst du!",
  "Auf geht's!",
  "Demokratie verstehen!",
  "Bleib am Ball!"
];

function getRandomTeaser(): string {
  return teaserTexts[Math.floor(Math.random() * teaserTexts.length)];
}

export function renderStats(stats: { asked: number; correct: number; wrong: number }, allTags: string[] = [], currentTag?: string) {
  const percentage = stats.asked > 0 ? Math.round((stats.correct / stats.asked) * 100) : 0;
  const teaser = getRandomTeaser();

  return `
    <div class="flex flex-col gap-2 w-full py-3" id="stats-bar">
      <div class="flex justify-between items-center w-full">
        <div class="flex flex-col">
          <a href="/" class="text-base font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Polit Quiz</a>
          <span class="text-xs text-slate-500 dark:text-slate-400">${teaser}</span>
        </div>
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
                title="Design umschalten"
              >
                <span id="theme-icon">☀️</span>
                <span>Design umschalten</span>
              </button>

              <!-- Reset Stats -->
              <button
                hx-post="/api/reset-stats"
                hx-target="#stats-bar"
                hx-swap="outerHTML"
                hx-confirm="Möchten Sie Ihre Statistiken wirklich zurücksetzen?"
                class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
                title="Statistiken zurücksetzen"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <span>Statistiken zurücksetzen</span>
              </button>

              ${currentTag ? `
                <!-- All Tags (Show all questions) -->
                <a
                  href="/"
                  class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
                  title="All Tags"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <span>Alle Tags</span>
                </a>
              ` : ''}

              ${allTags.length > 0 ? `
                <div class="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 px-3 mb-2">Nach Tag filtern</div>
                  <div class="max-h-48 overflow-y-auto px-3">
                    ${allTags.map(tag => `
                      <a href="/tag/${encodeURIComponent(tag)}" class="inline-block mr-1.5 mb-1.5">
                        <span class="inline-block px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 rounded text-xs transition-colors">${tag}</span>
                      </a>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Legal Links -->
              <div class="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                <button
                  id="impressum-button"
                  class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
                  title="Impressum"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Impressum</span>
                </button>

                <button
                  id="datenschutz-button"
                  class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
                  title="Datenschutzerklärung"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span>Datenschutz</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-3 justify-center">
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-xs text-slate-600 dark:text-slate-400">Gefragt</span>
          <span class="text-lg font-semibold text-slate-900 dark:text-slate-100">${stats.asked}</span>
        </div>
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-xs text-emerald-600 dark:text-emerald-400">Richtig</span>
          <span class="text-lg font-semibold text-emerald-600 dark:text-emerald-400">${stats.correct}</span>
        </div>
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-xs text-red-600 dark:text-red-400">Falsch</span>
          <span class="text-lg font-semibold text-red-600 dark:text-red-400">${stats.wrong}</span>
        </div>
        <div class="flex flex-col items-center gap-0.5">
          <span class="text-xs text-slate-600 dark:text-slate-400">Erfolgsquote</span>
          <span class="text-lg font-semibold text-slate-900 dark:text-slate-100">${percentage}%</span>
        </div>
      </div>
    </div>
  `;
}
