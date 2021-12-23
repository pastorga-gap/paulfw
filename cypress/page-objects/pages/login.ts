export class LoginDetail {

  url = '/';
  elements = {
    getUserNameInput: () => cy.get('[data-test="username"]'),
    getPasswordInput: () => cy.get('[data-test="password"]'),
    getLoginBtn: () => cy.get('[data-test="login-button"]'),
    getErrorBanner: () => cy.get('.error-message-container'),
  };

  navigate() {
    cy.visit(this.url);
  }

  setUsername(username: string) {
    this.elements.getUserNameInput().type(username);
  }

  setPassword(password: string) {
    this.elements.getPasswordInput().type( password);
  }

  clickLoginBtn() {
    this.elements.getLoginBtn().click();
  }

  getURL() {
    return cy.url();
  }

}

export const LoginDetailPage = new LoginDetail();
