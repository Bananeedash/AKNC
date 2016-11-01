// An example configuration file.
exports.config = {
    directConnect: true,
    //seleniumServerJar: "C:/Users/bananee.dash/AppData/Roaming/npm/node_modules/protractor/selenium-2.53.0/selenium-java-2.53.0.jar",
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 1
    },
    useAllAngular2AppRoots: true,
    onPrepare: function () {
        browser.manage().window().maximize();  
    },
    restartBrowserBetweenTests: false,
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    useAllAngular2AppRoots: true,
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['./Specs/*.js'],
    exclude: ['./Specs/baseSpec.js'],
    //specs: ['./Specs/login.js','./Specs/welcomeScreenValidation.js','./Specs/patientSearch.js'],
    //specs: ['Specs/demographicsValidation.js'],
    
    
    //restartBrowserBetweenTests: true,

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 80000
    }
};