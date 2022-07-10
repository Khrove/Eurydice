import {BasePri} from "./base.pri";

export class GenericPri extends BasePri {
    validateText(text: string) {
        this.element.contains(text);
    }
}