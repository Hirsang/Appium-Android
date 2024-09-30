const { DetailProductSearch } = require("../env_test");

//jambu air khi ojok(New Varietas)
class Product{
    constructor(driver) {
        this.driver = driver;
    }

    async scrollfindproduct(){
        const startX = 250;
        const startY = 640;
        const endY = 200; // Y akhir untuk scroll

        // Loop scroll
        const maxScrolls = 10; // Jumlah maksimum scroll
        let scrollCount = 0;
        let elementExists = false;

        while (!elementExists && scrollCount < maxScrolls) {
            // Scroll ke bawah
            await this.driver.performActions([
                { 
                    type: 'pointer', 
                    id: 'finger1', 
                    parameters: { pointerType: 'touch' }, 
                    actions: [
                        { type: 'pointerMove', duration: 0, x: startX, y: startY },
                        { type: 'pointerDown', duration: 0 },
                        { type: 'pointerMove', duration: 500, x: startX, y: endY },
                        { type: 'pointerUp', duration: 0 }
                    ] 
                }
            ]);

            // Cek apakah elemen ada setelah scroll
            const targetElement = await this.driver.$(`android=new UiSelector().text("${DetailProductSearch}")`);
            elementExists = await targetElement.isExisting();

            if (elementExists) {
                await targetElement.click();
                console.log('Elemen ditemukan dan diklik.');
            } else {
                console.log(`Scroll ${scrollCount + 1} dilakukan, elemen belum ditemukan.`);
            }

            scrollCount++;
        }
        if (!elementExists) {
            console.log('Elemen tidak ditemukan setelah maksimum scroll.');
        }
    }

    async detailseller(){
        await this.driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.tokopedia.tkpd.df_base:id/shop_credibility_name"))').click();
    }

    async shareproduct(){
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/icon").instance(1)').click();

    }

    async sharelink(){
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/shareex_icon_channel").instance(2)').click();
    }

    async backtolistsearch(){
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/nav_icon_back")').click();
    }

}

module.exports={
    Product
}