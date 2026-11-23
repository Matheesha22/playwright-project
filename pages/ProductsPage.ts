import { Page, Locator } from '@playwright/test';

export class ProductsPage { 
    readonly page: Page;
    readonly addToCartBtn: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartBtn = page.locator('.btn_inventory').first();
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addFirstItemToCart() {
        await this.addToCartBtn.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
    
}