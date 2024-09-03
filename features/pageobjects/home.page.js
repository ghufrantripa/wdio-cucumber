class HomePage {
    get dashboard() { return $('.inventory_list'); }
    get addToCartButton() { return (itemName) => $(`//div[text()="${itemName}"]/following-sibling::button`); }
    get cartButton() { return $('#shopping_cart_container'); }

    async addItemToCart(itemName) {
        const button = await this.addToCartButton(itemName);
        await button.click();
    }

    async viewCart() {
        await this.cartButton.click();
    }
}

export default new HomePage();
