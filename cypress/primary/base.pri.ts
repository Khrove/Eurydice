export abstract class BasePri {
    private _element: Cypress.Chainable<JQuery<HTMLElement>>;

    constructor(context: Cypress.Chainable<JQuery<HTMLElement>>) {
        this._element = (typeof context === "string") ? cy.get(context) : context;
    }

    get element(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this._element;
    }

    isPresent() {
        return this._element.should('be.present');
    }
}