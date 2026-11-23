import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import {ProductPage} from '../pages/ProductPage';

test('user can add item to cart and proceed to checkout', async ({ page }) => {
    const login = new LoginPage(page);
    const product = new ProductPage(page);

    await login.goto();
    await login.login('standard_user','secret_sauce');
    await product.addFirstItemAddToCart();
    
    await expect (product.cartBadge).toHaveText('1');

    await product.goToCart();
    await expect(page).toHaveURL(/cart/);
});