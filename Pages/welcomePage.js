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
    this.todaysNewsHeaderElem = element(by.xpath("//label[@id='todaysNews']"));
    
    var self = this;
    this.validateDateInNewsHeader = function(){
    	var today = new Date;
    	var date = today.getDate();
    	var day = basePage.convertToDay(today.getDay());
    	var number = today.getMonth()+1;
    	var month = basePage.convertToMonth(number-1);
    	var year = today.getFullYear();
    	expect(this.todaysNewsHeaderElem.getText()).toContain(number+"/"+date+"/"+year);
    }
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
        this.validateDateInNewsHeader();
        
        var format = 'MMMM DD, YYYY';
        var expectedDate = moment().format('dddd MMMM D, YYYY');
        var expectedDateMessage = 'Today is '+expectedDate+'.';
        this.dateInfoElem.getText().then(function (dateinfo) {
			expect(dateinfo).toEqual(expectedDateMessage);
		})
        this.dateElem.getText().then(function (actualDate) {
        	expect(basePage.compareDate(actualDate,format));
        })
        expect(this.welcomeMsgElem.getText()).toEqual(constants.welcomeMessage);
        expect(this.subMsgElem.getText()).toEqual(constants.msgBelowWelcomeMsg);
        expect(this.mainNavLabelsElem.getText()).toEqual(constants.mainNavLabels);
        
    }
    this.clickOnClose = function () {
		this.closeButtonElem.click();
	}    
    this.clickOnHomeIcon = function() {
		this.homeIconElem.click();
	}    
    this.navigateToPatientModule = function() {
		this.patientsElem.click();
	}
    this.navigateToEMRModule = function() {
		this.EMRElem.click();
	}
    this.navigateToSchedulingModule = function() {
		this.schedulingElem.click();
		browser.ignoreSynchronization = true;
	}
    this.navigateToBillingModule = function() {
    	this.billingElem.click();
	}
    this.navigateToInboxModule = function() {
    	this.inboxElem.click();
	}
    this.navigateToWizardModule = function() {
    	this.wizardElem.click();
	}
    this.navigateToPracticeMgmtModule = function() {
    	this.practiceMgmtElem.click();
	}
    this.navigateToUsersModule = function() {
    	this.usersElem.click();
	}
    this.navigateToSettingsModule = function() {
    	this.settingsElem.click();
	}
    

}
 module.exports = new welcomePage;