import{TextBoxPage} from "../../pages/TextBox"
describe('TextBox', () => {
    beforeEach(() => {
        cy.visit((`${Cypress.env('demoQA')}/text-box`))
    })
    it('TextBox', ()=>{
        cy.get('#userName').type('test')
        cy.get('#userEmail').type('test@test.com')
        cy.get('#currentAddress-wrapper').type('1234 test address')
        cy.get('#permanentAddress-wrapper').type('1234 test address')
        cy.get('#submit').click()
        cy.get('#output')
        cy.get('#name.mb-1').should("include.text", "test")
        cy.get('#email.mb-1').should("include.text", "test@test.com")
        cy.get("#currentAddress.mb-1").should("include.text", "1234 test address");
        cy.get("#permanentAddress.mb-1").should("include.text", "1234 test address");

    })
    it('Text Box PageObject', () =>{
        TextBoxPage.submitTBButton ()
    })
});
