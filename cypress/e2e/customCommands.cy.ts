import{LoginPage} from "../../pages/Login"
describe('LoginPage', () => {
    beforeEach(() => {
        cy.visit((`${Cypress.env('demoQA')}/login`))
    })
    it('Login', () => {
        // cy.get('#userName').type('test')
        // cy.get('#password').type('Test1234*')
        // cy.get('#login').click()
        // cy.contains('Log out').click()
        cy.login('test', 'test1234*')
        cy.contains('Log out').click()
    });
    it('login with PageObject', () =>{
        
    })
});
