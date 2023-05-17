import { WebDriver, until, By } from 'selenium-webdriver';

export class AddJobPage {
    driver: WebDriver;
    jobTitleFieldSelector: string;
    jobDescriptionFieldSelector: string;
    jobNoteFieldSelector: string;
    saveButtonSelector: string;

    constructor(driver: WebDriver) {
        this.driver = driver;
        this.jobTitleFieldSelector =
            'input.oxd-input.oxd-input--active:nth-child(1)';
        this.jobDescriptionFieldSelector =
            'textarea.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical:nth-child(1)';
        this.jobNoteFieldSelector =
            'textarea.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical:nth-child(1)';
        this.saveButtonSelector =
            'button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space';
    }

    async enterJobData(title: string, description: string, note: string) {
        await this.driver.wait(
            until.elementLocated(By.css(this.jobTitleFieldSelector))
        );
        await this.driver
            .findElement(By.css(this.jobTitleFieldSelector))
            .sendKeys(title);
        await this.driver
            .findElement(By.css(this.jobDescriptionFieldSelector))
            .sendKeys(description);
        await this.driver
            .findElement(By.css(this.jobNoteFieldSelector))
            .sendKeys(note);
    }

    async clickSaveButton() {
        await this.driver.wait(
            until.elementLocated(By.css(this.saveButtonSelector))
        );
        await this.driver.findElement(By.css(this.saveButtonSelector)).click();
    }
}
