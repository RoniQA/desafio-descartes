/**
 * Comandos Customizados do Cypress
 * 
 * Comandos reutilizáveis para os testes do Desafio Descartes
 */

// Comando para simular long click
Cypress.Commands.add('longClick', (selector, duration = 500) => {
  cy.get(selector)
    .trigger('mousedown')
    .wait(duration)
    .trigger('mouseup')
})

// Comando para obter o iframe do CodePen
Cypress.Commands.add('getCodepenFrame', () => {
  return cy.get('iframe[title="Pen"], iframe[title="CodePen"], iframe.result-iframe, iframe')
    .first()
    .then(($iframe) => {
      return $iframe.contents().find('body')
    })
})

// Comando para validar tamanho do elemento
Cypress.Commands.add('validateElementSize', (selector, expectedWidth, expectedHeight) => {
  cy.get(selector).then(($element) => {
    const width = $element.width()
    const height = $element.height()
    expect(width).to.equal(expectedWidth)
    expect(height).to.equal(expectedHeight)
    cy.log(`Elemento ${selector}: ${width}x${height}px`)
  })
}) 