class IFrameApp {
  private iframe: string = "#mce_0_ifr";
  private body: string = "#tinymce";

  getIframeApp() {
    cy.frameLoaded(this.iframe);
    cy.iframe(this.iframe).then((iframeApp) => {
    cy.wrap(iframeApp).type("{selectAll}{del}Cypress");
    cy.wrap(iframeApp).should("have.text", "Cypress");
      //  cy.wrap(iframeApp).clear().type('Hello, Cypress')
    });
  }

  visit() {
    cy.visit(`${Cypress.env("herokuapp")}/iframe`);
  }
}

export const IFrameAppPage = new IFrameApp();
