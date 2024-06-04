class LoginPage {
    constructor() {
        this.expect = null;
    }
    async init() {
        const { expect } = await import('expect-webdriverio');
        this.expect = expect;
    }
    get userName() { 
        return $('~Username input field'); 
    }

    get password() { 
        return $('~Password input field'); 
    }

    get loginButton() { 
        return $('~Login button'); 
    }
    
    get userNameLabel() { 
        return $('//android.widget.TextView[@text="Username"]'); 
    }

    get errorMessage(){
        return $('//android.view.ViewGroup[@content-desc="generic-error-message"]');
    }

    get userNameErrorMessage(){
        return $('//android.view.ViewGroup[@content-desc="Username-error-message"]');
    }

    get passwordErrorMessage(){
        return $('//android.view.ViewGroup[@content-desc="Password-error-message"]');
    }s

    async clickOnLoginButton() {
        await this.loginButton.click();
    }

    async validateErrorMessageVisibility() {
        await this.errorMessage.waitForDisplayed({ timeout: 3000 });
        const isVisible = await this.errorMessage.isDisplayed(); 
        expect(isVisible).toBe(true);
    }

    async validateUserNameErrorMessageVisibility() {
        await this.userNameErrorMessage.waitForDisplayed({ timeout: 3000 });
        const isVisible = await this.userNameErrorMessage.isDisplayed(); 
        expect(isVisible).toBe(true);
    }

    async validatePasswordErrorMessageVisibility() {
        await this.passwordErrorMessage.waitForDisplayed({ timeout: 3000 });
        const isVisible = await this.passwordErrorMessage.isDisplayed(); 
        expect(isVisible).toBe(true);
    }

}

module.exports = new LoginPage();