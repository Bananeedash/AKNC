exports.config = {
    directConnect: true,
    //seleniumServerJar: "C:/Users/bananee.dash/AppData/Roaming/npm/node_modules/protractor/selenium-2.53.0/selenium-java-2.53.0.jar",
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 3
    },
    useAllAngular2AppRoots: true,
    onPrepare: function () {
        browser.manage().window().maximize();  
    },
    restartBrowserBetweenTests: false,
    framework: 'jasmine',

    specs: ['./Specs/*.js'],
    exclude: ['./Specs/baseSpec.js'],
    //specs: ['./Specs/patientHubValidations.js','./Specs/patientSearch.js','./Specs/demographicsValidation.js',
    //		'.Specs/schedulingDailyView.js','.Specs/welcomeScreenValidation.js'],
    //specs: ['Specs/login.js'],
    
    allScriptsTimeout: 15000,
    //restartBrowserBetweenTests: true,

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 80000
    }
};