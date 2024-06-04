const { Given, When, Then,Before } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/loginPage');
const HomePage = require('../pageobjects/homePage');
const cartPage = require('../pageobjects/cartPage');

Before(async function () {
    await LoginPage.init();
});

Then(/^username field should be visible$/, async function () {
    const isVisible = await LoginPage.userName.isDisplayed();
    expect(isVisible).toBe(true);
});

Then(/^Password field should be visible$/, async function () {
     const isVisible = await LoginPage.password.isDisplayed();
     expect(isVisible).toBe(true);
});

Then(/^Login button should be visible$/, async function () {
     const isVisible = await LoginPage.loginButton.isDisplayed();
     expect(isVisible).toBe(true);
     
});

When(/^I type valid "([^"]*)" and "([^"]*)"$/, async function (userName, password) {
    await LoginPage.userName.clearValue();
    await LoginPage.userName.addValue(userName);
    await LoginPage.password.click();
    await LoginPage.password.waitForDisplayed({ timeout: 5000 });
    await LoginPage.password.clearValue();
    await LoginPage.password.addValue(password);
});

When(/^I click on Login button$/, async function () {
    await LoginPage.userNameLabel.click();
    await LoginPage.loginButton.waitForDisplayed({ timeout: 5000 });
    await LoginPage.loginButton.click();
});

When(/^I verify successful login$/,async function (){
    const menuIconElement = HomePage.menuIcon;
    await menuIconElement.isDisplayed();
    await menuIconElement.click();
    await HomePage.waitAndClickLoginButton();
    await cartPage.GoShoppingButtonIsVisible();
    
    await driver.execute('mobile: terminateApp', { appId: 23544 });

    await driver.reloadSession();
  
});

Then(/^I validate the erorr message is visible$/,async function (){
    await LoginPage.validateErrorMessageVisibility();
});

Then(/^I validate the username error message is visible$/,async function (){
    await LoginPage.validateUserNameErrorMessageVisibility();
});

Then(/^I validate the password error message is visible$/,async function (){
    await LoginPage.validatePasswordErrorMessageVisibility();
});