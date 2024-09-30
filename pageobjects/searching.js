const { SetValueSearch } = require("../env_test");


class Searching {
    constructor(driver) {
        this.driver = driver;
    }

    async clicksearch() {
        const clickbuttonserch = await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/et_search")');
        await clickbuttonserch.click();
    }

    async setvaluesearch() {
        const setvalue = await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/searchTextView")');
        await setvalue.setValue(SetValueSearch);
    }

    async closereqsearch() {
        const Reqsearch = await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/searchTextView")');
        await Reqsearch.setValue(SetValueSearch);
    }

    async setsearching() {
        await this.driver.$('//android.view.View[@content-desc="MainLazyColumn"]/android.view.View[1]/android.view.View[2]').click();
        await this.driver.pause(1000);
        await this.driver.$('//android.view.View[@content-desc="MainLazyColumn"]/android.view.View[1]').click();
    }

    async backtohomepage(){
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/nav_icon_back")').click();
    }
    
}

module.exports={
    Searching
}