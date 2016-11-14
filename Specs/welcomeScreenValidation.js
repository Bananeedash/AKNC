/**
 * Created by bananee.dash on 5/24/2016.
 */

var basePage = require('../Pages/basePage.js');
/*var loginPage = require('D:/Protractor/AKNC/Pages/LoginPage.js');
var environment = require('../Environment.json');
var envt = environment.env;
var userName = (envt == 'dev' ? environment.dev.AKNCusername : (envt == 'qa' ? environment.qa.AKNCusername : environment.staging.AKNCusername));
var password = (envt == 'dev' ? environment.dev.password : (envt == 'qa' ? environment.qa.password : environment.staging.password));*/
var baseSpec = require('../Specs/baseSpec.js');
var welcomePage = require('../Pages/welcomePage.js');
describe('Home Page',function () {
    
    baseSpec.initSetup();

    it('should display all the elements',function () {
    	welcomePage.checkAllItemsInWlcmScrn();

    })
    it('should navigate to patient search screen and check URL',function(){
    	welcomePage.navigateToPatientModule();
    	basePage.checkURL('patient');
    })
    it('should navigate to EMR Module  and check URL',function(){
    	welcomePage.navigateToEMRModule();
    	basePage.checkURL('emr');
    })
    it('should navigate to Scheduling module and check URL',function(){
    	welcomePage.navigateToSchedulingModule();    	
    	basePage.checkURL('scheduler');	
    })
    it('should navigate to Billing module and check URL',function(){
    	welcomePage.navigateToBillingModule();
    	basePage.checkURL('billing');
    	
    })
    it('should navigate to Inbox module and check URL',function(){
    	welcomePage.navigateToInboxModule();
    	basePage.checkURL('inbox');
    	
    })
    it('should navigate to Wizard module and check URL',function(){
    	welcomePage.navigateToWizardModule();
    	basePage.checkURL('wizard');
    	
    })
    it('should navigate to Practice Management module and check URL',function(){
    	welcomePage.navigateToPracticeMgmtModule();
    	basePage.checkURL('practicemanagement');    	
    })
    xit('should navigate to Users module and check URL',function(){
    	welcomePage.navigateToUsersModule();
    	basePage.checkURL('users');    	
    })
    it('should navigate to Settings module and check URL',function(){
    	welcomePage.navigateToSettingsModule();
    	basePage.checkURL('settings');
    })
  
})