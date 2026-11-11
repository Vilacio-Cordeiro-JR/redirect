const fs = require('fs');
const path = require('path');

const targetUrl = process.env.TARGET_URL || 'https://exemplo.com';
const siteKey = process.env.TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

const config = { targetUrl, siteKey };

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const htmlTemplatePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlTemplatePath, 'utf8');
htmlContent = htmlContent.replace('__APP_CONFIG__', JSON.stringify(config));
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent, 'utf8');

const assetsToCopy = ['manifest.json', 'sw.js', 'icon-192.png', 'icon-512.png', 'logo.png'];
assetsToCopy.forEach((file) => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

console.log('Build do SCOACI com novos ícones concluído em dist/!');
