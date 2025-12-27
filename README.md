# PoliCards - Austrian Politics Quiz

An interactive quiz game featuring flip cards with questions about Austrian politics. Built with Hono, HTMX, and Node.js.

## Features

- **3D Flip Card Animation**: Smooth card flipping animation inspired by the CodePen example
- **SEO Optimized**: Each question has its own URL and is fully indexable by search engines
- **Statistics Tracking**: Tracks questions asked, correct answers, and wrong answers in the top bar
- **HTMX Powered**: Dynamic interactions without page reloads
- **Responsive Design**: Works on desktop and mobile devices
- **Session Persistence**: Statistics are stored in cookies

## Tech Stack

- **Runtime**: Node.js (compatible with Bun)
- **Framework**: Hono - Fast, lightweight web framework
- **Frontend**: HTMX for dynamic interactions
- **Styling**: Pure CSS with CSS Grid and Flexbox
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### Production

```bash
npm start
```

## Project Structure

```
policards/
├── src/
│   ├── index.ts           # Main server and routes
│   ├── database.ts        # Question database and queries
│   └── views/
│       ├── layout.ts      # HTML layout with SEO meta tags
│       ├── card.ts        # Flip card component
│       └── stats.ts       # Statistics bar component
├── package.json
├── tsconfig.json
└── README.md
```

## Routes

- `/` - Random question (home page)
- `/question/:slug` - Individual question by slug (SEO-friendly)
- `/questions` - List of all questions
- `/api/answer` - Submit an answer (POST)
- `/api/next` - Get next random question
- `/api/stats` - Get current statistics
- `/api/reset-stats` - Reset statistics (POST)

## Adding Questions

Questions are stored in `src/database.ts`. To add a new question:

```typescript
{
  id: 6,
  slug: "unique-slug-for-seo",
  question: "Your question here?",
  options: [
    { letter: "A", text: "Option A" },
    { letter: "B", text: "Option B" },
    { letter: "C", text: "Option C" },
    { letter: "D", text: "Option D" }
  ],
  correctAnswer: "B",
  backgroundInfo: "Detailed explanation about the answer..."
}
```

## SEO Features

- Unique URLs for each question (`/question/slug`)
- Meta tags (title, description)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- All questions are server-side rendered and indexable

## Future Enhancements

- Database integration (PostgreSQL, SQLite)
- User accounts and leaderboards
- Dynamic OG image generation
- Question difficulty levels
- Categories and tags
- Admin panel for managing questions
- Analytics integration

## License

MIT
