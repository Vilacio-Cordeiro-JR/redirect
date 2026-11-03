const fs = require('fs');
const path = require('path');

// Lê as variáveis de ambiente injetadas pelo Vercel (ou fallback para testes locais)
const targetUrl = process.env.TARGET_URL || 'https://exemplo.com';
const siteKey = process.env.TURNSTILE_SITE_KEY || '1x00000000000000000000AA'; // Chave de teste do Cloudflare

// Objeto de configuração que será injetado no HTML
const config = {
  targetUrl,
  siteKey
};

// Cria a pasta dist se não existir
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Lê o arquivo index.html original (vamos assumir que ele está na raiz ou em src/index.html)
// Se você salvou o HTML na raiz, ajuste a leitura para 'index.html'
const htmlTemplatePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlTemplatePath, 'utf8');

// Substitui a tag __APP_CONFIG__ pelo JSON gerado
htmlContent = htmlContent.replace('__APP_CONFIG__', JSON.stringify(config));

// Escreve o arquivo final processado dentro da pasta dist/
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent, 'utf8');

console.log('Build concluído com sucesso! Variáveis injetadas.');
