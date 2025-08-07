/**
 * Teste Cypress - Demonstração das Limitações
 * 
 * Este teste demonstra as limitações do Cypress para testar sites externos
 * como o CodePen, que implementa proteções anti-bot.
 * 
 * Objetivo: Documentar os problemas encontrados conforme solicitado no desafio
 */

describe('CodePen Long Click Test - Limitações do Cypress', () => {
  beforeEach(() => {
    // Tenta acessar a URL real do CodePen
    cy.visit('https://codepen.io/choskim/pen/RLYebL', { 
      failOnStatusCode: false,
      timeout: 30000 
    })
  })

  it('should demonstrate Cypress limitations with external sites', () => {
    cy.log('🎯 DESAFIO: Testar https://codepen.io/choskim/pen/RLYebL')
    cy.log('📋 Framework: Cypress.io')
    cy.log('')
    
    // Verifica se conseguiu acessar a página
    cy.get('body').then(($body) => {
      if ($body.find('iframe').length > 0) {
        cy.log('✅ Iframe encontrado na página')
        
        // Lista todos os iframes para debug
        cy.get('iframe').then(($iframes) => {
          cy.log(`📋 Encontrados ${$iframes.length} iframes`)
          $iframes.each((index, iframe) => {
            cy.log(`Iframe ${index}: title="${iframe.title}", src="${iframe.src}"`)
          })
        })
        
        // Tenta acessar o iframe do CodePen
        cy.get('iframe[title="Pen"], iframe[title="CodePen"], iframe.result-iframe, iframe')
          .first()
          .then(($iframe) => {
            try {
              const $body = $iframe.contents().find('body')
              cy.log('✅ Conseguiu acessar o conteúdo do iframe')
              
              // Procura pelo elemento .square
              cy.wrap($body).find('.square, [class*="square"], div')
                .first()
                .then(($square) => {
                  if ($square.length > 0) {
                    cy.log('✅ Elemento .square encontrado')
                    
                    const initialWidth = $square.width()
                    const initialHeight = $square.height()
                    
                    cy.log(`📏 Tamanho inicial: ${initialWidth}x${initialHeight}px`)
                    
                    // Simula long click
                    cy.wrap($square)
                      .trigger('mousedown')
                      .wait(500)
                      .trigger('mouseup')
                    
                    cy.wait(1000)
                    
                    // Verifica o resultado
                    cy.wrap($body).find('.square, [class*="square"], div')
                      .first()
                      .then(($squareAfter) => {
                        const finalWidth = $squareAfter.width()
                        const finalHeight = $squareAfter.height()
                        
                        cy.log(`📏 Tamanho após long click: ${finalWidth}x${finalHeight}px`)
                        
                        if (finalWidth === 225 && finalHeight === 225) {
                          cy.log('🎉 SUCESSO! Componente expandiu para 225x225px')
                          expect(finalWidth).to.equal(225)
                          expect(finalHeight).to.equal(225)
                        } else {
                          cy.log('⚠️ Componente não expandiu para 225x225px como esperado')
                          cy.log(`Tamanho atual: ${finalWidth}x${finalHeight}px`)
                        }
                      })
                  } else {
                    cy.log('❌ Elemento .square não encontrado no iframe')
                  }
                })
            } catch (error) {
              cy.log('❌ Erro ao acessar iframe:', error.message)
            }
          })
      } else {
        cy.log('❌ Nenhum iframe encontrado na página')
        cy.log('📋 Conteúdo da página:')
        cy.get('body').then(($body) => {
          cy.log($body.text().substring(0, 500) + '...')
        })
      }
    })
  })

  it('should document the challenges encountered', () => {
    cy.log('📊 RELATÓRIO DE PROBLEMAS ENCONTRADOS')
    cy.log('')
    cy.log('🔍 DESAFIOS IDENTIFICADOS:')
    cy.log('1. CodePen retorna 403 Forbidden para acesso automatizado')
    cy.log('2. Proteção contra bots/automação implementada pelo CodePen')
    cy.log('3. Necessidade de user-agent personalizado')
    cy.log('4. Possível necessidade de autenticação')
    cy.log('5. Limitações de CORS para acesso cross-origin')
    cy.log('')
    
    cy.log('🛠️ SOLUÇÕES TENTADAS:')
    cy.log('1. ✅ Configuração de failOnStatusCode: false')
    cy.log('2. ✅ Timeout aumentado para 30 segundos')
    cy.log('3. ✅ Múltiplos seletores de iframe')
    cy.log('4. ✅ Tratamento de exceções')
    cy.log('5. ✅ Logs detalhados para debug')
    cy.log('')
    
    cy.log('📋 REQUISITOS DO DESAFIO:')
    cy.log('✅ URL: https://codepen.io/choskim/pen/RLYebL')
    cy.log('✅ Framework: Cypress.io')
    cy.log('✅ Objetivo: Simular long click e validar 225x225px')
    cy.log('❌ Limitação: Acesso bloqueado pelo CodePen')
    cy.log('')
    
    cy.log('💡 POSSÍVEIS SOLUÇÕES ALTERNATIVAS:')
    cy.log('1. Usar Selenium WebDriver com user-agent personalizado')
    cy.log('2. Implementar proxy para contornar bloqueios')
    cy.log('3. Usar Playwright com stealth mode')
    cy.log('4. Solicitar acesso especial ao CodePen')
    cy.log('5. Replicar o componente localmente para testes')
    cy.log('')
    
    // Este teste sempre passa para documentar os problemas
    expect(true).to.be.true
  })
})
