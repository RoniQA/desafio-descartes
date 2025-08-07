/**
 * Arquivo de Suporte Principal do Cypress
 * 
 * Configurações globais e tratamento de exceções
 */

// Importa comandos customizados
import './commands'

// Tratamento de exceções não capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros específicos que podem ocorrer com iframes
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false
  }
  
  // Ignora erros de CORS que podem ocorrer com sites externos
  if (err.message.includes('CORS')) {
    return false
  }
  
  // Para outros erros, permite que o teste falhe
  return true
}) 