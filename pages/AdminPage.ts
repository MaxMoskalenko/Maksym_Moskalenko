import { WebDriver, until, By } from 'selenium-webdriver';

export class AdminPage {
    driver: WebDriver;
    jobTabSelector: string;
    jobTitlesTabSelector: string;

    constructor(driver: WebDriver) {
        this.driver = driver;
        this.jobTabSelector = 'li.oxd-topbar-body-nav-tab:nth-child(2)';
        this.jobTitlesTabSelector =
            'a.oxd-topbar-body-nav-tab-link:nth-child(1)';
    }

    async clickJobTab() {
        await this.driver.wait(
            until.elementLocated(By.css(this.jobTabSelector))
        );
        await this.driver.findElement(By.css(this.jobTabSelector)).click();

        await this.driver.wait(
            until.elementLocated(By.css(this.jobTitlesTabSelector))
        );
        await this.driver
            .findElement(By.css(this.jobTitlesTabSelector))
            .click();
    }
}
