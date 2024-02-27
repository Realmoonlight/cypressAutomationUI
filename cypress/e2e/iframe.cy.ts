import { IFramePage } from "../../pages/IFrame";
import { IFrameAppPage } from "../../pages/IframeApp";

describe("IFRAME", () => {
  beforeEach(() => {
    IFramePage.visit();
  });
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("test iframe", () => {
    IFramePage.getIframe();
  });
});
describe.only("IFRAMEAPP", () => {
  beforeEach(() => {
    IFrameAppPage.visit();
  });
  it("test iframe with extention", () => {
    IFrameAppPage.getIframeApp();
  
  });
});

describe.only('IFRAME WiTH PLUGIN', () => {
  beforeEach(() =>{
    cy.visit(`${Cypress.env('herokuapp')}/iframe`)
  })
  it('test iFrame', () => {
    cy.frameLoaded('#mce_0_ifr')
    cy.iframe('#mce_0_ifr').then((bodyWork) =>{
      cy.wrap(bodyWork).type('{selectAll}{del}').type('Cypress!')
      cy.wrap(bodyWork).should('have.text', 'Cypress!')
      cy.wrap(bodyWork).clear().type('Hello world!')
      cy.then(() => {
        expect(bodyWork.text()).to.eq('Hello world!')
      }) 
      

    })
  });
});