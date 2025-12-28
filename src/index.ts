import { Hono } from 'hono';
import { getCookie, setCookie } from 'hono/cookie';
import { serve } from '@hono/node-server';
import { getQuestionBySlug, getRandomQuestion, getRandomQuestions, questions } from './database.js';
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

  return c.html(renderLayout({
    title: 'Demokratie Quiz - Austrian Politics Quiz',
    description: 'Test your knowledge of Austrian politics with interactive flip cards',
    content: renderCardStack(questionStack, stats),
    question: questionStack[0],
    stats
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
  return c.html(renderStats(stats));
});

// Reset stats
app.post('/api/reset-stats', (c) => {
  setCookie(c, 'stats', JSON.stringify({ asked: 0, correct: 0, wrong: 0 }), {
    path: '/',
    maxAge: 60 * 60 * 24 * 365
  });
  const stats = { asked: 0, correct: 0, wrong: 0 };
  return c.html(renderStats(stats));
});

// All questions list (for sitemap/discovery)
app.get('/questions', (c) => {
  const stats = JSON.parse(getCookie(c, 'stats') || '{"asked":0,"correct":0,"wrong":0}');
  const questionList = questions.map(q => `
    <li class="question-item">
      <a href="/question/${q.slug}" class="question-link">
        ${q.question}
      </a>
    </li>
  `).join('');

  const content = `
    <div class="questions-list-container">
      <h1>All Questions</h1>
      <ul class="questions-list">
        ${questionList}
      </ul>
      <div class="actions">
        <a href="/" class="button">Back to Random Question</a>
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
