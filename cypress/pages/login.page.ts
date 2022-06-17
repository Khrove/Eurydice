export class LoginPage {
    get loginWithEmailBtn() { return cy.get('button[class*="StyledLoginWithEmailOption"]'); }
    get emailInput() { return cy.get('#email'); }
    get passwordInput() { return cy.get('#password'); }
    get loginBtn() { return cy.get('[aria-label="Log in"]'); }
}