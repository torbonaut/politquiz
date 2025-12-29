import { renderStats } from './stats';
import type { Question } from '../database';

interface LayoutProps {
  title: string;
  description: string;
  content: string;
  question: Question | null;
  stats: { asked: number; correct: number; wrong: number };
  allTags?: string[];
  currentTag?: string;
}

export function renderLayout({ title, description, content, question, stats, allTags = [], currentTag }: LayoutProps) {
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
      ${renderStats(stats, allTags, currentTag)}
    </div>
  </header>

  <main class="flex-1 container mx-auto px-4 py-8">
    ${content}
  </main>

  <a href="/questions" class="fixed bottom-6 right-6 w-12 h-12 bg-slate-200 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 text-lg shadow-lg z-50 hover:bg-blue-500 hover:border-blue-500 hover:scale-110 hover:shadow-xl group all-questions-icon" title="All Questions">
    <span class="text-xl text-slate-900 dark:text-slate-100">☰</span>
    <span class="absolute right-full mr-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 px-3 py-2 rounded text-xs whitespace-nowrap shadow-lg border border-slate-300 dark:border-slate-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">All Questions</span>
  </a>

  <!-- Impressum Modal -->
  <div id="impressum-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 max-w-md w-full max-h-[80vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Impressum</h2>
          <button class="modal-close text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="text-sm text-slate-700 dark:text-slate-300 space-y-3">
          <p class="font-semibold">Medieninhaber und für den Inhalt verantwortlich:</p>
          <p class="font-bold">machma.app</p>
          <div class="space-y-2">
            <a href="https://www.machma.at" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <span>www.machma.at</span>
            </a>
            <a href="mailto:mail@machma.app" class="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>mail@machma.app</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Datenschutz Modal -->
  <div id="datenschutz-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Datenschutzerklärung</h2>
          <button class="modal-close text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="text-sm text-slate-700 dark:text-slate-300 space-y-4">
          <section>
            <h3 class="font-semibold text-base mb-2">1. Verantwortlicher</h3>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p class="mt-2">
              machma.app<br>
              E-Mail: <a href="mailto:mail@machma.app" class="text-blue-600 dark:text-blue-400 hover:underline">mail@machma.app</a>
            </p>
          </section>

          <section>
            <h3 class="font-semibold text-base mb-2">2. Erhebung und Speicherung personenbezogener Daten</h3>
            <p>Bei der Nutzung dieser Website werden folgende Daten lokal in Ihrem Browser gespeichert:</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>Cookie für Quiz-Statistiken (Anzahl gestellter Fragen, richtige/falsche Antworten)</li>
              <li>LocalStorage für Theme-Präferenz (Hell/Dunkel-Modus)</li>
            </ul>
            <p class="mt-2">Diese Daten werden ausschließlich lokal in Ihrem Browser gespeichert und nicht an Server übermittelt.</p>
          </section>

          <section>
            <h3 class="font-semibold text-base mb-2">3. Zweck der Datenverarbeitung</h3>
            <p>Die gespeicherten Daten dienen ausschließlich dazu:</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>Ihre Quiz-Statistiken während mehrerer Sitzungen zu erhalten</li>
              <li>Ihre Präferenz für das Design-Theme zu speichern</li>
            </ul>
          </section>

          <section>
            <h3 class="font-semibold text-base mb-2">4. Weitergabe von Daten</h3>
            <p>Eine Weitergabe Ihrer personenbezogenen Daten an Dritte findet nicht statt.</p>
          </section>

          <section>
            <h3 class="font-semibold text-base mb-2">5. Ihre Rechte</h3>
            <p>Sie haben jederzeit das Recht:</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>Ihre gespeicherten Daten zu löschen (über "Statistiken zurücksetzen" im Menü)</li>
              <li>Die Cookie-Speicherung in Ihren Browser-Einstellungen zu deaktivieren</li>
              <li>Auskunft über Ihre gespeicherten Daten zu verlangen</li>
            </ul>
          </section>

          <section>
            <h3 class="font-semibold text-base mb-2">6. Aktualität der Datenschutzerklärung</h3>
            <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2024.</p>
          </section>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Initialize card stack on page load
    document.addEventListener('DOMContentLoaded', function() {
      initializeCardStack();
      initializeThemeToggle();
      initializeMenuDropdown();
      initializeModals();
    });

    // Reinitialize after HTMX swaps (for reset stats, etc.)
    document.body.addEventListener('htmx:afterSwap', function(event) {
      if (event.detail.target.id === 'stats-bar') {
        initializeThemeToggle();
        initializeMenuDropdown();
        initializeModals();
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

    function initializeModals() {
      const impressumButton = document.getElementById('impressum-button');
      const datenschutzButton = document.getElementById('datenschutz-button');
      const impressumModal = document.getElementById('impressum-modal');
      const datenschutzModal = document.getElementById('datenschutz-modal');

      if (impressumButton && impressumModal) {
        impressumButton.addEventListener('click', function() {
          impressumModal.classList.remove('hidden');
          document.getElementById('menu-dropdown')?.classList.add('hidden');
        });
      }

      if (datenschutzButton && datenschutzModal) {
        datenschutzButton.addEventListener('click', function() {
          datenschutzModal.classList.remove('hidden');
          document.getElementById('menu-dropdown')?.classList.add('hidden');
        });
      }

      // Close modals
      const modalCloseButtons = document.querySelectorAll('.modal-close');
      modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
          impressumModal?.classList.add('hidden');
          datenschutzModal?.classList.add('hidden');
        });
      });

      // Close on backdrop click
      [impressumModal, datenschutzModal].forEach(modal => {
        if (modal) {
          modal.addEventListener('click', function(e) {
            if (e.target === modal) {
              modal.classList.add('hidden');
            }
          });
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          impressumModal?.classList.add('hidden');
          datenschutzModal?.classList.add('hidden');
        }
      });
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

        // Handle tab switching
        const tabButtons = card.querySelectorAll('.tab-button');
        const tabContents = card.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
          button.addEventListener('click', function(e) {
            e.stopPropagation();
            const tabName = this.dataset.tab;

            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => {
              btn.classList.remove('active', 'border-blue-500', 'text-blue-600', 'dark:text-blue-400');
              btn.classList.add('border-transparent', 'text-slate-600', 'dark:text-slate-400');
            });
            tabContents.forEach(content => {
              content.classList.remove('active');
              content.classList.add('hidden');
            });

            // Add active class to clicked tab and corresponding content
            this.classList.add('active', 'border-blue-500', 'text-blue-600', 'dark:text-blue-400');
            this.classList.remove('border-transparent', 'text-slate-600', 'dark:text-slate-400');
            const activeContent = card.querySelector('[data-tab-content="' + tabName + '"]');
            if (activeContent) {
              activeContent.classList.add('active');
              activeContent.classList.remove('hidden');
            }
          });
        });

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
      resultHeader.textContent = isCorrect ? '✓ Richtig!' : '✗ Falsch';
      if (isCorrect) {
        resultHeader.classList.add('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300', 'border', 'border-emerald-300', 'dark:border-emerald-700');
      } else {
        resultHeader.classList.add('bg-red-100', 'dark:bg-red-900/30', 'text-red-700', 'dark:text-red-300', 'border', 'border-red-300', 'dark:border-red-700');
      }

      // Show wrong answer if incorrect
      if (!isCorrect) {
        const yourAnswer = card.querySelector('.your-answer');
        const correctOption = Array.from(card.querySelectorAll('.option-button'))
          .find(btn => btn.dataset.answer === selectedAnswer);
        const optionText = correctOption ? correctOption.querySelector('.option-text').textContent : '';
        yourAnswer.innerHTML = '<strong>Deine Antwort:</strong> ' + selectedAnswer + ') ' + optionText;
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
        resultHeader.classList.remove('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300', 'border', 'border-emerald-300', 'dark:border-emerald-700', 'bg-red-100', 'dark:bg-red-900/30', 'text-red-700', 'dark:text-red-300', 'border-red-300', 'dark:border-red-700');

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
