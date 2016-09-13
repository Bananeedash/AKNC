// An example configuration file.
exports.config = {
    directConnect: true,
    //seleniumServerJar: "C:/Users/bananee.dash/AppData/Roaming/npm/node_modules/protractor/selenium-2.53.0/selenium-java-2.53.0.jar",
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    //useAllAngular2AppRoots: true,
    onPrepare: function () {
        browser.manage().window().setSize(1600,1000);  
    },
    restartBrowserBetweenTests: false,
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    useAllAngular2AppRoots: true,
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['**//Specs/login.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 80000
    }
};