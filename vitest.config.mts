/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    css: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['node_modules'],
    clearMocks: true,
  },
});
