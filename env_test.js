// otpService.js

const SetValueSearch='Lock n Lock Belt One Piece'
const DetailProductSearch='               LocknLock Belt Tumbler One Piece Edition LocknLock - Monkey D. Luffy'//produk yang dicari setelah di search

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
      'appium:appActivity': '.ConsumerSplashScreen'
  }
};




module.exports={
    Tokopedia,
    SetValueSearch,
    DetailProductSearch,
    CategoryProduct
}