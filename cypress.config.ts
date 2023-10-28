import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'cypress';

const { combinedEnv } = loadEnvConfig(process.cwd());
export default defineConfig({
  env: combinedEnv,
  e2e: {
    baseUrl: process.env.NEXT_PUBLIC_CLIENT_BASE_URL,
    specPattern: 'cypress/e2e/**/*.e2e-spec.[tj]s?(x)',
    retries: {
      runMode: 3,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotOnRunFailure: false,
  },
});
