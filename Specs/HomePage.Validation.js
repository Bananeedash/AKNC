/**
 * Created by bananee.dash on 5/24/2016.
 */
var welcomePage = require('../Page Objects/welcomePage.js');
var basePage = require('../Page Objects/basePage.js');
var loginPage = require('D:/Protractor/AKNC/Page Objects/LoginPage.js');
var environment = require('../Environment.json');
var envt = environment.env;
var userName = (envt == 'dev' ? environment.dev.AKNCusername : (envt == 'qa' ? environment.qa.AKNCusername : environment.staging.AKNCusername));
var password = (envt == 'dev' ? environment.dev.password : (envt == 'qa' ? environment.qa.password : environment.staging.password));
describe('Home Page',function () {
    browser.ignoreSynchronization = true;
    loginPage.getEMR();
    loginPage.login(userName,password);

    it('should display welcome message',function () {
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(welcomePage.welcomeMsg));
            browser.ignoreSynchronization = false;
            welcomePage.welcomeMsg.getText().then(function (welcomemsg) {
            console.log(welcomemsg);
            
            })
        expect(welcomePage.welcomeMsg).toBeDefined();

    })
    it('should display Patients',function () {
        expect(welcomePage.patients).toBeDefined();
    })
    it('should display Scheduling',function () {
        expect(welcomePage.scheduling).toBeDefined();
    })
    it('should display Billing',function () {
        expect(welcomePage.billing).toBeDefined();
    })
    it('should display Inbox',function () {
        expect(welcomePage.inbox).toBeDefined();
    })
    it('should display Wizard',function () {
        expect(welcomePage.wizard).toBeDefined();
    })
    it('should display Practice Management',function () {
        expect(welcomePage.practiceMgmt).toBeDefined();
    })
    it('should display Users',function () {
        expect(welcomePage.users).toBeDefined();
    })
    it('should display Settings',function () {
        expect(welcomePage.settings).toBeDefined();
    })
    it('should display action buttons',function(){
    	expect(welcomePage.actionButtonElem.getText()).toEqual(['DME/CPAP','Sleep Lab','MRI Scanner','Infusion Nurse','EEG/EVP Lab',
    	                                                          'Check-in','Check-out','Triage','Nurse','Provider','Prior Authorizations',
    	                                                          'Benefits','Billing','Cafe','CMA','Medical Records','Referrals Out',
    	                                                          'Scheduling']);
    
    	//expect(welcomePage.actionButtonElem.get(0).getText()).toBe('DME/CPAP');
    	
    })
    
})