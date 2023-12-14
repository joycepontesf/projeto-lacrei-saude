
class fluxoLogin {

    percorrerFluxoPrimeiroLogin() {
        cy.get('.button-container > .sc-83837fc6-0 > .sc-83837fc6-1').click()
        cy.get('.button-container > .sc-83837fc6-0 > .sc-83837fc6-1').click()
        cy.get(':nth-child(2) > .sc-327818ad-1 > .sc-327818ad-2 > .sc-327818ad-3').click()
        cy.get(':nth-child(2) > .sc-83837fc6-0 > .sc-83837fc6-1').click()
        cy.get(':nth-child(3) > .sc-327818ad-1 > .sc-327818ad-2 > .sc-327818ad-3').click()
        cy.get(':nth-child(2) > .sc-83837fc6-0 > .sc-83837fc6-1').click()
        cy.get(':nth-child(7) > .sc-327818ad-1 > .sc-327818ad-2 > .sc-327818ad-3').click()
        cy.get(':nth-child(2) > .sc-83837fc6-0 > .sc-83837fc6-1').click()
        cy.get(':nth-child(3) > .sc-327818ad-1 > .sc-327818ad-2 > .sc-327818ad-3').click()
        cy.get(':nth-child(2) > .sc-83837fc6-0 > .sc-83837fc6-1').click()
        cy.get(':nth-child(2) > .sc-83837fc6-0 > .sc-83837fc6-1').click()

    }
}

export default new fluxoLogin()