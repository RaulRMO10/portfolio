# 🌐 Portfólio — Raul Martins

Site pessoal de portfólio, construído com **Astro** + **Tailwind CSS**. Página única, responsiva, rápida e com meta tags Open Graph (card bonito ao compartilhar no LinkedIn).

![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

## 🧞 Comandos

| Comando | Ação |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Sobe o servidor local em `localhost:4321` |
| `npm run build` | Gera o site estático em `./dist/` |
| `npm run preview` | Pré-visualiza o build localmente |
| `node scripts/make-og.mjs` | Regera a imagem Open Graph (`public/og-image.png`) |

## 🗂️ Estrutura

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── og-image.png          # card de compartilhamento (1200x630)
├── scripts/
│   ├── og-source.svg         # design do card OG
│   └── make-og.mjs           # gera o PNG a partir do SVG
├── src/
│   ├── layouts/Layout.astro  # <head>, SEO e Open Graph
│   └── pages/index.astro     # conteúdo (hero, sobre, projetos, formação, contato)
├── astro.config.mjs
└── tailwind.config.mjs
```

## ✏️ Como editar o conteúdo

Quase tudo está em [`src/pages/index.astro`](src/pages/index.astro), nos arrays do topo (`projects`, `skills`, `education`). Edite-os para atualizar projetos e habilidades — o portfólio evolui junto com a pós em Agentes de IA.

## 🚀 Deploy

Pensado para deploy no **Vercel** (ou Netlify). Após o deploy, atualize a URL em `astro.config.mjs` (campo `site`) para que as meta tags Open Graph apontem para o domínio real.

---

Feito por **Raul Martins** · [GitHub](https://github.com/RaulRMO10) · [LinkedIn](https://www.linkedin.com/in/raulrmo/)
