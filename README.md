# VortexLab

Landing page premium da **Vortex Agency** — Next.js 15, Tailwind CSS, Framer Motion e fundo 3D (Three.js).

## Requisitos

- Node.js 20+ (recomendado)
- npm (ou pnpm / yarn)

## Como começar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando       | Descrição              |
| ------------- | ---------------------- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção   |
| `npm run start` | Servir build local  |
| `npm run lint`  | ESLint (Next)       |

## Variáveis de ambiente

Se adicionares integrações (API keys, etc.), cria `.env.local`. Este ficheiro **não** deve ir para o Git (já está no `.gitignore`).

## Deploy na Vercel

1. Em [vercel.com](https://vercel.com), **Add New Project** e importa o repo **abarakus11/VortexLab**.
2. Framework: **Next.js** (detetado automaticamente). Comando de build: `npm run build`, output default.
3. Variáveis de ambiente: adiciona em **Settings → Environment Variables** o que precisares (nada é obrigatório para a landing atual).

## Licença

Projeto privado / uso da agência, salvo indicação em contrário.
