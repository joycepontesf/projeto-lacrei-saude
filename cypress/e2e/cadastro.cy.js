/// reference types="cypress" >/

import novaPessoaUsuaria from "../support/page_objects/novaPessoaUsuaria.page";

context('Teste na Funcionalidade de Cadastro de Pessoa Usuária', () => {
    
    beforeEach(() => {
        cy.visit("https://paciente.lacreisaude.com.br/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve permitir o cadastro de nova pessoa usuária com sucesso', () => {
        novaPessoaUsuaria.criarNovaPessoaUsuaria()
        cy.get('h2').should('contain', 'Estamos quase lá...')
       
    })

});