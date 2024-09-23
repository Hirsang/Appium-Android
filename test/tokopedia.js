const { Tokopedia } = require("../env_test");
const { remote } = require('webdriverio');
const { addFeature, addStory, addStep, addAttachment } = require('@wdio/allure-reporter').default;

const Onboarding = require("../pageobjects/onboarding");
const FilterProduct = require("../pageobjects/filterproduct");
const Seller = require("../pageobjects/seller");
const { Searching } = require("../pageobjects/searching");
const { Product } = require("../pageobjects/product");

describe('Tokopedia Search and Product Flow', function() {
    let driver, onboarding, searching, product, seller, filterproduct;

    before(async function() {
        driver = await remote(Tokopedia);
        onboarding = new Onboarding(driver);
        searching = new Searching(driver);
        product = new Product(driver);
        seller = new Seller(driver);
        filterproduct = new FilterProduct(driver);
        console.log('Aplikasi Dibuka!');
    });

    it('should complete the onboarding flow', async function() {
        addFeature('Feature: Tokopedia Search and Product Flow');
        addStory('Story: User Onboarding, Searching, and Filtering Products');

        addStep('Step 1: Onboarding flow');
        await onboarding.clickOnboardingButton();
        await onboarding.AllowPermissionPhone();
        await onboarding.clickNavigateBack();
        await onboarding.clickSetNotification();
        await onboarding.AllowPermissionNotification();
        await driver.pause(1000);
    });

    it('should search for product', async function() {
        addStep('Step 2: Searching for product');
        await searching.clicksearch();
        await searching.setvaluesearch();
        await searching.setsearching();
    });

    it('should scroll to find product and navigate seller', async function() {
        addStep('Step 3: Scrolling to find product');
        await product.scrollfindproduct();
        await product.detailseller();

        addStep('Step 4: Navigating seller and product list');
        await seller.ListEtalase();
        await seller.ListFeed();
        await seller.ListProduct();
        await seller.Getfilter();
    });

    it('should filter products', async function() {
        addStep('Step 5: Filtering products');
        await filterproduct.category();
    });

    after(async function() {
        await driver.deleteSession();
        console.log('Sesi dihentikan!');
    });

    // Optional: Catch errors and take screenshots
    afterEach(async function() {
        if (this.currentTest.state === 'failed') {
            const screenshot = await driver.takeScreenshot();
            addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
        }
    });
    
});