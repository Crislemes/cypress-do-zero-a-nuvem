
Cypress.Commands.add('preencheCamposObrigatórios', function(){   
    cy.get('#firstName').type('Cristiane')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('cristi@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
})

