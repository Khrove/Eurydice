import {BasePri} from "./base.pri";
import { TypeOptions } from "../interfaces/generics.options";

export class InputPri extends BasePri {
    type(text: string, options?: TypeOptions) {
        let selector: Cypress.Chainable<JQuery<HTMLElement>> = this.element;
        selector.type(text, { options });
    }
}