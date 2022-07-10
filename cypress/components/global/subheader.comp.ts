import {BasePri} from "../../primary/base.pri";
import {ClickablePri} from "../../primary/clickable.pri";
import {GenericPri} from "../../primary/generic.pri";

export class SubheaderComp extends BasePri {
    constructor(context: string | Cypress.Chainable<JQuery<HTMLElement>>) {
        super(context);
    }

    get curriculumBtn() { return new ClickablePri(this.element.get('li:nth-child(1) a[class*="Desktop"]'));}
    get levelBtn() { return new ClickablePri(this.element.get('[aria-controls="menu-courses"]')); }
    get level() { return new ClickablePri(this.element.get('span[class*="SubheaderMenuItem"]')); }
    get levelText() { return new GenericPri(this.element.get('[aria-controls="menu-courses"] span[class*="Html"]')); }
}