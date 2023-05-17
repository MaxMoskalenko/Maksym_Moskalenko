import { WebDriver, until, By } from "selenium-webdriver";

export class DashboardPage {
    driver: WebDriver;
    adminTabSelector: string;

    constructor(driver: WebDriver) {
        this.driver = driver;
        this.adminTabSelector =
            '*[href="/web/index.php/admin/viewAdminModule"]';
    }

    async clickAdminTab() {
        await this.driver.wait(
            until.elementLocated(By.css(this.adminTabSelector))
        );

        await this.driver.findElement(By.css(this.adminTabSelector)).click();
    }
}