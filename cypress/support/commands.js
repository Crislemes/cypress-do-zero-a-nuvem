// support/commands.js
Cypress.Commands.add('preencheCamposObrigatórios', function () {
    cy.get('#firstName').type('Cristiane')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('cristi@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button').click()
})

Cypress.Commands.add('preencherFormulario', ({ firstName, lastName, email, phone, text }) => {
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#email').type(email)

    if (phone) {
        cy.get('#phone').type(phone)
    }

    cy.get('#open-text-area').type(text, { delay: 0 })
})