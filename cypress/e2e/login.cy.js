/// reference types="cypress" />

import fluxoLogin from "../support/page_objects/fluxoLogin.page";

context('Testes na Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit("https://paciente.lacreisaude.com.br/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.login("brenda-branch@tuamaeaquelaursa.com", "Voluntariado@123")
        cy.get('h2').should('contain', 'Boas-vindas à Lacrei Saúde!')
          
    })

    it('Deve exibir mensagem de erro para login com senha inválida', () => {
        cy.login("testeqa42@gmail.com", "Voluntariado@")
        cy.get('.sc-875d829a-1 > .sc-c83550c6-0').should('contain', 'Sua senha e/ou conta está incorreta. Se tiver esquecido a senha, clique em “Esqueci minha senha”')
        
    })

    it('Deve exibir mensagem de erro para login com email inválido', () => {
        cy.login("testeqa@gmail.com", "Voluntariado@123")
        cy.get('.sc-875d829a-1 > .sc-c83550c6-0').should('contain', 'Sua senha e/ou conta está incorreta. Se tiver esquecido a senha, clique em “Esqueci minha senha”')        
    })

    it('Deve exibir mensagem de erro para login com email em formato inválido', () => {
        cy.login("testeqa42gmail.com", "Voluntariado@123")
        cy.get('.sc-875d829a-1 > .sc-c83550c6-0').should('contain', 'Por favor, utilize um formato de e-mail válido. Por exemplo: email@dominio.com.br')        
    })

    it('Deve permitir que uma nova pessoa usuária acesse sua página de perfil pela primeira vez', () => {
        cy.login("testeqa42@gmail.com", "Voluntariado@123")
        fluxoLogin.percorrerFluxoPrimeiroLogin()
        cy.get('h2').should('contain', 'Seu cadastro foi concluído!')
        
    })

})