const { defineConfig } = require('cypress')

/**
 * Configuração do Cypress para o Desafio Descartes
 * 
 * Esta configuração demonstra as limitações do Cypress
 * para testar sites externos como o CodePen.
 */
module.exports = defineConfig({
  e2e: {
    // Configurações básicas
    baseUrl: null, // Permite URLs absolutas
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Configurações de timeout
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Configurações de execução
    video: false,
    screenshotOnRunFailure: true,
    failOnStatusCode: false, // Permite códigos de status não-2xx
    
    // Configurações de retry
    retries: {
      runMode: 1,
      openMode: 0
    },
    
    // Configurações de setup
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}) 