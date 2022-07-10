export abstract class BasePri {
    private _element: Cypress.Chainable<JQuery<HTMLElement>>;

    constructor(context: string |  Cypress.Chainable<JQuery<HTMLElement>>) {
        this._element = (typeof context === "string") ? cy.get(context) : context;
    }

    get element(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this._element;
    }

    findEl(el: string | number) {
        return (typeof el === "string")
            ? this.element.contains(el)
            : this.element.eq(el)
    }

    isPresent() {
        return this._element.should('be.present');
    }

    triggerEvent() {
        return this._element.trigger('focus');
    }
}