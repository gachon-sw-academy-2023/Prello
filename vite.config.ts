import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [react(), tsConfigPaths(), Pages()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    target: 'esnext',
  },
});
