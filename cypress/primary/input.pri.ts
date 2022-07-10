import {BasePri} from "./base.pri";

export class InputPri extends BasePri {
    type(text: string) {
        let selector: Cypress.Chainable<JQuery<HTMLElement>> = this.element;
        selector.type(text );
    }
}