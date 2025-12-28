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
    <div class="card-container" id="card-container">
      <div class="card ${flipped ? 'flip' : ''}" id="quiz-card">
        <div class="inner">
          <!-- Front of card (Question) -->
          <div class="front">
            <div class="header">
              <h2>Question ${question.id}</h2>
            </div>
            <div class="content">
              <h3 class="question-text">${question.question}</h3>
              <form
                hx-post="/api/answer"
                hx-target="#card-container"
                hx-swap="innerHTML"
                class="options-form"
              >
                <input type="hidden" name="questionId" value="${question.id}">
                ${question.options.map(option => `
                  <button
                    type="submit"
                    name="answer"
                    value="${option.letter}"
                    class="option-button"
                  >
                    <span class="option-letter">${option.letter}</span>
                    <span class="option-text">${option.text}</span>
                  </button>
                `).join('')}
              </form>
            </div>
          </div>

          <!-- Back of card (Answer) -->
          <div class="back">
            <div class="content">
              <div class="result-header ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correct!' : '✗ Incorrect'}
              </div>

              <h3 class="question-text">${question.question}</h3>

              <div class="answer-info">
                <p class="correct-answer">
                  <strong>Correct Answer:</strong> ${question.correctAnswer}) ${correctOption?.text || 'Unknown'}
                </p>
                ${!isCorrect && selectedAnswer ? `
                  <p class="your-answer">
                    <strong>Your Answer:</strong> ${selectedAnswer}) ${question.options.find(o => o.letter === selectedAnswer)?.text || 'Unknown'}
                  </p>
                ` : ''}
              </div>

              <div class="background-info">
                <h3>Background Information</h3>
                <p>${question.backgroundInfo}</p>
              </div>

              <div class="actions">
                <button
                  hx-get="/api/next"
                  hx-target="#card-container"
                  hx-swap="innerHTML"
                  class="button next-button"
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
