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
        const navigateUpButton = await this.driver.$('android=new UiSelector().description("Navigate up")');
        await navigateUpButton.click();
    }

    async clickSetNotification() {
        const notificationButton = await this.driver.$('//android.widget.TextView[@resource-id="com.tokopedia.tkpd:id/cm_general_prompt_turn_on_notification"]');
        await notificationButton.click();
    }
    async AllowPermissionNotification() {
        const notificationButton = await this.driver.$('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');
        await notificationButton.click();
    }
}

module.exports = Onboarding;
