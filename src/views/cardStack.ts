import type { Question } from '../database';

export function renderCardStack(
  questions: Question[],
  stats: { asked: number; correct: number; wrong: number }
) {
  return `
    <div class="card-stack-wrapper">
      <div class="card-stack-container" id="card-stack-container">
        ${questions.map((question, index) => renderSingleCard(question, index, stats)).join('')}
      </div>
      <div class="text-center mt-12 text-xs text-slate-500 dark:text-slate-400">
        ${questions.length} question${questions.length !== 1 ? 's' : ''} in stack
      </div>
    </div>
  `;
}

function renderSingleCard(
  question: Question,
  stackIndex: number,
  stats: { asked: number; correct: number; wrong: number }
) {
  const isTopCard = stackIndex === 0;

  return `
    <div class="card ${isTopCard ? 'active' : ''}"
         data-question-id="${question.id}"
         data-stack-index="${stackIndex}"
         style="z-index: ${10 - stackIndex};">
      <div class="inner">
        <!-- Front of card (Question) -->
        <div class="front">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 h-full flex flex-col">
            <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 class="text-sm font-bold text-blue-600 dark:text-blue-400">Question ${question.id}</h2>
            </div>
            <div class="content flex-1 overflow-y-auto px-4 py-3">
              <h3 class="text-base font-semibold mb-4 text-slate-900 dark:text-slate-100">${question.question}</h3>
              <form
                class="options-form space-y-2"
                data-question-id="${question.id}"
              >
                ${question.options.map(option => `
                  <button
                    type="button"
                    data-answer="${option.letter}"
                    class="option-button w-full flex items-center gap-3 py-2 px-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-left rounded-lg transition-all cursor-pointer border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500"
                  >
                    <span class="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-blue-500 dark:bg-blue-500 text-white dark:text-white rounded-full font-bold text-sm">${option.letter}</span>
                    <span class="option-text flex-1 text-slate-900 dark:text-slate-100 text-sm">${option.text}</span>
                  </button>
                `).join('')}
              </form>
            </div>
          </div>
        </div>

        <!-- Back of card (Answer) -->
        <div class="back">
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 h-full flex flex-col">
            <div class="px-4 py-3">
              <div class="flex items-center justify-between">
                <h2 class="text-sm font-bold text-blue-600 dark:text-blue-400">Question ${question.id}</h2>
                ${question.tags && question.tags.length > 0 ? `
                  <div class="flex flex-wrap gap-1 justify-end">
                    ${[...question.tags].sort().map(tag => `
                      <span class="text-xs px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">${tag}</span>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700">
              <div class="result-header text-2xl font-bold text-center" data-correct="${question.correctAnswer}">
                <!-- Will be filled by JavaScript -->
              </div>
            </div>

            <div class="content flex-1 overflow-y-auto px-4 py-3">
              <h3 class="text-base font-semibold mb-4 text-slate-900 dark:text-slate-100">${question.question}</h3>

              <div class="mb-4 space-y-2 bg-slate-100 dark:bg-slate-700/50 p-3 rounded-lg">
                <p class="text-slate-900 dark:text-slate-100 text-sm">
                  <strong>Correct Answer:</strong> ${question.correctAnswer}) ${question.options.find(o => o.letter === question.correctAnswer)?.text}
                </p>
                <p class="your-answer text-red-600 dark:text-red-400 text-sm" style="display: none;">
                  <!-- Will be filled by JavaScript if wrong -->
                </p>
              </div>

              <div class="mb-3 bg-blue-50 dark:bg-slate-700/30 p-2.5 rounded-lg border border-blue-200 dark:border-slate-600">
                <h3 class="text-xs font-semibold mb-1.5 text-blue-700 dark:text-blue-400">Background Information</h3>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">${question.backgroundInfo}</p>
              </div>

              ${question.sourceLinks && question.sourceLinks.length > 0 ? `
                <div class="mb-3 bg-slate-50 dark:bg-slate-800/50 p-2 rounded border border-slate-200/50 dark:border-slate-700/50">
                  <h3 class="text-xs font-normal mb-1.5 text-slate-500 dark:text-slate-400 inline-flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                    Sources
                  </h3>
                  <div>
                    ${question.sourceLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors mr-1.5 mb-1.5"><svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>${link.name}</a>`).join('')}
                  </div>
                </div>
              ` : ''}
            </div>

            <div class="flex justify-center px-4 py-3 border-t border-slate-200 dark:border-slate-700">
              <button class="next-button px-6 py-2 bg-blue-500 dark:bg-blue-500 text-white dark:text-white rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors shadow-lg text-sm">
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
