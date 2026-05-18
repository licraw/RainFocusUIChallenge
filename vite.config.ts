import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const outDir = 'build';

function singleFileBuild() {
  return {
    name: 'single-file-build',
    apply: 'build' as const,
    transformIndexHtml(html: string) {
      return html.replace(
        /<script type="module" crossorigin src="(.+?)"><\/script>/,
        '<script defer src="$1"></script>',
      );
    },
    writeBundle() {
      const htmlPath = resolve(outDir, 'index.html');

      if (!existsSync(htmlPath)) {
        return;
      }

      const html = readFileSync(htmlPath, 'utf8');
      const nextHtml = html.replace(
        /<script defer src="\.\/(.+?)"><\/script>/,
        (_match: string, fileName: string) => {
          const scriptPath = resolve(outDir, fileName);

          if (!existsSync(scriptPath)) {
            return _match;
          }

          const script = readFileSync(scriptPath, 'utf8');
          rmSync(scriptPath);
          return `<script>window.addEventListener('DOMContentLoaded',function(){${script}});</script>`;
        },
      );

      writeFileSync(htmlPath, nextHtml);

      const assetsDir = resolve(outDir, 'assets');
      if (existsSync(assetsDir)) {
        rmSync(assetsDir, { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 100_000,
    outDir,
    rollupOptions: {
      output: {
        format: 'iife',
      },
    },
  },
  plugins: [
    react(),
    singleFileBuild(),
  ],
});
