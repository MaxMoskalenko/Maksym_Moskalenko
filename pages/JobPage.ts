import { WebDriver, until, By } from 'selenium-webdriver';

export class JobPage {
    driver: WebDriver;
    addButtonSelector: string;
    deleteButtonSelector: string;
    deleteConfirmButtonSelector: string;

    constructor(driver: WebDriver) {
        this.driver = driver;
        this.addButtonSelector =
            'button.oxd-button.oxd-button--medium.oxd-button--secondary';
        this.deleteButtonSelector =
            'button.oxd-icon-button.oxd-table-cell-action-space:nth-child(1)';
        this.deleteConfirmButtonSelector =
            'button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin';
    }

    async clickAddButton() {
        await this.driver.wait(
            until.elementLocated(By.css(this.addButtonSelector))
        );
        await this.driver.findElement(By.css(this.addButtonSelector)).click();
    }

    async isJobTitleDisplayed(title: string) {
        await this.driver.wait(
            until.elementLocated(By.css(this.deleteButtonSelector))
        );

        return (await this.driver.getPageSource()).includes(title);
    }

    async clickDeleteButton() {
        await this.driver.wait(
            until.elementLocated(By.css(this.deleteButtonSelector))
        );
        await this.driver
            .findElement(By.css(this.deleteButtonSelector))
            .click();

        await this.driver.wait(
            until.elementLocated(By.css(this.deleteConfirmButtonSelector))
        );
        await this.driver
            .findElement(By.css(this.deleteConfirmButtonSelector))
            .click();
    }
}
