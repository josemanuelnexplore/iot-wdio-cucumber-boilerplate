import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/iot/login.page';
import SecurePage from '../pageobjects/iot/secure.page';
import OverviewPage from '../pageobjects/iot/overview.page';

const pages = {
    login: LoginPage,
    Project: OverviewPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should land on the (.*)$/, async (message) => {
 await expect(SecurePage.header).toHaveTextContaining(message);
});

Given(/^I (.*)$/, async (message) => {
    await expect(OverviewPage.header).toHaveTextContaining(message);
});