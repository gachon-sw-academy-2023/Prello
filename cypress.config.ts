import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'src/tests/cypress/fixtures',
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'src/tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/support/index.js',
  },
});
