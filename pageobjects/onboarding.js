class Onboarding {
    constructor(driver) {
        this.driver = driver;
    }

    async clickOnboardingButton() {
        const onboardingButton = await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd.df_base:id/buttonGlobalDynamicOnbaording")');
        const onboardingButton1 = await this.driver.$('android=new UiSelector().resourceId("com.tokopedia.tkpd.df_base:id/join_button")')

        const isOnboardingButtonDisplayed = await onboardingButton.isDisplayed();
        if(isOnboardingButtonDisplayed){
            await onboardingButton.click();
        }else{
            await onboardingButton1.click();
        }
    }

    async AllowPermissionPhone() {
        const allowButton = await this.driver.$('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');
        await allowButton.click();
    }

    async clickNavigateBack() {
        const navigateUpButton = await this.driver.$('android=new UiSelector().className("android.widget.ImageButton")');
        await navigateUpButton.click();
    }
}

module.exports = Onboarding;
