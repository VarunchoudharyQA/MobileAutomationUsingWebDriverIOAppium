class HomePage {
    get menuIcon() { 
        return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'); 
    }

    get loginButton() { 
        return $('~menu item log in'); 
    }

    async waitAndClickLoginButton(){
        await this.loginButton.waitForDisplayed({ timeout: 3000 });
        await this.loginButton.click();
    }

}

module.exports = new HomePage();