# Project: TruScape

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Functionality
The client has the opportunity to add a company where he can enter information about his company, add a category and give it a status. After adding a company, the user can go to it and interact with promotions, add them, and view their status.

## Technical part 🛠️
The web application is made [Layout]([https://www.figma.com/design/fJF13s2UlxPIwTMcPVrSiz/TaskPro?node-id=0-1&node-type=canvas&t=c8xIKG0vKg6aodLs-0](https://www.figma.com/design/dPmdjAc0qKNMCKwWiC33QZ/CRM?t=kd8c8KMmqPyTerc3-0))

### Use skills:   
<p align="left">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" width="36" height="36" alt="VS Code" /></a><a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a><a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>
</p>

### Project structure:
```
├── .next
├── node_modules/
├── public/
├── src/app
│   ├── (admin)/
│   ├── components/
│   ├── lib/
│   ├── global-error.tsx
│   ├── global.css
│   ├── layout.tsx
│   └── page.jsx
├── .env.local
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── next.env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```
