describe('TEST PLAY1', () => {
    it('wait for element to be visible', () => {
        cy.visit(Cypress.env('play1')),
        cy.get('#visibility_trigger').should('be.visible').and('exist').click()
        cy.get('#visibility_target').should('be.visible').and('exist').click()
        cy.contains('.popover-body','I just removed my invisibility cloak!!')
    });
    it('wait for element to be visible2', () =>{
        cy.visit(Cypress.env('play1')),
        cy.get('#invisibility_target').should('be.visible').and('exist')
        cy.get('#invisibility_trigger').should('be.visible').and('exist').click()
        cy.contains('#spinner_gone','Thank God that spinner is gone!')
    });
    it('Wait for an attribute to contain certain text', () =>{
        cy.visit(Cypress.env('play1')),
        cy.get('#enabled_trigger').should('be.visible').and('exist').click(),
        cy.get('#enabled_target').should('be.visible').and('exist'),
        cy.get('[class="btn btn-success"]').should('be.visible').and('exist').click()
        // cy.contains('.popover-body','See, you just clicked me!!')
    });
    it('Wait for Page Title to change', () =>{
        cy.visit(Cypress.env('play1'))

    })
});
