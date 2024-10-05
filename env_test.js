// otpService.js

const SetValueSearch='jambu air merah'
const DetailProductSearch='Jambu air citra kingrose merah 1kg'//produk yang dicari setelah di search
const CategoryProduct= 'Buah'

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