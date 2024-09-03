import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CartPage from '../pageobjects/cart.page.js';

Given(/^user is on Login page$/, async () => {
    await LoginPage.open();
});

When(/^user login using "([^"]*)" as username and "([^"]*)" as password$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^user should be redirected to homepage$/, async () => {
    await expect(HomePage.dashboard).toBeDisplayed();
});

Then(/^user should see error message "([^"]*)"$/, async (expectedMessage) => {
    const errorMessage = await LoginPage.getErrorMessage();
    await expect(errorMessage).toHaveText(expectedMessage); // Use toHaveText instead of toHaveTextContaining
});

Given(/^user is logged in$/, async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(HomePage.dashboard).toBeDisplayed();
});

When(/^user adds "([^"]*)" to the cart$/, async (itemName) => {
    await HomePage.addItemToCart(itemName);
});

When(/^user removes "([^"]*)" from the cart$/, async (itemName) => {
    await CartPage.removeItem(itemName);
});

Then(/^the cart should be empty$/, async () => {
    const itemCount = await CartPage.getItemCount();
    await expect(itemCount).toBe(0);
});

Given(/^user has added "([^"]*)" and "([^"]*)" to the cart$/, async (item1, item2) => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await HomePage.addItemToCart(item1);
    await HomePage.addItemToCart(item2);
});

When(/^user views the cart$/, async () => {
    await HomePage.viewCart();
});

Then(/^the cart should have (\d+) items$/, async (expectedCount) => {
    const itemCount = await CartPage.getItemCount();
    await expect(itemCount).toBe(parseInt(expectedCount, 10));
});
