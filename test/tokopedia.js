const { Tokopedia } = require("../env_test");
const { remote } = require('webdriverio');
const { addFeature, addStory, addStep, addAttachment } = require('@wdio/allure-reporter').default;

const Onboarding = require("../pageobjects/onboarding");
const FilterProduct = require("../pageobjects/filterproduct");
const Seller = require("../pageobjects/seller");
const { Searching } = require("../pageobjects/searching");
const { Product } = require("../pageobjects/product");
const Homepage = require("../pageobjects/homepage");


describe('Tokopedia Search and Product Flow', function() {
    let driver, onboarding, searching, product, seller, filterproduct, homepage;

    before(async function() {
        driver = await remote(Tokopedia);
        onboarding = new Onboarding(driver);
        searching = new Searching(driver);
        product = new Product(driver);
        seller = new Seller(driver);
        filterproduct = new FilterProduct(driver);
        homepage = new Homepage(driver);

        console.log('Aplikasi Dibuka!');
    });
    addFeature('Feature: Tokopedia Search and Product Flow');
    addStory('Story: User Onboarding, Searching, and Filtering Products');

    it('should complete the onboarding flow', async function() {
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
        await seller.Getfilter();
        await filterproduct.category();
        await seller.Getfilter();
        await filterproduct.price();
        await filterproduct.submitfilter();
        await seller.BackToProduct();
    });

    it('should share product', async function(){
        addStep('Step 6: share products');
        await product.shareproduct();
        await product.sharelink();
        await product.backtolistsearch();
        
    })

    it('check homepage', async function(){
        addStep('Step 7: check tokopedia product');
        await driver.pause(2000)
        await searching.backtohomepage();
        await homepage.checkproducttokopedia();
    })

    after(async function() {
        await driver.pause(2000)
        // await driver.deleteSession();
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

