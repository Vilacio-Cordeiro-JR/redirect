const fs = require('fs');
const path = require('path');

console.log('Iniciando verificação dos arquivos do PWA SCOACI...');

const requiredFiles = [
  'index.html',
  'manifest.json',
  'sw.js',
  'icon-192.png',
  'icon-512.png'
];

let missing = false;
requiredFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`[Aviso] Arquivo não encontrado: ${file}`);
    missing = true;
  }
});

if (!missing) {
  console.log('Todos os ativos do PWA SCOACI foram verificados com sucesso.');
} else {
  console.log('Build concluído com alertas de ativos ausentes.');
}
