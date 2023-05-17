import { WebDriver } from 'selenium-webdriver';

const { Builder, By } = require('selenium-webdriver');
const { LoginPage } = require('./pages/LoginPage');
const { DashboardPage } = require('./pages/DashboardPage');
const { AdminPage } = require('./pages/AdminPage');
const { JobPage } = require('./pages/JobPage');
const { AddJobPage } = require('./pages/AddJobPage');

class PageFactory {
    static createLoginPage(driver: WebDriver) {
        return new LoginPage(driver);
    }

    static createDashboardPage(driver: WebDriver) {
        return new DashboardPage(driver);
    }

    static createAdminPage(driver: WebDriver) {
        return new AdminPage(driver);
    }

    static createJobPage(driver: WebDriver) {
        return new JobPage(driver);
    }

    static createAddJobPage(driver: WebDriver) {
        return new AddJobPage(driver);
    }
}

const runTest = async () => {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        const loginPage = PageFactory.createLoginPage(driver);
        const dashboardPage = PageFactory.createDashboardPage(driver);
        const adminPage = PageFactory.createAdminPage(driver);
        const jobPage = PageFactory.createJobPage(driver);
        const addJobPage = PageFactory.createAddJobPage(driver);

        await driver.get('https://opensource-demo.orangehrmlive.com/');

        await loginPage.enterCredentials('Admin', 'admin123');
        await loginPage.clickLoginButton();

        await dashboardPage.clickAdminTab();
        await adminPage.clickJobTab();
        await jobPage.clickAddButton();

        await addJobPage.enterJobData(
            '00 Test Job Title',
            'Test job description',
            'Test job note'
        );
        await addJobPage.clickSaveButton();

        if (!(await jobPage.isJobTitleDisplayed('00 Test Job Title'))) {
            throw new Error('Job title wasn`t created');
        }

        await jobPage.clickDeleteButton('00 Test Job Title');

        if (await jobPage.isJobTitleDisplayed('00 Test Job Title')) {
            throw new Error('Job title wasn`t deleted');
        }

        console.log('Test passed');
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
};

runTest();
