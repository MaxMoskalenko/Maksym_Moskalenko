import { By, until, WebDriver } from "selenium-webdriver";

export class LoginPage {
    driver: WebDriver;
    loginFieldSelector: string;
    passwordFieldSelector: string;
    loginButtonSelector: string;

    constructor(driver: WebDriver) {
        this.driver = driver;
        this.loginFieldSelector = '*[name="username"]';
        this.passwordFieldSelector = '*[name="password"]';
        this.loginButtonSelector = 'button.orangehrm-login-button';
    }

    async enterCredentials(login: string, password: string) {
        await this.driver.wait(until.elementLocated(By.css(this.loginFieldSelector)));

        await this.driver.findElement(By.css(this.loginFieldSelector)).sendKeys(login);
        await this.driver.findElement(By.css(this.passwordFieldSelector)).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.wait(until.elementLocated(By.css(this.loginButtonSelector)));

        await this.driver.findElement(By.css(this.loginButtonSelector)).click();
    }
}