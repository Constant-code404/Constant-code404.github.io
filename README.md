# CV + site — Constant Pichereau

Site React (Vite) et CV PDF d'une page, générés à partir **d'un seul fichier de données** : `src/data/profile.js`.

## Lancer le site

```bash
npm install
npm run dev        # http://localhost:5173
```

- Site : `index.html` → `src/App.jsx`
- CV (aperçu dans le navigateur) : http://localhost:5173/cv.html → `src/cv/CV.jsx`

## Modifier le contenu

Tout se change dans `src/data/profile.js` (textes, formation, compétences…).
Puis régénère le PDF :

```bash
npx playwright install chromium   # une seule fois
npm run cv                        # build + public/cv-constant-pichereau.pdf
```

Le bouton « Télécharger le CV » du site pointe vers ce PDF.

### Ajouter la photo
1. Mets ta photo dans `public/` (ex. `public/photo.jpg`, format carré de préférence).
2. Dans `profile.js`, remplace `photo: null` par `photo: 'photo.jpg'`.
3. Lance `npm run cv`.

### Années et lycée
Remplis `year` et `school` dans `education` : ils s'affichent automatiquement sur le site et le CV.

### Adresse du site
Une fois en ligne, mets l'URL dans `website` : elle apparaîtra en bas du CV.

## Mettre en ligne (gratuit)

```bash
npm run cv   # le dossier dist/ est prêt
```

- **Vercel** ou **Netlify** : importe le dépôt GitHub, commande de build `npm run build`, dossier `dist`.
- **GitHub Pages** : publie le contenu de `dist/` (chemins relatifs déjà configurés).
