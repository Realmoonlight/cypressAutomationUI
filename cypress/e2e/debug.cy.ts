import { url } from "inspector";

describe('LoginPage', () => {
    beforeEach(() => {
 // cy.visit('click')
        cy.visit({
            url: '/click',
            method: 'GET'
        });
       
    });
    it.skip('debug', () => {
        cy.get('#badButton').debug().click()
   
    });
    it('Pause', () => {
        cy.pause()
        cy.get('#badButton').click()
        cy.pause()
        cy.get('#badButton').should('have.css', 'background-color','rgb(40,167,69)')
});
