import { BasePri } from "./base.pri";

export class ClickablePri extends BasePri {
    click(options?: string | number) {
        let selector: Cypress.Chainable<JQuery<HTMLElement>> = this.element;
        if (options) {
            if(typeof options === 'number') {
                selector = selector.eq(options);
            } else if (typeof options === 'string') {
                selector = selector.contains(options);
            }
        }
        selector.click();
    }
}