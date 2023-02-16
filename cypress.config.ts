import { defineConfig } from 'cypress';
import task from '@cypress/code-coverage/task';
export default defineConfig({
  env: {
    codeCoverageTasksRegistered: true,
  },
  fixturesFolder: 'src/tests/cypress/fixtures',
  e2e: {
    setupNodeEvents(on, config) {
      task(on, config);
      return config;
    },

    testIsolation: false,
    baseUrl: 'http://localhost:5173',
    specPattern: 'src/tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/support/index.js',
  },
});
