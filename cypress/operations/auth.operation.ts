import { LoginPage } from "../pages/login.page";

export class AuthOperation {
    private loginPage: LoginPage;

    constructor() {
        this.loginPage = new LoginPage();
    }

    loginWithEmail(email: string, password: string) {
        this.loginPage.loginWithEmailBtn.click();
        this.loginPage.emailInput.type(email);
        this.loginPage.passwordInput.type(password);
        this.loginPage.loginBtn.click();
    }
}