class TextBox{
    name: string = '#userName';
    email: string = '#userEmail';
    currentAddress: string = '#currentAddress-wrapper';
    parminentAddress: string = '#permanentAddress-wrapper';
    submitButton: string = '#submit'
    result: string = '#output';

    submitTBButton () {
        cy.get(this.name).type('test')
        cy.get(this.email).type('test@test.com')
        cy.get(this.currentAddress).type('1234 test address')
        cy.get(this.parminentAddress).type('1234 test address')
        cy.get(this.submitButton).click()
        cy.get(this.result)
    }

}

export const TextBoxPage = new TextBox();