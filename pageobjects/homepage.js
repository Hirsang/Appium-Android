class Homepage{
    constructor (driver){
        this.driver=driver;
    }

    async checkproducttokopedia() {
        const startX = 927; // X awal untuk scroll horizontal dari kanan
        const startY = 750; // Y konstan karena tidak ada pergerakan vertikal
        const endX = 229; // X akhir untuk scroll (ke kiri)

        // Loop scroll
        const maxScrolls = 3; // Jumlah maksimum scroll
        let scrollCount = 0;
        let elementExists = false;

        while (!elementExists && scrollCount < maxScrolls) {
            // Scroll ke kiri (horizontal)
            await this.driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: startX, y: startY }, // Mulai dari startX
                        { type: 'pointerDown', duration: 0 },
                        { type: 'pointerMove', duration: 1000, x: endX, y: startY }, // Pindahkan ke endX (horizontal scroll)
                        { type: 'pointerUp', duration: 0 }
                    ]
                }
            ]);

            // Cek apakah elemen ada setelah scroll
            const targetElement = await this.driver.$('android=new UiSelector().text("Lihat Semua")');
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

module.exports=Homepage;