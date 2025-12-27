import { renderStats } from './stats';
import type { Question } from '../database';

interface LayoutProps {
  title: string;
  description: string;
  content: string;
  question: Question | null;
}

export function renderLayout({ title, description, content, question }: LayoutProps) {
  const url = question ? `https://policards.com/question/${question.slug}` : 'https://policards.com';
  const ogImage = 'https://policards.com/og-image.png'; // You can generate dynamic OG images later

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <title>${title}</title>
  <meta name="title" content="${title}">
  <meta name="description" content="${description}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${ogImage}">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${url}">
  <meta property="twitter:title" content="${title}">
  <meta property="twitter:description" content="${description}">
  <meta property="twitter:image" content="${ogImage}">

  <!-- Canonical URL -->
  <link rel="canonical" href="${url}">

  <!-- HTMX -->
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --primary-color: #2563eb;
      --correct-color: #10b981;
      --incorrect-color: #ef4444;
      --background: #0f172a;
      --surface: #1e293b;
      --text: #f1f5f9;
      --text-secondary: #cbd5e1;
      --border: #334155;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Header with Stats */
    .header {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 0.5rem 1rem;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .logo {
      font-size: 1rem;
      font-weight: bold;
      color: var(--primary-color);
      text-decoration: none;
    }

    .stats-bar {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .stats-container {
      display: flex;
      gap: 0.75rem;
    }

    .stats-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.05rem;
    }

    .stats-label {
      font-size: 0.55rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.03em;
      line-height: 1;
    }

    .stats-value {
      font-size: 0.9rem;
      font-weight: bold;
      color: var(--text);
      line-height: 1;
    }

    .stats-item.correct .stats-value {
      color: var(--correct-color);
    }

    .stats-item.incorrect .stats-value {
      color: var(--incorrect-color);
    }

    .reset-button {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-secondary);
      padding: 0.35rem 0.65rem;
      border-radius: 0.25rem;
      cursor: pointer;
      font-size: 0.7rem;
      transition: all 0.2s;
    }

    .reset-button:hover {
      background: var(--border);
      color: var(--text);
    }

    /* Main Content */
    main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    /* Flip Card Container */
    .card-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .card-stack-container {
      position: relative;
      width: 400px;
      max-width: 90vw;
      aspect-ratio: 5/8;
      perspective: 1500px;
    }

    .card {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      cursor: pointer;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card:not(.active) {
      pointer-events: none;
    }

    /* Stack positioning - cards behind are slightly offset */
    .card[data-stack-index="0"] {
      transform: translateY(0) scale(1);
      opacity: 1;
    }

    .card[data-stack-index="1"] {
      transform: translateY(8px) scale(0.98);
      opacity: 0.9;
    }

    .card[data-stack-index="2"] {
      transform: translateY(16px) scale(0.96);
      opacity: 0.8;
    }

    .card[data-stack-index="3"] {
      transform: translateY(24px) scale(0.94);
      opacity: 0.7;
    }

    .card[data-stack-index="4"] {
      transform: translateY(32px) scale(0.92);
      opacity: 0.6;
    }

    /* Card removal animation */
    .card.removing {
      animation: cardSlideOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes cardSlideOut {
      0% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) translateX(50px) scale(0.8);
        opacity: 0;
      }
    }

    .card > .inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transform-style: preserve-3d;
      transform-origin: center center;
      transition: none;
    }

    /* Flip animation with lift effect */
    .card.flip > .inner {
      animation: cardFlipWithLift 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes cardFlipWithLift {
      0% {
        transform: translateZ(0) rotateY(0deg);
        box-shadow:
          rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
          rgba(42, 51, 70, 0.04) 0px 2px 2px -1px;
      }
      /* Lift up */
      25% {
        transform: translateZ(80px) translateY(-20px) rotateY(0deg);
        box-shadow:
          rgba(14, 63, 126, 0.15) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.2) 0px 30px 40px -10px,
          rgba(42, 51, 70, 0.15) 0px 20px 30px -5px;
      }
      /* Flip while elevated */
      75% {
        transform: translateZ(80px) translateY(-20px) rotateY(180deg);
        box-shadow:
          rgba(14, 63, 126, 0.15) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.2) 0px 30px 40px -10px,
          rgba(42, 51, 70, 0.15) 0px 20px 30px -5px;
      }
      /* Set back down */
      100% {
        transform: translateZ(0) translateY(0) rotateY(180deg);
        box-shadow:
          rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
          rgba(42, 51, 70, 0.04) 0px 2px 2px -1px;
      }
    }

    /* Flip back animation (reverse) */
    .card.flip-back > .inner {
      animation: cardFlipBackWithLift 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes cardFlipBackWithLift {
      0% {
        transform: translateZ(0) rotateY(180deg);
        box-shadow:
          rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
          rgba(42, 51, 70, 0.04) 0px 2px 2px -1px;
      }
      25% {
        transform: translateZ(80px) translateY(-20px) rotateY(180deg);
        box-shadow:
          rgba(14, 63, 126, 0.15) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.2) 0px 30px 40px -10px,
          rgba(42, 51, 70, 0.15) 0px 20px 30px -5px;
      }
      75% {
        transform: translateZ(80px) translateY(-20px) rotateY(0deg);
        box-shadow:
          rgba(14, 63, 126, 0.15) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.2) 0px 30px 40px -10px,
          rgba(42, 51, 70, 0.15) 0px 20px 30px -5px;
      }
      100% {
        transform: translateZ(0) translateY(0) rotateY(0deg);
        box-shadow:
          rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
          rgba(42, 51, 70, 0.04) 0px 2px 2px -1px;
      }
    }

    .card .front,
    .card .back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 15px;
      overflow: hidden;
      font-family: inherit;
      background: var(--surface);
      transform-style: preserve-3d;
      transition: box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      box-sizing: border-box;
      box-shadow:
        rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
        rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
        rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
        rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
        rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
        rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
        rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
    }

    .card:hover .front,
    .card:hover .back {
      box-shadow:
        rgba(14, 63, 126, 0.1) 0px 0px 0px 1px,
        rgba(42, 51, 70, 0.1) 0px 5px 10px -3px,
        rgba(42, 51, 70, 0.1) 0px 10px 20px -5px,
        rgba(42, 51, 70, 0.1) 0px 20px 30px -10px;
    }

    .back {
      transform: rotateY(180deg);
      border: 15px solid var(--primary-color);
    }

    .header {
      background: var(--primary-color);
      margin: 15px;
      padding: 0.75rem;
      border-radius: 12px;
      border-bottom-right-radius: 100px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header h2 {
      color: white;
      font-size: 1rem;
      margin: 0;
    }

    .content {
      margin: 15px 12px 12px 12px;
      overflow-y: auto;
      max-height: calc(100% - 150px);
    }

    .question-text {
      font-size: 0.95rem;
      margin-bottom: 1rem;
      line-height: 1.4;
      color: var(--text);
      padding: 0 8px;
    }

    /* Options Form */
    .options-form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .option-button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.65rem 1rem;
      background: var(--background);
      border: 2px solid var(--border);
      border-radius: 0.5rem;
      color: var(--text);
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s;
      text-align: left;
    }

    .option-button:hover {
      background: var(--border);
      border-color: var(--primary-color);
      transform: translateY(-2px);
    }

    .option-letter {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      background: var(--primary-color);
      border-radius: 50%;
      font-weight: bold;
      font-size: 0.75rem;
      flex-shrink: 0;
    }

    .option-text {
      flex: 1;
    }

    /* Result Display */
    .result-header {
      font-size: 1.25rem;
      font-weight: bold;
      text-align: center;
      padding: 0.75rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
    }

    .result-header.correct {
      background: rgba(16, 185, 129, 0.2);
      color: var(--correct-color);
    }

    .result-header.incorrect {
      background: rgba(239, 68, 68, 0.2);
      color: var(--incorrect-color);
    }

    .answer-info {
      background: var(--background);
      border-radius: 0.5rem;
      padding: 0.75rem;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
    }

    .answer-info p {
      margin-bottom: 0.35rem;
      line-height: 1.5;
    }

    .answer-info p:last-child {
      margin-bottom: 0;
    }

    .correct-answer {
      color: var(--correct-color);
    }

    .your-answer {
      color: var(--incorrect-color);
    }

    .background-info {
      background: var(--background);
      border-radius: 0.5rem;
      padding: 0.75rem;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
    }

    .background-info h3 {
      margin-bottom: 0.5rem;
      color: var(--primary-color);
      font-size: 0.9rem;
    }

    .background-info p {
      line-height: 1.5;
      color: var(--text-secondary);
    }

    /* Actions */
    .actions {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .button {
      flex: 1;
      padding: 0.6rem 1rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }

    .button:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    .secondary-button {
      background: var(--background);
      border: 2px solid var(--border);
    }

    .secondary-button:hover {
      background: var(--border);
    }

    /* Questions List Page */
    .questions-list-container {
      max-width: 800px;
      margin: 0 auto;
      background: var(--surface);
      border-radius: 1rem;
      padding: 3rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
    }

    .questions-list-container h1 {
      margin-bottom: 2rem;
      color: var(--primary-color);
    }

    .questions-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .question-item {
      background: var(--background);
      border-radius: 0.5rem;
      border: 1px solid var(--border);
      transition: all 0.2s;
    }

    .question-item:hover {
      border-color: var(--primary-color);
      transform: translateX(4px);
    }

    .question-link {
      display: block;
      padding: 1.25rem;
      color: var(--text);
      text-decoration: none;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 1rem;
      }

      .stats-container {
        gap: 1rem;
      }

      .stats-item {
        gap: 0.125rem;
      }

      .stats-label {
        font-size: 0.625rem;
      }

      .stats-value {
        font-size: 1rem;
      }

      .card-content {
        padding: 2rem;
      }

      .question-text {
        font-size: 1.25rem;
      }

      .option-button {
        padding: 0.875rem 1rem;
      }

      .actions {
        flex-direction: column;
      }

      .questions-list-container {
        padding: 2rem;
      }
    }

    /* HTMX Loading States */
    .htmx-swapping {
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="header-content">
      <a href="/" class="logo">PoliCards</a>
      ${renderStats({ asked: 0, correct: 0, wrong: 0 })}
    </div>
  </header>

  <main>
    ${content}
  </main>

  <script>
    // Initialize card stack on page load
    document.addEventListener('DOMContentLoaded', function() {
      initializeCardStack();
    });

    function initializeCardStack() {
      const container = document.getElementById('card-stack-container');
      if (!container) return;

      const cards = Array.from(container.querySelectorAll('.card'));

      // Handle answer button clicks
      cards.forEach((card) => {
        const form = card.querySelector('.options-form');
        const optionButtons = card.querySelectorAll('.option-button');
        const questionId = form.dataset.questionId;

        optionButtons.forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedAnswer = this.dataset.answer;
            handleAnswer(card, questionId, selectedAnswer);
          });
        });

        // Handle next button click
        const nextButton = card.querySelector('.next-button');
        if (nextButton) {
          nextButton.addEventListener('click', function() {
            handleNextQuestion(card);
          });
        }

        // Handle click to flip back
        card.addEventListener('click', function(e) {
          if (e.target.tagName === 'BUTTON' ||
              e.target.tagName === 'A' ||
              e.target.closest('button') ||
              e.target.closest('a')) {
            return;
          }

          if (this.classList.contains('flip') && this.classList.contains('active')) {
            this.classList.remove('flip');
            this.classList.add('flip-back');

            // Remove flip-back class after animation completes
            setTimeout(() => {
              this.classList.remove('flip-back');
            }, 1200);
          }
        });
      });
    }

    function handleAnswer(card, questionId, selectedAnswer) {
      const correctAnswer = card.querySelector('.result-header').dataset.correct;
      const isCorrect = selectedAnswer === correctAnswer;

      // Update stats
      fetch('/api/answer', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
          questionId: questionId,
          answer: selectedAnswer
        })
      }).then(() => {
        htmx.ajax('GET', '/api/stats', {target: '#stats-bar', swap: 'outerHTML'});
      });

      // Update result display
      const resultHeader = card.querySelector('.result-header');
      resultHeader.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
      resultHeader.className = 'result-header ' + (isCorrect ? 'correct' : 'incorrect');

      // Show wrong answer if incorrect
      if (!isCorrect) {
        const yourAnswer = card.querySelector('.your-answer');
        const correctOption = Array.from(card.querySelectorAll('.option-button'))
          .find(btn => btn.dataset.answer === selectedAnswer);
        const optionText = correctOption ? correctOption.querySelector('.option-text').textContent : '';
        yourAnswer.innerHTML = '<strong>Your Answer:</strong> ' + selectedAnswer + ') ' + optionText;
        yourAnswer.style.display = 'block';
      }

      // Flip the card
      card.classList.add('flip');
    }

    function handleNextQuestion(card) {
      const container = document.getElementById('card-stack-container');
      const cards = Array.from(container.querySelectorAll('.card:not(.removing)'));

      // Animate card removal
      card.classList.add('removing');
      card.classList.remove('active');

      // After animation, remove card and update stack
      setTimeout(() => {
        card.remove();

        // Update remaining cards
        const remainingCards = Array.from(container.querySelectorAll('.card:not(.removing)'));
        remainingCards.forEach((c, index) => {
          c.dataset.stackIndex = index;
          c.style.zIndex = 10 - index;

          if (index === 0) {
            c.classList.add('active');
            c.classList.remove('flip');
          }
        });

        // Add a new card at the bottom if we have less than 5
        if (remainingCards.length < 5) {
          addNewCard(container);
        }
      }, 600);
    }

    function addNewCard(container) {
      // Get a random question from available ones
      fetch('/api/next')
        .then(res => res.text())
        .then(html => {
          const temp = document.createElement('div');
          temp.innerHTML = html;
          const newCardContent = temp.querySelector('.card');

          if (newCardContent) {
            const cards = Array.from(container.querySelectorAll('.card'));
            const newIndex = cards.length;

            const newCard = document.createElement('div');
            newCard.className = 'card';
            newCard.dataset.stackIndex = newIndex;
            newCard.dataset.questionId = newCardContent.dataset.questionId;
            newCard.style.zIndex = 10 - newIndex;
            newCard.innerHTML = newCardContent.innerHTML;

            container.appendChild(newCard);

            // Initialize the new card
            const form = newCard.querySelector('.options-form');
            const optionButtons = newCard.querySelectorAll('.option-button');
            const questionId = form.dataset.questionId;

            optionButtons.forEach(button => {
              button.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedAnswer = this.dataset.answer;
                handleAnswer(newCard, questionId, selectedAnswer);
              });
            });

            const nextButton = newCard.querySelector('.next-button');
            if (nextButton) {
              nextButton.addEventListener('click', function() {
                handleNextQuestion(newCard);
              });
            }

            newCard.addEventListener('click', function(e) {
              if (e.target.tagName === 'BUTTON' ||
                  e.target.tagName === 'A' ||
                  e.target.closest('button') ||
                  e.target.closest('a')) {
                return;
              }

              if (this.classList.contains('flip') && this.classList.contains('active')) {
                this.classList.remove('flip');
                this.classList.add('flip-back');

                setTimeout(() => {
                  this.classList.remove('flip-back');
                }, 1200);
              }
            });
          }
        });
    }
  </script>
</body>
</html>
  `;
}
