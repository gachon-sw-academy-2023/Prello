import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'src/tests/cypress/fixtures',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./src/tests/cypress/plugins/index.cjs')(on, config)
    },
    baseUrl: 'http://localhost:5173',
    specPattern: 'src/tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/support/index.js',
  },
})
