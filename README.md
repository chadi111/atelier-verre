# Atelier Verre

Projet TanStack Start (React Router + Vite) contenant ton fichier `root.tsx`.

## Ouvrir dans VS Code

1. Dézippe le fichier `atelier-verre.zip`.
2. Ouvre le dossier `atelier-verre` dans VS Code (`File > Open Folder...`).
3. Dans le terminal intégré de VS Code :

```bash
npm install
npm run dev
```

4. Le site sera accessible sur `http://localhost:3000`.

## Structure

```
atelier-verre/
├── app/
│   ├── root.tsx              ← ton fichier fourni
│   ├── router.tsx            ← création du routeur TanStack
│   ├── styles.css            ← styles globaux + Tailwind
│   ├── lib/
│   │   └── lovable-error-reporting.ts   ← stub à remplacer par ton vrai monitoring
│   └── routes/
│       └── index.tsx         ← page d'accueil de base
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## À faire ensuite

- Ajoute tes propres routes dans `app/routes/`.
- Remplace le contenu de `lovable-error-reporting.ts` par ton vrai service (Sentry, etc.) si besoin.
- Adapte `tailwind.config.ts` à ta charte graphique si tu as des tokens de design spécifiques.
