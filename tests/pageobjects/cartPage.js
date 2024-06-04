class CartPage {
    get GoShoppingButton() { 
        return $('~Go Shopping button'); 
    }
    
    async GoShoppingButtonIsVisible(){
        await this.GoShoppingButton.waitForDisplayed({ timeout: 3000 });
    }

}

module.exports = new CartPage();