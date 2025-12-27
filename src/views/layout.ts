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

    .card {
      width: 400px;
      max-width: 90vw;
      aspect-ratio: 5/8;
      transform-style: preserve-3d;
      cursor: pointer;
      perspective: 1500px;
    }

    .card > .inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
      transform-style: preserve-3d;
      transform-origin: center center;
    }

    .card.flip > .inner {
      transform: rotateY(180deg);
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
    // Add flip toggle to card when it's rendered
    document.addEventListener('htmx:afterSwap', function(event) {
      initializeCard();
    });

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
      initializeCard();
    });

    function initializeCard() {
      const card = document.querySelector('.card');
      if (card && !card.dataset.initialized) {
        card.dataset.initialized = 'true';

        // Only allow clicking on the back side to flip back
        card.addEventListener('click', function(e) {
          // Don't flip if clicking on a button or link
          if (e.target.tagName === 'BUTTON' ||
              e.target.tagName === 'A' ||
              e.target.closest('button') ||
              e.target.closest('a')) {
            return;
          }

          // Only allow flipping back when card is already flipped
          if (this.classList.contains('flip')) {
            this.classList.remove('flip');
          }
        });
      }
    }

    // Track previous card state before swap
    let wasFlipped = false;
    document.body.addEventListener('htmx:beforeSwap', function(event) {
      if (event.detail.target.id === 'card-container') {
        const oldCard = document.querySelector('.card');
        wasFlipped = oldCard && oldCard.classList.contains('flip');
      }
    });

    // Update stats and handle card flip
    document.body.addEventListener('htmx:afterSwap', function(event) {
      if (event.detail.target.id === 'card-container') {
        const card = document.querySelector('.card');

        if (card) {
          // Check if this is an answer result (server sent flip class)
          const isAnswerResult = card.classList.contains('flip');

          if (isAnswerResult) {
            // Trigger stats update after answer
            htmx.ajax('GET', '/api/stats', {target: '#stats-bar', swap: 'outerHTML'});
          } else if (wasFlipped) {
            // This is a new question loaded after being on flipped card
            // Make sure flip class is removed
            card.classList.remove('flip');
          }

          // Reinitialize card click handler
          card.dataset.initialized = '';
          initializeCard();
        }
      }
    });
  </script>
</body>
</html>
  `;
}
