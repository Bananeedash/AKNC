var basePage = require('../Pages/basePage.js');
var constants = require('../constants.js');
var patientHubScreen = require('../Pages/patientHubScreen.js'); 

var patientDetails = function(){
	
	this.headerInPatientDetailsElem = element.all(by.xpath("//div//span[@class='name-header']"));
	this.nameheaderCloseElem = element.all(by.xpath("//div//span[@class='name-header']/i"));
	this.patientDetailsAccordionsHeadersElem = element.all(by.xpath("//div//h4[@class='panel-title']"));
	this.patientImgInDemographicsElem = element(by.xpath("//div/img"));
	this.demographicsEditButtonElem = element(by.xpath("//div/button[@id='editDemographics']"));
	this.demographicsFieldsElem = element(by.xpath("(//div[@class='col-md-12']//div)[2]"));
	this.add1InputElem = element(by.xpath("//ul[@class='step-one']//input[@id='add1']"));
	this.add2InputElem = element(by.xpath("//ul[@class='step-one']//input[@id='add2']"));
	this.aptInputElem = element(by.xpath("//ul[@class='step-one']//input[@ng-reflect-name='Apt']"));
	this.cityInputElem = element(by.xpath("//ul[@class='step-one']//input[@id='city']"));
	this.stateElem = element(by.xpath("//ul[@class='step-one']//select[@ng-reflect-name='State']"));
	this.stateSelectListElem = element.all(by.xpath("//ul[@class='step-one']//select[@ng-reflect-name='State']/option"));
	this.zipInputElem = element(by.xpath("//ul[@class='step-one']//input[@id='zip']"));
	this.plus4InputElem = element(by.xpath("//ul[@class='step-one']//input[@id='plus4']"));
	this.validateAddressButtonElem = element(by.xpath("//ul[@class='step-one']//button[@id='validateAddress']"));
	this.validatorMsgElem = element(by.xpath("//div[@class='k-notification-wrap']"));
	this.patientCellPhnInputElem = element(by.xpath('//input[@id="cellPhone"]'));
	this.emergncyCellPhnInputElem = element(by.xpath('(//input[@ng-reflect-name="CellPhone"])[2]'));
	this.smsButtonElem = element.all(by.buttonText('SMS'));
	this.smsPopUpWindowElem = element(by.xpath('//div[@id="SendSmsPopup"]'));
	this.smsPopUpWinHeaderElem = element(by.xpath('//span[@id="SendSmsPopup_wnd_title"]'));
	this.phnFieldSMSPopUpElem = element(by.xpath('//input[@id="smsPopupCell"]'));
	this.smsContentTextboxElem = element(by.xpath('//textarea[@id="messageContent"]'));
	this.sendSMSButtonElem = element(by.xpath('//button[@id="sendSms"]'));
	this.patientEmailInputElem = element(by.xpath("//input[@id='email']"));
	this.resendInviteButtonElem = element(by.xpath("//button[@id='resendPortalInvite']"));
	this.invalidEmailTooltipElem = element(by.xpath("//input[@id='email']/ancestor::div[@class='divControl']//span"));
	this.lastNameInputElem = element(by.xpath("//input[@ng-reflect-name='LastName']"));
	this.lastNameTooltipElem = element(by.xpath("//input[@ng-reflect-name='LastName']/ancestor::div[@class='subDivControl']//span"));
	this.firstNameInputElem = element(by.xpath("//input[@ng-reflect-name='FirstName']"));
	this.firstNameTooltipElem = element(by.xpath("//input[@ng-reflect-name='FirstName']/ancestor::div[@class='subDivControl']//span"));

	var self = this;

	this.validateAllElementsOfDemographicsAccordion = function(){
		expect(self.patientImgInDemographicsElem).toBeDefined();
		expect(self.demographicsEditButtonElem).toBeDefined();
		this.stateElem.element(by.css('option:checked')).getText().then(function(state){
			expect(state).toEqual(' ALASKA');
		})
		
	}
	
	//ADDRESS VALIDATOR

	this.validateAlphaOrderStateList = function(){
		basePage.sortAndCompareList(self.stateSelectListElem);
	}
	this.inputValidAddress = function() {
		//this.demographicsEditButtonElem.click();
		this.add1InputElem.sendKeys(constants.patientAddress[0]);
		this.add2InputElem.sendKeys(constants.patientAddress[1]);
		this.aptInputElem.sendKeys(constants.patientAddress[2]);
		this.cityInputElem.sendKeys(constants.patientAddress[3]);
		element(by.cssContainingText('option', constants.patientAddress[4])).click();
		this.zipInputElem.sendKeys(constants.patientAddress[5]);
		this.plus4InputElem.sendKeys(constants.patientAddress[6]);
	}
	this.clearAllAddressFields = function(){
		//basePage.clearField(self.demographicsEditButtonElem);
		basePage.clearField(self.add1InputElem);
		basePage.clearField(self.add2InputElem);
		basePage.clearField(self.aptInputElem);
		basePage.clearField(self.cityInputElem);
		basePage.clearField(self.zipInputElem);
		basePage.clearField(self.plus4InputElem);
		element(by.cssContainingText('option', 'ALASKA')).click();		
	}
	this.validateWZipInput = function(){
		this.demographicsEditButtonElem.click();
		this.zipInputElem.sendKeys(constants.patientAddress[5]);
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Invalid Address');
			})
		})
		expect(this.zipInputElem.getAttribute('value')).toEqual(constants.patientAddress[5]);
		browser.sleep(4000);
	}
	
	this.validateWZipAndStateInput = function(){
		element(by.cssContainingText('option', constants.patientAddress[4])).click();
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Invalid Address');
			})
		})
		expect(this.zipInputElem.getAttribute('value')).toEqual(constants.patientAddress[5]);
		browser.sleep(4000);
		
	}
	this.validateWCityStateZipInput = function(){
		this.cityInputElem.sendKeys(constants.patientAddress[3]);
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Invalid Address');
			})
		})
		expect(this.add1InputElem.getAttribute('value')).toEqual('');
		browser.sleep(4000);
	}
	
	this.verifyAddressValidator = function(){
		this.clearAllAddressFields();
		this.inputValidAddress();
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Address Validated');
			})
		})
		browser.sleep(4000);

	}
	this.verifyAddrsValidatorWithoutZip = function(){
		basePage.clearField(self.zipInputElem);
		basePage.clearField(self.plus4InputElem);
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Address Validated');
			})
		})
		expect(this.zipInputElem.getAttribute('value')).toEqual(constants.patientAddress[5]);
		expect(this.plus4InputElem.getAttribute('value')).toEqual(constants.patientAddress[6]);
		browser.sleep(4000);
	}
	this.verifyAddrsValidatorWithoutCity = function(){
		basePage.clearField(self.cityInputElem);
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Address Validated');
			})
		})
		expect(this.cityInputElem.getAttribute('value')).toEqual(constants.patientAddress[3]);
		browser.sleep(4000);
	}
	this.verifyAddrsValidatorWithInvState = function(){
		element(by.cssContainingText('option', 'WASHINGTON')).click();
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Address Validated');
			})
		})
		this.stateElem.element(by.css('option:checked')).getText().then(function(state){
			expect(state).toEqual(constants.patientAddress[4]);
		})
		browser.sleep(4000);
	}
	
	this.validateAddressWoZipAndState = function(){
		
		this.inputValidAddress();
		element(by.cssContainingText('option', 'OHIO')).click();
		browser.sleep(5000);
		this.zipInputElem.click();
		this.zipInputElem.clear();
		//basePage.clearField(self.zipInputElem);
		browser.sleep(5000);
		this.plus4InputElem.click();
		basePage.clearField(self.plus4InputElem);
		browser.sleep(5000);
		basePage.clearField(self.cityInputElem);
		browser.sleep(5000);
		this.validateAddressButtonElem.click();
		browser.sleep(5000);
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Invalid Address');
			})
		})
		this.stateElem.element(by.css('option:checked')).getText().then(function(state){
			expect(state).toEqual('OHIO');
		})
		browser.sleep(4000);
	}
	
	this.verifyAddrs2Blank = function(){
		this.clearAllAddressFields();
		this.inputValidAddress();
		basePage.clearField(self.add2InputElem);
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Address Validated');
			})
		})
		expect(this.add2InputElem.getAttribute('value')).toEqual('');
		browser.sleep(4000);
	}

	this.verifyAptBlank = function(){
		basePage.clearField(self.aptInputElem);
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Address Validated');
			})
		})
		expect(this.aptInputElem.getAttribute('value')).toEqual('');
		browser.sleep(4000);
	}
	
	//SMS POP-UP
	this.validateSMSPopUp = function(){
		this.smsButtonElem.each(function(smsButton,index) {
			if(index===0){
				expect(self.patientCellPhnInputElem.getAttribute('value')).toBe('');
			}
			else{
				expect(self.emergncyCellPhnInputElem.getAttribute('value')).toBe('');
			}
			smsButton.click();
			self.validatorMsgElem.isDisplayed().then(function() {
				self.validatorMsgElem.getText().then(function(message) {
					console.log(message);
					expect(message).toContain('Please enter cell phone number');
				})
			})
			browser.sleep(3000);
			if(index===0){
				self.patientCellPhnInputElem.sendKeys(constants.cellPhoneNumber);
				var phnFormat = self.patientCellPhnInputElem.getAttribute('value');
			}
			else{
				self.emergncyCellPhnInputElem.sendKeys(constants.cellPhoneNumber);
				var phnFormat = self.emergncyCellPhnInputElem.getAttribute('value');
			}			
			smsButton.click();
			browser.waitForAngular().then(function() {
				browser.switchTo(self.smsPopUpWindowElem);
			})
			expect(self.smsPopUpWinHeaderElem.getText()).toEqual('Send SMS');
			expect(self.phnFieldSMSPopUpElem.getAttribute('disabled')).toBe('true');
			expect(self.phnFieldSMSPopUpElem.getAttribute('value')).toBe(phnFormat);
			expect(self.smsContentTextboxElem.getAttribute('placeholder')).toBe('Maximum 160 characters only');
			self.smsContentTextboxElem.sendKeys('Sample SMS');
			self.sendSMSButtonElem.click();
			self.validatorMsgElem.isDisplayed().then(function() {
				self.validatorMsgElem.getText().then(function(message) {
					console.log(message);
					expect(message).toContain('SMS Sent Successfully');
				})
			})
			browser.sleep(3000);
		})

	}
	
	//RESEND INVITE
	this.validateResendInvite = function(){
		expect(this.invalidEmailTooltipElem.getAttribute("textContent")).not.toContain('This is a required field');
		this.patientEmailInputElem.sendKeys('abcdefgh');
		expect(this.invalidEmailTooltipElem.getAttribute("textContent")).toContain('Invalid email');
		basePage.clearField(this.patientEmailInputElem);
		this.patientEmailInputElem.sendKeys('bananee.dash@mindfiresolutions.com');
		this.resendInviteButtonElem.click();
		self.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(message) {
				console.log(message);
				expect(message).toContain('Sending Email');
				browser.sleep(2000);
				self.validatorMsgElem.isDisplayed().then(function() {
					self.validatorMsgElem.getText().then(function(message1) {
						console.log(message1);
						expect(message1).toContain('Email Sent Successfully');
					})
				})
			})
		})
		browser.sleep(2000);
	}
	
	//REQUIRED FIELDS VALIDATION
	this.lastNameFieldValidation = function(){
		var flag=0;
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.splCharInput).then(function() {
				console.log('Special Char');
			})			
		})
		expect(this.lastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.numericInput).then(function() {
				console.log('Numeric');
			})
		})
		expect(this.lastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				console.log('Alphanumeric');
			})
		})
		expect(this.lastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.maxCharInput).then(function() {
				console.log('maximum');
			})
		})
		this.lastNameTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			console.log('is not displayed');
		})
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.gtThanMaxCharInput).then(function() {
				console.log('More than Maximum Chars');
			})
		})
		expect(this.lastNameTooltipElem.getAttribute("textContent")).toContain('Exceeded maximum allowed characters for last name.');
	}
	this.firstNameFieldValidation = function(){
		var flag=0;
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.splCharInput).then(function() {
				console.log('Special Char');
			})			
		})
		expect(this.firstNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.numericInput).then(function() {
				console.log('Numeric');
			})
		})
		expect(this.firstNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				console.log('Alphanumeric');
			})
		})
		expect(this.firstNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.maxCharInput).then(function() {
				console.log('maximum');
			})
		})
		this.firstNameTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			console.log('is not displayed');
		})
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.gtThanMaxCharInput).then(function() {
				console.log('More than Maximum Chars');
			})
		})
		expect(this.firstNameTooltipElem.getAttribute("textContent")).toContain('Exceeded maximum allowed characters for first name.');
	}

}
module.exports = new patientDetails();
