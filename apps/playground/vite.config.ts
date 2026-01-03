import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // For GitHub Pages, use repository name as base path
  // In GitHub Actions, GITHUB_REPOSITORY is available as env var
  const base = process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
    : '/';

  return {
    base,
    server: {
      port: 3000,
      open: true,
    },
  };
});


