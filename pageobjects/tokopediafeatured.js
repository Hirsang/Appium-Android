class Feature {
    constructor (driver){
        this.driver =driver
    }

    async topfeatured(){
        await this.driver.$('android=new UiSelector().text("Featured")').click();
        await this.driver.$('android=new UiSelector().text("Featured")').click();
        await this.driver.$('android=new UiSelector().text("Promo")').isDisplayed();
        await this.driver.$('android=new UiSelector().text("GoPay Pinjam")').isDisplayed();
        await this.driver.$('android=new UiSelector().text("Pulsa ")').isDisplayed();
        await this.driver.$('android=new UiSelector().text("Tokopedia Card")').isDisplayed();
        await this.driver.$('android=new UiSelector().text("Featured")').click();
    }
    async gadgetorelectronic(){
        await this.driver.$('android=new UiSelector().text("Gadget & Elektronik")').click();
        await this.driver.$('android=new UiSelector().text("Elektronik")').isDisplayed();
        await this.driver.$('android=new UiSelector().text("Handphone & Tablet")').isDisplayed();
        await this.driver.$('android=new UiSelector().text("Audio, Kamera & Elektronik Lainnya")').isDisplayed();
        await this.driver.$('android=new UiSelector().text("Komputer & Laptop")').isDisplayed();
        await this.driver.$('android=new UiSelector().text("Gadget & Elektronik")').click();
    }
    async backtohomepage(){
        await this.driver.$('~Navigate up').click();
    }
}

module.exports=Feature;