import { Hono } from 'hono';
import { getCookie, setCookie } from 'hono/cookie';
import { serve } from '@hono/node-server';
import { getQuestionBySlug, getRandomQuestion, getRandomQuestions, questions, getAllTags, getQuestionsByTag } from './database.js';
import { renderLayout } from './views/layout.js';
import { renderCard } from './views/card.js';
import { renderCardStack } from './views/cardStack.js';
import { renderStats } from './views/stats.js';

const app = new Hono();

// Middleware to track stats in cookies
app.use('*', async (c, next) => {
  if (!getCookie(c, 'stats')) {
    setCookie(c, 'stats', JSON.stringify({ asked: 0, correct: 0, wrong: 0 }), {
      path: '/',
      maxAge: 60 * 60 * 24 * 365 // 1 year
    });
  }
  await next();
});

// Home page - random question stack
app.get('/', (c) => {
  const questionStack = getRandomQuestions(5);
  const stats = JSON.parse(getCookie(c, 'stats') || '{"asked":0,"correct":0,"wrong":0}');
  const allTags = getAllTags();

  return c.html(renderLayout({
    title: 'Demokratie Quiz - Austrian Politics Quiz',
    description: 'Test your knowledge of Austrian politics with interactive flip cards',
    content: renderCardStack(questionStack, stats),
    question: questionStack[0],
    stats,
    allTags
  }));
});

// Individual question by slug (SEO-friendly URLs)
app.get('/question/:slug', (c) => {
  const slug = c.req.param('slug');
  const question = getQuestionBySlug(slug);

  if (!question) {
    return c.text('Question not found', 404);
  }

  const stats = JSON.parse(getCookie(c, 'stats') || '{"asked":0,"correct":0,"wrong":0}');

  // Create a stack with the selected question at the top and 4 random others
  const otherQuestions = questions
    .filter(q => q.id !== question.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const questionStack = [question, ...otherQuestions];
  const content = renderCardStack(questionStack, stats);

  return c.html(renderLayout({
    title: `${question.question} - Demokratie Quiz`,
    description: `Quiz question: ${question.question}`,
    content,
    question,
    stats
  }));
});

// Filter questions by tag
app.get('/tag/:tag', (c) => {
  const tag = decodeURIComponent(c.req.param('tag'));
  const taggedQuestions = getQuestionsByTag(tag);

  if (taggedQuestions.length === 0) {
    return c.text('No questions found with this tag', 404);
  }

  const stats = JSON.parse(getCookie(c, 'stats') || '{"asked":0,"correct":0,"wrong":0}');
  const allTags = getAllTags();

  // Create a stack with up to 5 questions with this tag
  const questionStack = taggedQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  const content = renderCardStack(questionStack, stats);

  return c.html(renderLayout({
    title: `${tag} Questions - Demokratie Quiz`,
    description: `Quiz questions tagged with ${tag}`,
    content,
    question: questionStack[0],
    stats,
    allTags
  }));
});

// API endpoint to submit answer
app.post('/api/answer', async (c) => {
  const body = await c.req.parseBody();
  const questionId = parseInt(body.questionId as string);
  const selectedAnswer = body.answer as string;

  const question = questions.find(q => q.id === questionId);
  if (!question) {
    return c.text('Question not found', 404);
  }

  const isCorrect = selectedAnswer === question.correctAnswer;

  // Update stats
  const stats = JSON.parse(getCookie(c, 'stats') || '{"asked":0,"correct":0,"wrong":0}');
  stats.asked += 1;
  if (isCorrect) {
    stats.correct += 1;
  } else {
    stats.wrong += 1;
  }
  setCookie(c, 'stats', JSON.stringify(stats), {
    path: '/',
    maxAge: 60 * 60 * 24 * 365
  });

  // Return flipped card with result
  return c.html(renderCard(question, true, selectedAnswer, stats));
});

// API endpoint to get next random question
app.get('/api/next', (c) => {
  const question = getRandomQuestion();
  const stats = JSON.parse(getCookie(c, 'stats') || '{"asked":0,"correct":0,"wrong":0}');

  return c.html(renderCard(question, false, null, stats));
});

// API endpoint to update stats display
app.get('/api/stats', (c) => {
  const stats = JSON.parse(getCookie(c, 'stats') || '{"asked":0,"correct":0,"wrong":0}');
  const allTags = getAllTags();
  return c.html(renderStats(stats, allTags));
});

// Reset stats
app.post('/api/reset-stats', (c) => {
  setCookie(c, 'stats', JSON.stringify({ asked: 0, correct: 0, wrong: 0 }), {
    path: '/',
    maxAge: 60 * 60 * 24 * 365
  });
  const stats = { asked: 0, correct: 0, wrong: 0 };
  const allTags = getAllTags();
  return c.html(renderStats(stats, allTags));
});

// All questions list (for sitemap/discovery)
app.get('/questions', (c) => {
  const stats = JSON.parse(getCookie(c, 'stats') || '{"asked":0,"correct":0,"wrong":0}');
  const questionList = questions.map(q => `
    <li class="mb-2">
      <a href="/question/${q.slug}" class="block p-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors text-slate-900 dark:text-slate-100 text-sm">
        ${q.question}
      </a>
    </li>
  `).join('');

  const content = `
    <div class="questions-list-container max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border-2 border-slate-200 dark:border-slate-700">
      <h1 class="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">All Questions</h1>
      <ul class="space-y-2 mb-4">
        ${questionList}
      </ul>
      <div class="flex justify-center">
        <a href="/" class="px-6 py-2 bg-blue-500 dark:bg-blue-500 text-white dark:text-white rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors shadow-lg text-sm">Back to Random Question</a>
      </div>
    </div>
  `;

  return c.html(renderLayout({
    title: 'All Questions - Demokratie Quiz',
    description: 'Browse all Austrian politics quiz questions',
    content,
    question: null,
    stats
  }));
});

const port = 3000;

serve({
  fetch: app.fetch,
  port
});

console.log(`Server running at http://localhost:${port}`);
