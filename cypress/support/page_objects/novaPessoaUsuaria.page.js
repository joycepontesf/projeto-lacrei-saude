
const { faker } = require('@faker-js/faker');

class novaPessoaUsuaria {

    criarNovaPessoaUsuaria () {
        cy.get('.efCqCH > .sc-83837fc6-1').click()
        cy.get(':nth-child(1) > .sc-875d829a-0 > .inputContainer').click().type('Voluntário')
        cy.get(':nth-child(2) > .sc-875d829a-0 > .inputContainer').click().type('Lacrei em QA')
        cy.get(':nth-child(3) > .sc-875d829a-0 > .inputContainer').click().type(faker.internet.email())
        cy.get(':nth-child(4) > .sc-875d829a-0 > .inputContainer').click().type('Voluntariado@2024')
        cy.get(':nth-child(5) > .sc-875d829a-0 > .inputContainer').click().type('Voluntariado@2024')
        cy.get(':nth-child(1) > label > .check-container > span').click()
        cy.get(':nth-child(2) > label > .check-container > span').click()
        cy.get('.fgwfJi > .sc-83837fc6-1').click()
    }
}

export default new novaPessoaUsuaria()