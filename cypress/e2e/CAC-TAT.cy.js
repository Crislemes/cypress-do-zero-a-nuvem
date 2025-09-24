/// <reference types="cypress" />/

describe('Central de Atendimento ao Cliente TAT', function () {
  
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('envia o formulário com sucesso', () => {
    cy.preencherFormulario({
      firstName: 'Cristiane',
      lastName: 'Teste',
      email: 'cristi@teste.com',
      text: 'texto longo aqui'
    })
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe erro para email inválido', () => {
    cy.preencherFormulario({
      firstName: 'Cristiane',
      lastName: 'Teste',
      email: 'cristiteste.com',
      text: 'Teste'
    })
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  it('campo telefone permanece vazio quando inserido um valor não numérico', () => {
    cy.get('#phone').type('dseanhhhjj').should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', () => {
    cy.get('#firstName').type('Cristiane')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('cristi@teste.com')
    cy.get('#phone-checkbox').check() // obrigatório
    cy.get('#open-text-area').type('teste')
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('Cristiane').should('have.value', 'Cristiane').clear().should('have.value', '')
    cy.get('#lastName').type('Teste').should('have.value', 'Teste').clear().should('have.value', '')
    cy.get('#email').type('cristi@teste.com').should('have.value', 'cristi@teste.com').clear().should('have.value', '')
    cy.get('#phone').type('123654').should('have.value', '123654').clear().should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário vazio', () => {
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formulário com sucesso usando comando customizado', () => {
    cy.preencheCamposObrigatórios()
    cy.get('.success').should('be.visible')
  })

  it('identificando elementos pelo texto do botão', () => {
    cy.contains('.button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('seleciona produtos por value, texto e índice', () => {
    cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
    cy.get('#product').select(1).should('have.value', 'blog')
  })

  it('marca tipos de atendimento individualmente', () => {
    cy.get('#support-type input[value="ajuda"]').check().should('be.checked')
    cy.get('#support-type input[value="elogio"]').check().should('be.checked')
    cy.get('#support-type input[value="feedback"]').check().should('be.checked')
  })

  it('marca todos os tipos de atendimento com wrap', () => {
    cy.get('input[type="radio"]').should('have.length', 3).each(($radio) => {
      cy.wrap($radio).check().should('be.checked')
    })
  })

  it('marca meio de contato preferencial Telefone', () => {
    cy.get('#email-checkbox').check().should('be.checked').uncheck().should('not.be.checked')
    cy.get('#phone-checkbox').check().should('be.checked')
  })

  it('exibe sucesso quando telefone obrigatório é preenchido', () => {
    cy.preencherFormulario({
      firstName: 'Cristiane',
      lastName: 'Teste',
      email: 'cristi@teste.com',
      phone: '123456789',
      text: 'teste'
    })
    cy.get('#phone-checkbox').check()
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })

  it('seleciona arquivo da pasta fixtures', () => {
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json').then(($input) => {
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('seleciona arquivo com drag-and-drop', () => {
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' }).then(($input) => {
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('seleciona arquivo via alias', () => {
    cy.fixture('example.json').as('arquivoExemplo')
    cy.get('#file-upload').selectFile('@arquivoExemplo').then(($input) => {
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('verifica política de privacidade abre em outra aba', () => {
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade sem abrir nova aba', () => {
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
    cy.contains('Talking About Testing').should('be.visible')
  })
})

describe('Página da Política de Privacidade', () => {
  it('exibe a página corretamente', () => {
    cy.visit('./src/privacy.html')
    cy.get('h1').should('contain', 'CAC TAT - Política de privacidade')
  })
})
