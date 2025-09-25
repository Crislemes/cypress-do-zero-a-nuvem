Cypress._.times(3, () => {
  it('exibe a página corretamente', () => {
    cy.visit('./src/privacy.html')
    cy.get('h1').should('contain', 'CAC TAT - Política de privacidade')
  })
})