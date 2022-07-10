import {BasePri} from "../../primary/base.pri";
import {GenericPri} from "../../primary/generic.pri";

export class QuestionComp extends BasePri {
    constructor(context: string | Cypress.Chainable<JQuery<HTMLElement>>) {
        super(context);
    }
    get standards() { return new GenericPri('.standard'); }
    getStandard() {
        return new GenericPri(
            this.element
                .find('.standard')
        );
    }
}