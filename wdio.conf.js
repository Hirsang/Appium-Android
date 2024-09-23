const { Tokopedia } = require('./env_test.js');

exports.config = {
    // Jalankan di framework Mocha
    framework: 'mocha',

    // Specify Test Files
    specs: [
        './test/tokopedia.js'
    ],
    reporters: [
        ['allure', {
          outputDir: 'allure-results', // Directory where the allure report will be saved
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false,
          useCucumberStepReporter: false,
        }]
      ],
    // Menggunakan WebdriverIO bersama Appium
    services: ['appium'],

    // Menggunakan konfigurasi Tokopedia
    path: Tokopedia.path,
    port: Tokopedia.port,
    logLevel: Tokopedia.logLevel,

    // Capabilities untuk Android (Tokopedia)
    capabilities: [Tokopedia.capabilities],

    // Mocha options
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Output log
    appium: {
        command: 'appium'
    }
};
