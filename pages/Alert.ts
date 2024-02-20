class Alert{
    private alertTextButton: string = "Click for JS Alert"
    private buttonSelector: string = 'button'
    // popupWindowText
    private jsAlertText: string = 'I am a JS Alert'
    private resultSelector: string = '#result'    
    private resultSTextJSAlert: string = 'You successfully clicked an alert'  
    
    private jsConfirmText: string = 'Click for JS Confirm'
    private jsConfirmWindowText: string = 'I am a JS Confirm'
    private resultTextJSConfirm: string = 'You clicked: Ok'

    private buttonPromtText: string = 'Click for JS promt'
    private jsPromptText: string = 'Click for JS Prompt'


    jsAlert() {
        cy.contains(this.buttonSelector, this.alertTextButton).click()
        cy.on("window:alert", (textAlert) =>{
            expect(textAlert).to.be.equal(this.jsAlertText)
        })
        cy.on("window.confirm", () => true)
        cy.get(this.resultSelector).should('have.text', this.resultSTextJSAlert) 
    }
    jsConfirm(){
        cy.contains(this.buttonSelector, this.jsConfirmText).click()
        cy.on("window: alert", (textAlert) =>{
            expect(textAlert).to.equal(this.jsConfirmWindowText)
        })
        cy.on("window.confirm", () => true)
        cy.get(this.resultSelector).should('have.text', this.resultTextJSConfirm) 
    }
    jsPrompt(){
        const text = 'Hello World!'
        cy.window().then(window => {
            cy.stub(window, "prompt").returns('Hello World!') //waiting for
            cy.contains(this.buttonSelector, this.buttonPromtText).click()
        })
        cy.get(this.resultSelector).should('have.text', 'Hello World!')
    }

} 

export const AlertPage = new Alert();  