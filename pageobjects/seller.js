class Seller{
    constructor(driver){
        this.driver = driver;
    }

    async ListEtalase(){
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd.df_base:id/tab_icon_layout").instance(1)').click();
    }

    async ListFeed(){
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd.df_base:id/tab_icon_layout").instance(2)').click();
    }

    async ListProduct(){
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd.df_base:id/shop_page_dynamic_tab_view_icon").instance(0)').click();
    }

    async Getfilter(){
        await this.driver.$('android=new UiSelector().text("Filter")').click();
    }

}

module.exports= Seller;

