/**
 * Created by bananee.dash on 5/24/2016.
 */
var basePage = require('../Pages/basePage.js');
var moment = require('C:/Users/bananee.dash/node_modules/moment');
var constants = require('../constants.js');
var welcomePage = function () {
	this.homeIconElem = element(by.className('home-icon'));
	//this.closeButtonElem = element(by.xpath("//div[@class='top-bar']/a[@class='close']")); not used anymore
    this.welcomeUserElem = element(by.xpath("//p[@class='cl-name']"));
    this.AKNCLogoElem = element(by.xpath("//div[@class='main-area']//img"));
    this.dateInfoElem = element(by.xpath("//p[@class='date-info']"));
    this.dateElem = element(by.xpath("//span[@id='TodayDate']"));
    this.welcomeMsgElem = element(by.xpath("//div[@class='welcome-home']/h1"));
    this.subMsgElem = element(by.xpath("//div[@class='welcome-home']/p[2]"));
    this.patientsElem = element(by.className('pts'));
    this.EMRElem = element(by.className('emr'));
    this.schedulingElem = element(by.className('sch'));
    this.billingElem = element(by.className('bill'));
    this.inboxElem = element(by.className('inb'));
    this.wizardElem = element(by.className('wiz'));
    this.practiceMgmtElem = element(by.className('pm'));
    this.usersElem = element(by.className('usr'));
    this.settingsElem = element(by.className('stg'));    
    this.actionButtonElem = element.all(by.className('btn btn-default'));
    this.mainNavLabelsElem = element.all(by.xpath("//nav[@class='main-nav']/ul/li"));
    
    
    var self = this;
    this.checkAllItemsInWlcmScrn = function(){
    	/*var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(self.welcomeUser));
        browser.ignoreSynchronization = false;
        self.welcomeUser.getText().then(function (welcomeUser) {
        console.log(welcomeUser);
        })*/
    	browser.ignoreSynchronization = false;
        expect(self.welcomeUserElem).toBeDefined();        
        expect(self.patientsElem).toBeDefined();
        expect(self.schedulingElem).toBeDefined();
        expect(self.billingElem).toBeDefined();
        expect(self.billingElem).toBeDefined();
        expect(self.inboxElem).toBeDefined();
        expect(self.wizardElem).toBeDefined();
        expect(self.practiceMgmtElem).toBeDefined();
        expect(self.usersElem).toBeDefined();
        expect(self.settingsElem).toBeDefined();
        expect(self.actionButtonElem.getText()).toEqual(constants.actionButtonLabels);
        expect(self.AKNCLogoElem).toBeDefined();
        
        var format = 'MMMM DD, YYYY';
        var expectedDate = moment().format('dddd MMMM D, YYYY');
        var expectedDateMessage = 'Today is '+expectedDate+'.';
        self.dateInfoElem.getText().then(function (dateinfo) {
			expect(dateinfo).toEqual(expectedDateMessage);
		})
        self.dateElem.getText().then(function (actualDate) {
        	expect(basePage.compareDate(actualDate,format));
        })
        expect(self.welcomeMsgElem.getText()).toEqual(constants.welcomeMessage);
        expect(self.subMsgElem.getText()).toEqual(constants.msgBelowWelcomeMsg);
        expect(self.mainNavLabelsElem.getText()).toEqual(constants.mainNavLabels);
        
    }
    this.clickOnClose = function () {
		self.closeButtonElem.click();
	}    
    this.clickOnHomeIcon = function() {
		self.homeIconElem.click();
	}    
    this.navigateToPatientModule = function() {
    	browser.ignoreSynchronization = false;
		self.patientsElem.click();
	}
    this.navigateToEMRModule = function() {
		self.EMRElem.click();
	}
    this.navigateToSchedulingModule = function() {
		self.schedulingElem.click();
	}
    this.navigateToBillingModule = function() {
		self.billingElem.click();
	}
    this.navigateToInboxModule = function() {
		self.inboxElem.click();
	}
    this.navigateToWizardModule = function() {
		self.wizardElem.click();
	}
    this.navigateToPracticeMgmtModule = function() {
		self.practiceMgmtElem.click();
	}
    this.navigateToUsersModule = function() {
		self.usersElem.click();
	}
    this.navigateToSettingsModule = function() {
		self.settingsElem.click();
	}
    

}
 module.exports = new welcomePage;