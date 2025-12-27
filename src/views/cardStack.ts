import type { Question } from '../database';

export function renderCardStack(
  questions: Question[],
  stats: { asked: number; correct: number; wrong: number }
) {
  return `
    <div class="card-stack-container" id="card-stack-container">
      ${questions.map((question, index) => renderSingleCard(question, index, stats)).join('')}
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
          <div class="header">
            <h2>Question ${question.id}</h2>
          </div>
          <div class="content">
            <h3 class="question-text">${question.question}</h3>
            <form
              class="options-form"
              data-question-id="${question.id}"
            >
              ${question.options.map(option => `
                <button
                  type="button"
                  data-answer="${option.letter}"
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
            <div class="result-header" data-correct="${question.correctAnswer}">
              <!-- Will be filled by JavaScript -->
            </div>

            <h3 class="question-text">${question.question}</h3>

            <div class="answer-info">
              <p class="correct-answer">
                <strong>Correct Answer:</strong> ${question.correctAnswer}) ${question.options.find(o => o.letter === question.correctAnswer)?.text}
              </p>
              <p class="your-answer" style="display: none;">
                <!-- Will be filled by JavaScript if wrong -->
              </p>
            </div>

            <div class="background-info">
              <h3>Background Information</h3>
              <p>${question.backgroundInfo}</p>
            </div>

            <div class="actions">
              <button class="button next-button">
                Next Question
              </button>
              <a href="/questions" class="button secondary-button">All Questions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
