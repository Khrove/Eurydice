import { AuthOperation } from "../operations/auth.operation";

const authOperation = new AuthOperation();

Cypress.Commands.add("login", (userId: string, searchVal: string) => {
    cy.task('getVariables', { id: userId, user: searchVal}).then((aws) => {
    const url = Cypress.env('UAT_URL');
    cy.visit(url);
        authOperation.loginWithEmail(aws["email"], aws["password"]);
    // cy.task('getVariables', { id: userId, user: searchVal}).then((aws) => {
    //     const url = Cypress.env('UAT_URL');
    //     cy.visit(url);
    //     authOperation.loginWithEmail(aws["email"], aws["password"]);
    //
    //     // cy.intercept('/curricula').as('waitForLandingPage');
    //     // cy.wait('@waitForLandingPage').then((data) => {
    //     //     console.log(data);
    //     // });
    // });
});