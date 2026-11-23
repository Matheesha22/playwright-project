import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);

});

test('invalid login shows error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('wrong_user', 'wrong_pass');
    await expect(login.errormessage).toBeVisible();
});