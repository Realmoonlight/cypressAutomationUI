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
