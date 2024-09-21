// otpService.js

const SetValueSearch='jambu'
const DetailProductSearch='jambu air khi ojok(New Varietas)'//produk yang dicari setelah di search
const CategoryProduct= 'Taman'

const Tokopedia = {
  logLevel: 'info',
  path: '/',
  port: 4725,
  capabilities: {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:noReset': false,
      'appium:newCommandTimeout': 3688,
      'appium:appPackage': 'com.tokopedia.tkpd',
      'appium:appActivity': 'com.tokopedia.navigation.presentation.activity.NewMainParentActivity'
  }
};




module.exports={
    Tokopedia,
    SetValueSearch,
    DetailProductSearch,
    CategoryProduct
}