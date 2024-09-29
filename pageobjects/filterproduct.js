const { CategoryProduct } = require("../env_test");

class FilterProduct{
    constructor(driver){
        this.driver = driver
    }

    async category(){
        const startX = 536;
        const startY = 1233;
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
            const targetElement = await this.driver.$(`android=new UiSelector().text("${CategoryProduct}")`);
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
        await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/buttonApplySortFilter")').click();
    }

    async price(){
        const startX = 536;
        const startY = 1233;
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
            const minamount = await this.driver.$('android=new UiSelector().text("Terendah")');
            elementExists = await minamount.isExisting()
            const maxamount = await this.driver.$('android=new UiSelector().text("Tertinggi")');
            elementExists = await maxamount.isExisting()

            if (elementExists) {
                await minamount.click();
                await minamount.setValue(10000);

                await maxamount.click();
                await maxamount.setValue(50000);
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

    async submitfilter(){
        const startX = 536;
        const startY = 1233;
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
            const targetElement = await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd:id/buttonApplySortFilter")');
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



    

    

}


module.exports=FilterProduct;