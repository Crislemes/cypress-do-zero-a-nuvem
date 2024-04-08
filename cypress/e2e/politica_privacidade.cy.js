describe('Testa a página da política de privacidade', function() {
    it('Deve exibir a página corretamente', function() {
      cy.visit('./src/privacy.html') 
      //Verifica se o título da página está correto
      cy.get('h1').should('contain', 'CAC TAT - Política de privacidade')
  
    })
  });
  