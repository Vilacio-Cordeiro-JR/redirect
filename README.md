# SCOACI — Sistema de Controle Operacional do Arquivo Corrente e Intermediário

Aplicação de segurança e redirecionamento de acessos protegida por Cloudflare Turnstile com suporte a PWA.

## 🚀 Variáveis de Ambiente no Vercel

Defina as seguintes variáveis nas configurações do projeto na Vercel (**Settings > Environment Variables**):

- `TARGET_URL`: URL final para onde o usuário será redirecionado após passar na verificação.
- `TURNSTILE_SITE_KEY`: Chave do site gerada no Cloudflare Turnstile.
