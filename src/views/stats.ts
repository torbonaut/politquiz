export function renderStats(stats: { asked: number; correct: number; wrong: number }) {
  const percentage = stats.asked > 0 ? Math.round((stats.correct / stats.asked) * 100) : 0;

  return `
    <div class="stats-bar" id="stats-bar">
      <div class="stats-container">
        <div class="stats-item">
          <span class="stats-label">Asked</span>
          <span class="stats-value">${stats.asked}</span>
        </div>
        <div class="stats-item correct">
          <span class="stats-label">Correct</span>
          <span class="stats-value">${stats.correct}</span>
        </div>
        <div class="stats-item incorrect">
          <span class="stats-label">Wrong</span>
          <span class="stats-value">${stats.wrong}</span>
        </div>
        <div class="stats-item">
          <span class="stats-label">Success Rate</span>
          <span class="stats-value">${percentage}%</span>
        </div>
      </div>
      <button
        hx-post="/api/reset-stats"
        hx-target="#stats-bar"
        hx-swap="outerHTML"
        hx-confirm="Are you sure you want to reset your statistics?"
        class="reset-button"
        title="Reset Statistics"
      >
        Reset
      </button>
    </div>
  `;
}
