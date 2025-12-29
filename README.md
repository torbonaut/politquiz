# PoliCards - Austrian Politics Quiz

An interactive quiz game featuring a 3D card stack with questions about Austrian politics. Built with Hono, HTMX, and Tailwind CSS.

## Features

- **3D Card Stack**: Interactive card stack with smooth animations and depth perspective
- **Card Flip Animation**: Smooth 3D card flipping to reveal answers
- **Circular Card Recycling**: Cards animate in a circular arc from front to back of stack
- **Source Links**: Each question includes credible news sources (Der Standard, ORF, etc.)
- **Dark/Light Mode**: Toggle between dark and light themes with persistence
- **SEO Optimized**: Each question has its own URL and is fully indexable by search engines
- **Statistics Tracking**: Tracks questions asked, correct answers, wrong answers, and success rate
- **HTMX Powered**: Dynamic interactions without page reloads
- **Responsive Design**: Works on desktop and mobile devices (90% width, max 400px, 5:8 aspect ratio)
- **Session Persistence**: Statistics are stored in cookies

## Tech Stack

- **Runtime**: Node.js (compatible with Bun)
- **Framework**: Hono - Fast, lightweight web framework
- **Frontend**: HTMX for dynamic interactions
- **Styling**: Tailwind CSS (CDN) with custom 3D animations
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
│   ├── database.ts        # Question database (106 questions) and queries
│   └── views/
│       ├── layout.ts      # HTML layout with Tailwind CSS, 3D animations, and theme toggle
│       ├── cardStack.ts   # Card stack component with 3D transforms
│       ├── card.ts        # Single flip card component (legacy)
│       └── stats.ts       # Statistics bar with reset and theme toggle
├── update-sources.cjs     # Script to add default Wikipedia sources
├── convert-sources.cjs    # Script to convert source links format
├── add-sources.md         # Documentation of curated news sources
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
  id: 106,
  slug: "unique-slug-for-seo",
  question: "Your question here?",
  options: [
    { letter: "A", text: "Option A" },
    { letter: "B", text: "Option B" },
    { letter: "C", text: "Option C" },
    { letter: "D", text: "Option D" }
  ],
  correctAnswer: "B",
  backgroundInfo: "Detailed explanation about the answer...",
  sourceLinks: [
    { name: "Der Standard", url: "https://www.derstandard.at/story/..." },
    { name: "ORF", url: "https://orf.at/stories/..." }
  ]
}
```

### Source Links

Each question can include source links to credible news sources:
- Use established Austrian news outlets (Der Standard, ORF, Die Presse)
- International sources (Der Spiegel, The Guardian) for major stories
- Wikipedia for general FPÖ information
- Format: `{ name: "Source Name", url: "https://..." }`

## SEO Features

- Unique URLs for each question (`/question/slug`)
- Meta tags (title, description)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- All questions are server-side rendered and indexable

## Key Implementation Details

### 3D Card Stack
- Cards arranged with `translateY` offsets (18px, 36px, 54px, 72px) and scaling (0.96, 0.92, 0.88, 0.84)
- Perspective: 1500px for depth effect
- Cards use `transform-style: preserve-3d` for 3D transforms
- Z-index management for proper stacking order

### Card Animations
- **Slide Out**: 0.5s animation moving card right (translateX: 600px)
- **Circular Return**: 0.8s animation with arc motion back to bottom of stack
- Cards are recycled (moved to bottom) instead of removed
- JavaScript manages card state and position updates

### Theme System
- Toggle between dark/light mode with localStorage persistence
- Immediate theme initialization on page load (prevents flash)
- Tailwind dark mode using 'class' strategy
- Theme icon updates based on current mode

### Statistics
- Cookie-based persistence (1-year expiration)
- Tracks: questions asked, correct answers, wrong answers
- Calculates success rate percentage
- Reset functionality with confirmation dialog

## Future Enhancements

- Database integration (PostgreSQL, SQLite)
- User accounts and leaderboards
- Dynamic OG image generation for social sharing
- Question difficulty levels and categories
- Time-based challenges
- Admin panel for managing questions
- Analytics and performance tracking
- Multilingual support (English, German)

## License

MIT
