import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';
import reactRefresh from '@vitejs/plugin-react-refresh';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [reactRefresh(), react(), tsConfigPaths(), Pages()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    target: 'esnext',
  },
});
