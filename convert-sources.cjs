// Script to convert sourceLinks from string[] to {name, url}[] format
const fs = require('fs');

const filePath = './src/database.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Function to extract domain name from URL
function getDomainName(url) {
  try {
    const domain = new URL(url).hostname;
    // Remove www. prefix and get the main part
    const parts = domain.replace('www.', '').split('.');
    const mainDomain = parts[0];

    // Map common domains to readable names
    const domainMap = {
      'derstandard': 'Der Standard',
      'orf': 'ORF',
      'spiegel': 'Der Spiegel',
      'zeit': 'Die Zeit',
      'diepresse': 'Die Presse',
      'theguardian': 'The Guardian',
      'de': 'Wikipedia'
    };

    return domainMap[mainDomain] || mainDomain.charAt(0).toUpperCase() + mainDomain.slice(1);
  } catch (e) {
    return 'Source';
  }
}

// Convert old format: sourceLinks: ["url1", "url2"]
// To new format: sourceLinks: [{ name: "Name", url: "url1" }, { name: "Name2", url: "url2" }]

const pattern = /sourceLinks:\s*\[([\s\S]*?)\]/g;

content = content.replace(pattern, (match, linksContent) => {
  // Extract URLs from the array
  const urlMatches = linksContent.match(/"([^"]+)"/g);

  if (!urlMatches) return match;

  const urls = urlMatches.map(m => m.slice(1, -1)); // Remove quotes

  // Convert to new format
  const newLinks = urls.map(url => {
    const name = getDomainName(url);
    return `{ name: "${name}", url: "${url}" }`;
  }).join(',\n      ');

  return `sourceLinks: [\n      ${newLinks}\n    ]`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Converted source links to new format');
