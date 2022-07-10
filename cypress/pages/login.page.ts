import {ClickablePri} from "../primary/clickable.pri";
import {InputPri} from "../primary/input.pri";

export class LoginPage {
    get loginWithEmailBtn() { return new ClickablePri('button[class*="StyledLoginWithEmailOption"]'); }
    get emailInput() { return new InputPri('#email'); }
    get passwordInput() { return new InputPri('#password'); }
    get loginBtn() { return new ClickablePri('[aria-label="Log in"]'); }
}