// Script to add default Wikipedia source to all questions without sourceLinks
const fs = require('fs');

const filePath = './src/database.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Add default Wikipedia source to questions without sourceLinks
// Pattern: backgroundInfo ends with ." or .), followed by newline and either } or  {
const pattern = /(backgroundInfo: ".*?"\n)(\s+}\,?\n)/g;

content = content.replace(pattern, (match, p1, p2) => {
  // Check if this question already has sourceLinks
  if (match.includes('sourceLinks')) {
    return match;
  }
  // Add default sourceLinks
  return p1 + ',\n    sourceLinks: [\n      "https://de.wikipedia.org/wiki/Freiheitliche_Partei_%C3%96sterreichs"\n    ]\n' + p2;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added default sources to questions');
