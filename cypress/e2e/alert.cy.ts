import{AlertPage} from '../../pages/Alert'
describe('ALERT', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`);
    })
    it('Click for JS Alert', () => {
        AlertPage.jsAlert()
    })
    it('Click for JS Confirm OK', () => {
        AlertPage.jsConfirm()
    })
    it('Click for JS Confirm FALSE', () => {
    //    homework
    });
    it('Click for JS Promt OK/true ', () => {
       AlertPage.jsPrompt() 
    })
    
});