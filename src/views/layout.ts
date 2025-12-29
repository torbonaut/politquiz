import { renderStats } from './stats';
import type { Question } from '../database';

interface LayoutProps {
  title: string;
  description: string;
  content: string;
  question: Question | null;
  stats: { asked: number; correct: number; wrong: number };
  allTags?: string[];
}

export function renderLayout({ title, description, content, question, stats, allTags = [] }: LayoutProps) {
  const url = question ? `https://policards.com/question/${question.slug}` : 'https://policards.com';
  const ogImage = 'https://policards.com/og-image.png';

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

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- HTMX -->
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#3b82f6',
              hover: '#2563eb'
            }
          }
        }
      }
    }
  </script>

  <script>
    // Initialize theme immediately to prevent flash
    (function() {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>

  <style>
    /* Card stack container */
    .card-stack-container {
      position: relative;
      width: 90%;
      max-width: 400px;
      aspect-ratio: 5/8;
      perspective: 1500px;
      margin: 0 auto;
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
      transform: translateY(18px) scale(0.96);
      opacity: 0.9;
    }

    .card[data-stack-index="2"] {
      transform: translateY(36px) scale(0.92);
      opacity: 0.8;
    }

    .card[data-stack-index="3"] {
      transform: translateY(54px) scale(0.88);
      opacity: 0.7;
    }

    .card[data-stack-index="4"] {
      transform: translateY(72px) scale(0.84);
      opacity: 0.6;
    }

    /* Card removal animation - slide out to the right */
    .card.removing {
      animation: cardSlideOut 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes cardSlideOut {
      0% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(0) translateX(600px) scale(0.9);
        opacity: 0;
      }
    }

    /* Card return animation - 3D arc to bottom of stack */
    .card.returning {
      animation: cardMoveToBottom 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes cardMoveToBottom {
      0% {
        transform: translateY(0) translateX(600px) translateZ(0) scale(0.9);
        opacity: 0;
      }
      30% {
        transform: translateY(-50px) translateX(350px) translateZ(100px) scale(0.87);
        opacity: 0.4;
      }
      60% {
        transform: translateY(30px) translateX(100px) translateZ(50px) scale(0.85);
        opacity: 0.55;
      }
      100% {
        transform: translateY(72px) translateX(0) translateZ(0) scale(0.84);
        opacity: 0.6;
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

    .card .back {
      transform: rotateY(180deg);
    }

    /* Prevent FOUC */
    .htmx-swapping {
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    /* Hide all questions icon on questions list page */
    body:has(.questions-list-container) .all-questions-icon {
      display: none;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300">
  <header class="sticky top-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm z-50 shadow-md">
    <div class="max-w-screen-xl mx-auto px-4">
      ${renderStats(stats, allTags)}
    </div>
  </header>

  <main class="flex-1 container mx-auto px-4 py-8">
    ${content}
  </main>

  <a href="/questions" class="fixed bottom-6 right-6 w-12 h-12 bg-slate-200 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 text-lg shadow-lg z-50 hover:bg-blue-500 hover:border-blue-500 hover:scale-110 hover:shadow-xl group all-questions-icon" title="All Questions">
    <span class="text-xl text-slate-900 dark:text-slate-100">☰</span>
    <span class="absolute right-full mr-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 px-3 py-2 rounded text-xs whitespace-nowrap shadow-lg border border-slate-300 dark:border-slate-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">All Questions</span>
  </a>

  <script>
    // Initialize card stack on page load
    document.addEventListener('DOMContentLoaded', function() {
      initializeCardStack();
      initializeThemeToggle();
      initializeMenuDropdown();
    });

    // Reinitialize after HTMX swaps (for reset stats, etc.)
    document.body.addEventListener('htmx:afterSwap', function(event) {
      if (event.detail.target.id === 'stats-bar') {
        initializeThemeToggle();
        initializeMenuDropdown();
      }
    });

    function initializeMenuDropdown() {
      const menuToggle = document.getElementById('menu-toggle');
      const menuDropdown = document.getElementById('menu-dropdown');

      if (menuToggle && menuDropdown) {
        // Toggle dropdown on button click
        menuToggle.addEventListener('click', function(e) {
          e.stopPropagation();
          menuDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
          if (!menuDropdown.contains(e.target) && !menuToggle.contains(e.target)) {
            menuDropdown.classList.add('hidden');
          }
        });

        // Close dropdown when clicking a link inside
        menuDropdown.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', function() {
            menuDropdown.classList.add('hidden');
          });
        });
      }
    }

    function initializeThemeToggle() {
      const themeToggle = document.getElementById('theme-toggle');
      const themeIcon = document.getElementById('theme-icon');
      const html = document.documentElement;

      // Update icon based on current theme
      const updateIcon = () => {
        const isDark = html.classList.contains('dark');
        if (themeIcon) {
          themeIcon.textContent = isDark ? '☀️' : '🌙';
        }
      };

      // Set initial icon
      updateIcon();

      if (themeToggle) {
        themeToggle.addEventListener('click', function() {
          const isDark = html.classList.toggle('dark');
          const newTheme = isDark ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          updateIcon();
        });
      }
    }

    function initializeCardStack() {
      const container = document.getElementById('card-stack-container');
      if (!container) return;

      const cards = Array.from(container.querySelectorAll('.card'));

      // Handle answer button clicks
      cards.forEach((card) => {
        const form = card.querySelector('.options-form');
        if (!form) return;

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
        fetch('/api/stats')
          .then(r => r.text())
          .then(html => {
            const statsBar = document.getElementById('stats-bar');
            if (statsBar) {
              statsBar.outerHTML = html;
              initializeThemeToggle();
              initializeMenuDropdown();
            }
          });
      });

      // Update result display
      const resultHeader = card.querySelector('.result-header');
      resultHeader.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
      resultHeader.classList.add(isCorrect ? 'text-emerald-500' : 'text-red-500');

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

      // Stage 1: Slide card out to the right
      card.classList.add('removing');
      card.classList.remove('active');

      // After slide out, reset and prepare for return animation
      setTimeout(() => {
        // Reset card's result display
        const resultHeader = card.querySelector('.result-header');
        resultHeader.textContent = '';
        resultHeader.classList.remove('text-emerald-500', 'text-red-500');

        const yourAnswer = card.querySelector('.your-answer');
        if (yourAnswer) {
          yourAnswer.style.display = 'none';
          yourAnswer.innerHTML = '';
        }

        // Remove flip state
        card.classList.remove('flip');

        // Move card to end of stack in DOM
        container.appendChild(card);

        // Update all cards' indices and z-index
        const allCards = Array.from(container.querySelectorAll('.card'));
        allCards.forEach((c, index) => {
          c.dataset.stackIndex = index;
          c.style.zIndex = 10 - index;

          if (index === 0) {
            c.classList.add('active');
          } else {
            c.classList.remove('active');
          }
        });

        // Stage 2: Animate card returning to bottom of stack
        card.classList.remove('removing');
        card.classList.add('returning');

        // Remove returning class after animation completes
        setTimeout(() => {
          card.classList.remove('returning');
        }, 800);
      }, 500);
    }

    // Re-initialize on HTMX swap
    document.body.addEventListener('htmx:afterSwap', function(e) {
      if (e.detail.target.id === 'card-stack-container') {
        setTimeout(() => {
          initializeCardStack();
        }, 50);
      }
    });
  </script>
</body>
</html>
  `;
}
