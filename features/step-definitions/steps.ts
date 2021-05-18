import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^Then I should land on the [^"]*$/, async (message) => {
 await expect(SecurePage.header).toHaveTextContaining(message);
});

