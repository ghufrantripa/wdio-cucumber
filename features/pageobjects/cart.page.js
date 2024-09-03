class CartPage {
    get cartItems() { return $$('.cart_item'); }

    async getItemCount() {
        return await this.cartItems.length;
    }

    async removeItem(itemName) {
        const item = await $(`//div[text()="${itemName}"]/following-sibling::button[@class="cart_button"]`);
        await item.click();
    }
}

export default new CartPage();
