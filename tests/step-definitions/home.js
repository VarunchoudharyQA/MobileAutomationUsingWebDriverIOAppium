const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../pageobjects/homePage');
const LoginPage = require('../pageobjects/loginPage');

Given(/^I am on the home page$/, async function () {
    const menuIconElement = HomePage.menuIcon;
    await menuIconElement.isDisplayed();
});

When(/^I click on open menu icon$/, async function () {
    const menuIconElement = HomePage.menuIcon;
    await menuIconElement.click();
});

Then(/^Login Button Should be visible$/, async function () {
     await HomePage.isLoginButtonDisplayed();
});

When(/^I click on login button$/, async function () {
     await HomePage.waitAndClickLoginButton();
});

Then(/^Application should recirect to login page$/, async function () {
     await LoginPage.userName.waitForDisplayed({ timeout: 60 * 1000, interval: 2000 });
});
