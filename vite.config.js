import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.md", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.ttf", "**/*.md"],
  base: '/', // Définit le chemin de base pour le déploiement à la racine
  build: {
    outDir: 'dist', // Le répertoire de sortie pour la build
    assetsDir: 'assets', // Dossier pour les assets
  },
  resolve: {
    alias: {
      // Crée des alias pour un accès plus simple aux dossiers
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@pages': '/src/pages',
    },
  },
})
