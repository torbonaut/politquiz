import type { Question } from '../database';

export function renderCard(
  question: Question,
  flipped: boolean,
  selectedAnswer: string | null,
  stats: { asked: number; correct: number; wrong: number }
) {
  const isCorrect = selectedAnswer === question.correctAnswer;
  const correctOption = question.options.find(o => o.letter === question.correctAnswer);

  return `
    <div class="max-w-2xl mx-auto" id="card-container">
      <div class="card ${flipped ? 'flip' : ''} w-full" id="quiz-card">
        <div class="inner">
          <!-- Front of card (Question) -->
          <div class="front">
            <div class="bg-slate-800 dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border-2 border-slate-700 dark:border-slate-700">
              <div class="mb-6">
                <h2 class="text-xl font-bold text-blue-400 dark:text-blue-400">Question ${question.id}</h2>
              </div>
              <div>
                <h3 class="text-2xl font-semibold mb-6 text-slate-100 dark:text-slate-100">${question.question}</h3>
                <form
                  hx-post="/api/answer"
                  hx-target="#card-container"
                  hx-swap="innerHTML"
                  class="space-y-3"
                >
                  <input type="hidden" name="questionId" value="${question.id}">
                  ${question.options.map(option => `
                    <button
                      type="submit"
                      name="answer"
                      value="${option.letter}"
                      class="w-full flex items-center gap-4 p-4 bg-slate-700 dark:bg-slate-700 hover:bg-slate-600 dark:hover:bg-slate-600 text-left rounded-lg transition-all cursor-pointer border-2 border-slate-600 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500"
                    >
                      <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 dark:bg-blue-500 text-white dark:text-white rounded-full font-bold">${option.letter}</span>
                      <span class="flex-1 text-slate-100 dark:text-slate-100">${option.text}</span>
                    </button>
                  `).join('')}
                </form>
              </div>
            </div>
          </div>

          <!-- Back of card (Answer) -->
          <div class="back">
            <div class="bg-slate-800 dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border-2 border-slate-700 dark:border-slate-700">
              <div class="mb-6 text-center">
                <div class="text-3xl font-bold ${isCorrect ? 'text-emerald-500 dark:text-emerald-500' : 'text-red-500 dark:text-red-500'}">
                  ${isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                </div>
              </div>

              <h3 class="text-2xl font-semibold mb-6 text-slate-100 dark:text-slate-100">${question.question}</h3>

              <div class="mb-6 space-y-3 bg-slate-700/50 dark:bg-slate-700/50 p-4 rounded-lg">
                <p class="text-slate-100 dark:text-slate-100">
                  <strong>Correct Answer:</strong> ${question.correctAnswer}) ${correctOption?.text || 'Unknown'}
                </p>
                ${!isCorrect && selectedAnswer ? `
                  <p class="text-red-400 dark:text-red-400">
                    <strong>Your Answer:</strong> ${selectedAnswer}) ${question.options.find(o => o.letter === selectedAnswer)?.text || 'Unknown'}
                  </p>
                ` : ''}
              </div>

              <div class="mb-6 bg-slate-700/30 dark:bg-slate-700/30 p-6 rounded-lg border border-slate-600 dark:border-slate-600">
                <h3 class="text-lg font-semibold mb-3 text-blue-400 dark:text-blue-400">Background Information</h3>
                <p class="text-slate-300 dark:text-slate-300 leading-relaxed">${question.backgroundInfo}</p>
              </div>

              <div class="flex justify-center">
                <button
                  hx-get="/api/next"
                  hx-target="#card-container"
                  hx-swap="innerHTML"
                  class="px-8 py-3 bg-blue-500 dark:bg-blue-500 text-white dark:text-white rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors shadow-lg"
                >
                  Next Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
