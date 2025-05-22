class Seller{
    constructor(driver){
        this.driver = driver;
    }

    async ListEtalase(){
        await this.driver.$('android=new UiSelector().text("Etalase")').click();
    }

    async ListFeed(){
        await this.driver.$('android=new UiSelector().text("Feed")').click();
    }

    async ListProduct(){
        await this.driver.$('android=new UiSelector().text("Produk")').click();
    }

    async Getfilter(){
        await this.driver.$('android=new UiSelector().text("Filter")').click();
    }

    async BackToProduct(){
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/nav_icon_back")').click();
    }

}

module.exports= Seller;

