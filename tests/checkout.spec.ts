import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('user can add item to cart', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login("standard_user", "secret_sauce");

    await products.addFirstItemToCart();
    await expect(products.cartBadge).toHaveText('1');

    await products.goToCart();
    await expect(page).toHaveURL(/cart/);

})
