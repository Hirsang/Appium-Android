const { remote } = require('webdriverio');
const { Tokopedia } = require('./env_test');
const Onboarding = require('./onboarding');
const { Searching } = require('./searching');
const { Product } = require('./product');
const Seller = require('./seller');
const FilterProduct = require('./filterproduct');




async function main() {
    const driver = await remote(Tokopedia);
    const onboarding = new Onboarding(driver);
    const searching  = new Searching(driver);
    const product = new Product(driver);
    const seller = new Seller(driver);
    const filterproduct =new FilterProduct(driver);

    console.log('Aplikasi Dibuka!');

    try {

        await onboarding.clickOnboardingButton();
        await onboarding.AllowPermissionPhone();
        await onboarding.clickNavigateBack();
        await onboarding.clickSetNotification();
        await onboarding.AllowPermissionNotification();
        await driver.pause(1000);

        await searching.clicksearch();
        await searching.setvaluesearch();
        await searching.setsearching();

        await product.scrollfindproduct();
        await product.detailseller();

        await seller.ListEtalase();
        await seller.ListFeed();
        await seller.ListProduct();
        await seller.Getfilter();

        await filterproduct.category();

    } catch (error) {
        console.error('Error during test:', error);
    } finally {
        // await driver.deleteSession();
        console.log('Sesi dihentikan!');
    }
}


main().catch(console.error);