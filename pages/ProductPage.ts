import {Page , Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly addCartBtn: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;

    constructor (page:Page){
        this.page = page;
        this.addCartBtn = page.locator('.btn_inventory').first();
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }


        async addFirstItemAddToCart(){
            await this.addCartBtn.click();
        }

        async goToCart(){
            await this.cartIcon.click();
        }

    }
