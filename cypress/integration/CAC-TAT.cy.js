/// <reference types="cypress" />/

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste,teste, teste, teste, teste, teste, teste, teste, teste, teste,teste, teste, teste, teste, teste, teste, teste, teste, teste,teste, teste, teste, teste, teste, teste, teste, teste, teste.'
        cy.get('#firstName').type('Cristiane')
        cy.get('#lastName').type('Teste')
        cy.get('#email').type('cristi@teste.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('.button').click()

        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Cristiane')
        cy.get('#lastName').type('Teste')
        cy.get('#email').type('cristiteste.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()

        cy.get('.error').should('be.visible')
    })
    it('campo telefone permanece vazio quando inserido um valor não numérico', function () {
        cy.get('#phone').type('dseanhhhjj')
            .should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Cristiane')
        cy.get('#lastName').type('Teste')
        cy.get('#email').type('cristi@teste.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('teste')
        cy.get('.button').click()

        cy.get('.error').should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName').type('Cristiane')
            .should('have.value', 'Cristiane')
            .clear()
            .should('have.value', '')
        cy.get('#lastName').type('Teste')
            .should('have.value', 'Teste')
            .clear()
            .should('have.value', '')
        cy.get('#email').type('cristi@teste.com')
            .should('have.value', 'cristi@teste.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone').type('123654')
            .should('have.value', '123654')
            .clear()
            .should('have.value', '')

    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
    //criando comandos personalizados(pasta comands.js)
    it('envia o formuário com sucesso usando um comando customizado', function () {
        cy.preencheCamposObrigatórios()
    })
    it('identificando elementos ', function () {
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('seleciona um produto (Mentoria) por seu valor (value)', function () {
        cy.get('#product').select('mentoria')
            .should('have.value', 'mentoria')
    })
    it('seleciona um produto (You Tube) por seu texto', function () {
        cy.get('#product').select('YouTube')
            .should('have.value', 'youtube')
    })
    it('seleciona um produto (Blog) por seu índice', function () {
        cy.get('#product').select(1)
            .should('have.value', 'blog')
    })
    it('marca cada tipo de atendimento', function () {
        cy.get('#support-type > :nth-child(2) > input').check()
            .should('have.value', 'ajuda')
        cy.get(':nth-child(3) > input').check()
            .should('have.value', 'elogio')
        cy.get(':nth-child(4) > input').check()
            .should('have.value', 'feedback')
    })
    //marcando os tres campos
    it('marca todos os tipos de atendimentos (.wrap)', function () {
        cy.get('input[type="radio"]').should('have.length', 3)
            .each(function ($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio)
            })
    })
    it('marcando meio de contato preferencial "Telefone"', function () {
        cy.get('#email-checkbox').check()
            .should('have.value', 'email')
        cy.get('#email-checkbox').uncheck()
        cy.get('#phone-checkbox').check()
            .should('have.value', 'phone')
        //cy.get('#phone-checkbox').uncheck()
    })
    it('exibe mensagem de successo quando o telefone se torna obrigatório e é preenchido ', function () {
        cy.get('#firstName').type('Cristiane')
        cy.get('#lastName').type('Teste')
        cy.get('#email').type('cristi@teste.com')
        cy.get('#phone').type('123456789')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('teste')
        cy.get('.button').click()

        cy.get('.success').should('be.visible')
    })
    /* it('seleciona arquivo da pasta fixtures', function(){
         cy.get('#file-upload')
         .should('not.have.value')
         .selectFile('cypress/fixtures/example.json')
         .should(function($input){
             expect($input[0].files[0].name).to.equal('example.json')
         })
     })
     it('seleciona um arquivo simulando um drag-and-drop', function(){
         cy.get('#file-upload')
         .should('not.have.value')
         .selectFile('cypress/fixtures/example.json')
         .should(function($input){
         expect($input[0].files[0].name).to.equal('example.json')
         })
  })*/
})
