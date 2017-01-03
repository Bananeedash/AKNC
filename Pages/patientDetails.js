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
	this.add1InputElem = element(by.xpath("//input[@id='add1']"));
	this.add1TooltipElem = element(by.xpath("//input[@id='add1']/ancestor::div[@class='divControl']//span"));
	this.add2InputElem = element(by.xpath("//ul[@class='step-one']//input[@id='add2']"));
	this.add2TooltipElem = element(by.xpath("//input[@id='add2']/ancestor::div[@class='divControl']//span"));
	this.aptInputElem = element(by.xpath("//input[@ng-reflect-name='Apt']"));
	this.aptTooltipElem = element(by.xpath("//input[@ng-reflect-name='Apt']/ancestor::div[@class='divControl']//span"));
	this.cityInputElem = element(by.xpath("//ul[@class='step-one']//input[@id='city']"));
	this.cityTooltipElem = element(by.xpath("//input[@id='city']/ancestor::div[@class='divControl']//span"));
	this.zipInputElem = element(by.xpath("//ul[@class='step-one']//input[@id='zip']"));
	this.zipTooltipElem = element(by.xpath("//input[@id='zip']/ancestor::div[@class='subDivControl']//span"))
	this.plus4InputElem = element(by.xpath("//ul[@class='step-one']//input[@id='plus4']"));
	this.validateAddressButtonElem = element(by.xpath("//ul[@class='step-one']//button[@id='validateAddress']"));
	this.validatorMsgElem = element(by.xpath("//div[@class='k-notification-wrap']"));
	this.resendInviteInfoElem = element(by.xpath("//div[@class='k-widget k-notification k-notification-info k-popup k-group k-reset k-state-border-up']//div[@class='k-notification-wrap']"));
	this.resendInviteSuccessElem = element(by.xpath("//div[@class='k-widget k-notification k-notification-success k-popup k-group k-reset k-state-border-up']//div[@class='k-notification-wrap']"));
	this.patientHomePhnInputElem = element(by.xpath('//input[@ng-reflect-name="HomePhone"]'));
	this.patientWorkPhnInputElem = element(by.xpath('//input[@ng-reflect-name="WorkPhone"]'));
	this.patientCellPhnInputElem = element(by.xpath('//input[@id="cellPhone"]'));
	this.pttCellPhnTooltipElem = element(by.xpath('//input[@id="cellPhone"]/ancestor::div[@class="divControl"]//span'));
	this.emergncyCellPhnInputElem = element(by.xpath('(//input[@ng-reflect-name="CellPhone"])[2]'));
	this.emgyCellPhnTooltipElem = element(by.xpath("(//input[@ng-reflect-name='CellPhone'])[2]/ancestor::div[@class='divControl']//span"));
	this.familyPhnNumInputElem = element.all(by.xpath("//input[@ng-reflect-name='PhoneNumber']")); 
	this.smsButtonElem = element.all(by.buttonText('SMS'));
	this.smsPopUpWindowElem = element(by.xpath('//div[@id="SendSmsPopup"]'));
	this.smsPopUpWinHeaderElem = element(by.xpath('//span[@id="SendSmsPopup_wnd_title"]'));
	this.phnFieldSMSPopUpElem = element(by.xpath('//input[@id="smsPopupCell"]'));
	this.smsContentTextboxElem = element(by.xpath('//textarea[@id="messageContent"]'));
	this.sendSMSButtonElem = element(by.xpath('//button[@id="sendSms"]'));
	this.patientEmailInputElem = element(by.xpath("//input[@id='email']"));
	this.pttEmailTooltipElem = element(by.xpath("//input[@id='email']/ancestor::div[@class='divControl']//span"));
	this.resendInviteButtonElem = element(by.xpath("//button[@id='resendPortalInvite']"));
	this.invalidEmailTooltipElem = element(by.xpath("//input[@id='email']/ancestor::div[@class='divControl']//span"));
	this.lastNameInputElem = element(by.xpath("//input[@ng-reflect-name='LastName']"));
	this.lastNameTooltipElem = element(by.xpath("//input[@ng-reflect-name='LastName']/ancestor::div[@class='subDivControl']//span"));
	this.firstNameInputElem = element(by.xpath("//input[@ng-reflect-name='FirstName']"));
	this.firstNameTooltipElem = element(by.xpath("//input[@ng-reflect-name='FirstName']/ancestor::div[@class='subDivControl']//span"));
	this.DOBFieldElem = element(by.xpath("//input[@id='dob']"));
	this.nickNameInputElem = element(by.xpath("//input[@ng-reflect-name='NickName']"));
	this.nickNameTooltipElem = element(by.xpath("//input[@ng-reflect-name='NickName']/ancestor::div[@class='divControl']//span"));
	this.prvLastNameInputElem = element(by.xpath("//input[@ng-reflect-name='PrvLastName']"));
	this.prvLastNameTooltipElem = element(by.xpath("//input[@ng-reflect-name='PrvLastName']/ancestor::div[@class='divControl']//span"));
	this.MIInputElem = element(by.xpath("//input[@id='mi']"));
	this.MITooltipElem = element(by.xpath("//input[@id='mi']/ancestor::div[@class='subDivControlRight']//span"));
	
	//Drop-down elements
	this.genderDrdElem = element(by.xpath("//select[@ng-reflect-name='Gender']"));
	this.genderDrdOptionsElem = element.all(by.xpath("//select[@ng-reflect-name='Gender']//option"));
	this.genderTooltipElem = element(by.xpath("//select[@ng-reflect-name='Gender']//ancestor::div[@class='form-group divWrapper']//span"));
	this.pttType1Elem = element(by.xpath("//select[@ng-reflect-name='PatientType1']"));
	this.pttType1OptionsElem = element.all(by.xpath("//select[@ng-reflect-name='PatientType1']//option"));
	this.pttType1TooltipElem = element(by.xpath("//select[@ng-reflect-name='PatientType1']//ancestor::div[@class='form-group divWrapper']//span"));
	this.pttType2Elem = element(by.xpath("//select[@ng-reflect-name='PatientType2']"));
	this.pttType2OptionsElem = element.all(by.xpath("//select[@ng-reflect-name='PatientType2']//option"));
	this.ccDrdElem = element(by.xpath("//select[@ng-reflect-name='Cc']"));
	this.ccDrdOptionsElem = element.all(by.xpath("//select[@ng-reflect-name='Cc']//option"));
	this.statusDrdElem= element(by.xpath("//select[@ng-reflect-name='Status']"));
	this.statusDrdOptionsElem= element.all(by.xpath("//select[@ng-reflect-name='Status']//option"));
	this.stateDrdElem= element(by.xpath("//select[@ng-reflect-name='State']"));
	this.stateDrdOptionsElem= element.all(by.xpath("//select[@ng-reflect-name='State']//option"));
	this.stateTooltipElem = element(by.xpath("//select[@ng-reflect-name='State']//ancestor::div[@class='form-group divWrapper']//span"));
	this.raceDrdElem = element(by.xpath("//select[@ng-reflect-name='Race']"));
	this.raceDrdOptionsElem = element.all(by.xpath("//select[@ng-reflect-name='Race']//option"));
	this.raceTooltipElem = element(by.xpath("//select[@ng-reflect-name='Race']//ancestor::div[@class='form-group divWrapper']//span"));
	this.ethnicityDrdElem = element(by.xpath("//select[@ng-reflect-name='Ethnicity']"));
	this.ethnicityDrdOptionsElem = element.all(by.xpath("//select[@ng-reflect-name='Ethnicity']//option"));
	this.ethnicityTooltipElem = element(by.xpath("//select[@ng-reflect-name='Ethnicity']//ancestor::div[@class='form-group divWrapper']//span"));
	this.languageDrdElem= element(by.xpath("//select[@ng-reflect-name='Language']"));
	this.languageDrdOptionsElem= element.all(by.xpath("//select[@ng-reflect-name='Language']//option"));
	this.languageTooltipElem = element(by.xpath("//select[@ng-reflect-name='Language']//ancestor::div[@class='form-group divWrapper']//span"));
	this.priPvdDrdElem= element(by.xpath("//select[@ng-reflect-name='Rpp']"));
	this.priPvdDrdOptionsElem= element.all(by.xpath("//select[@ng-reflect-name='Rpp']//option"));
	this.priPvdTooltipElem = element(by.xpath("//select[@ng-reflect-name='Rpp']//ancestor::div[@class='form-group divWrapper']//span"))
	this.secPvdDrdElem= element(by.xpath("//select[@ng-reflect-name='Sp']"));
	this.secPvdDrdOptionsElem= element.all(by.xpath("//select[@ng-reflect-name='Sp']//option"));
	this.refPvdDrdElem= element(by.xpath("//select[@ng-reflect-name='Rp']"));
	this.refPvdDrdOptionsElem= element.all(by.xpath("//select[@ng-reflect-name='Rp']//option"));
	

	
	
	var self = this;

	this.validateAllElementsOfDemographicsAccordion = function(){
		expect(self.patientImgInDemographicsElem).toBeDefined();
		expect(self.demographicsEditButtonElem).toBeDefined();
		this.stateDrdElem.element(by.css('option:checked')).getText().then(function(state){
			expect(state).toEqual(' ALASKA');
		})
		
	}
	
	//ADDRESS VALIDATOR

	this.validateAlphaOrderStateList = function(){
		basePage.sortAndCompareList(self.stateDrdOptionsElem);
	}
	this.inputValidAddress = function() {
		this.add1InputElem.sendKeys(constants.patientAddress[0]);
		this.add2InputElem.sendKeys(constants.patientAddress[1]);
		this.aptInputElem.sendKeys(constants.patientAddress[2]);
		this.cityInputElem.sendKeys(constants.patientAddress[3]);
		this.stateDrdElem.element(by.cssContainingText('option', constants.patientAddress[4])).click();
		this.zipInputElem.sendKeys(constants.patientAddress[5]);
		//this.plus4InputElem.sendKeys(constants.patientAddress[6]);
	}
	this.clearAllAddressFields = function(){
		this.add1InputElem.clear();
		this.add2InputElem.clear();
		this.aptInputElem.clear();
		this.cityInputElem.clear();
		this.zipInputElem.clear();
		//this.plus4InputElem.clear();
		element(by.cssContainingText('option', 'ALASKA')).click();		
	}
	this.validateWZipInput = function(){
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
		this.stateDrdElem.element(by.cssContainingText('option', constants.patientAddress[4])).click();
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
		basePage.clearField(this.zipInputElem);
		/*this.zipInputElem.click().then(function() {
			console.log('clear zip input');
			for(var i=0;i<10;i++){
				browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
			}
		})*/
		//basePage.clearField(this.plus4InputElem);
		/*this.plus4InputElem.click().then(function() {
			console.log('clear +4 input');
			for(var i=0;i<10;i++){
				browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
			}
		})*/
		browser.sleep(4000);
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
		basePage.clearField(this.cityInputElem);
		/*this.cityInputElem.click().then(function() {
			console.log('clear city input');
			for(var i=0;i<10;i++){
				browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
			}
		})*/
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
		this.stateDrdElem.element(by.cssContainingText('option', 'WASHINGTON')).click();
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Address Validated');
			})
		})
		this.stateDrdElem.element(by.css('option:checked')).getText().then(function(state){
			expect(state).toEqual(constants.patientAddress[4]);
		})
		browser.sleep(4000);
	}
	
	this.validateAddressWoZipAndState = function(){
		this.clearAllAddressFields();
		this.inputValidAddress();
		this.stateDrdElem.element(by.cssContainingText('option', 'OHIO')).click();
		browser.sleep(5000);
		basePage.clearField(this.zipInputElem);
		/*this.zipInputElem.click().then(function() {
			console.log('clear zip input');
			for(var i=0;i<10;i++){
				browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
			}
		})*/
		browser.sleep(2000);
		//basePage.clearField(this.plus4InputElem);
		/*this.plus4InputElem.click().then(function() {
			console.log('clear +4 input');
			for(var i=0;i<10;i++){
				browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
			}
		})*/
		//browser.sleep(2000);
		basePage.clearField(this.cityInputElem);
		/*this.cityInputElem.click().then(function() {
			console.log('clear city input');
			for(var i=0;i<10;i++){
				browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
			}
		})*/
		browser.sleep(2000);
		this.validateAddressButtonElem.click();
		this.validatorMsgElem.isDisplayed().then(function() {
			self.validatorMsgElem.getText().then(function(validated) {
				console.log(validated);
				expect(validated).toContain('Invalid Address');
			})
		})
		this.stateDrdElem.element(by.css('option:checked')).getText().then(function(state){
			expect(state).toEqual(' OHIO');
		})
		browser.sleep(4000);
	}
	
	this.verifyAddrs2Blank = function(){
		this.clearAllAddressFields();
		this.inputValidAddress();
		basePage.clearField(this.add2InputElem);		
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
		basePage.clearField(this.aptInputElem);
		/*this.aptInputElem.click().then(function() {
			console.log('clear apt input');
			for(var i=0;i<10;i++){
				browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
			}
		})*/
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
					expect(message).toContain('Enter Cell Phone Number');
				})
			})
			browser.sleep(4000);
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
			browser.sleep(4000);
		})

	}
	
	//RESEND INVITE
	this.validateResendInvite = function(){
		//expect(this.invalidEmailTooltipElem.getAttribute("textContent")).toContain('This is a required field');
		this.message = [];
		this.patientEmailInputElem.sendKeys('abcdefgh');
		expect(this.invalidEmailTooltipElem.getAttribute("textContent")).toContain('Invalid email');
		basePage.clearField(this.patientEmailInputElem);
		this.patientEmailInputElem.sendKeys('bananee.dash@mindfiresolutions.com');
		this.resendInviteButtonElem.click();
		var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.resendInviteInfoElem));
		self.resendInviteInfoElem.getText().then(function(msg) {
				console.log(msg);
				expect(msg).toContain('Sending Email');
				browser.sleep(2000);
		})
		self.resendInviteSuccessElem.isDisplayed().then(function() {
			self.resendInviteSuccessElem.getText().then(function(message1) {
				console.log(message1);
				expect(message1).toContain('Email Sent Successfully');
				browser.sleep(2000);
			})
		})
	}
	
	//FIELD VALIDATIONS
	this.lastNameFieldValidation = function(){
		var lastname = this.lastNameInputElem.getAttribute('value');
		var flag=0;
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		expect(this.lastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		expect(this.lastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		expect(this.lastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.maxCharInput).then(function() {
				//console.log('maximum');
			})
		})
		this.lastNameTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.lastNameInputElem.clear().then(function(){
			self.lastNameInputElem.sendKeys(constants.gtThanMaxCharInput).then(function() {
				//console.log('More than Maximum Chars');
			})
		})
		expect(this.lastNameTooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 35.');
		this.lastNameInputElem.clear().sendKeys(lastname);
	}
	this.firstNameFieldValidation = function(){
		var firstname = this.firstNameInputElem.getAttribute('value');
		var flag=0;
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		expect(this.firstNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		expect(this.firstNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		expect(this.firstNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.maxCharInput).then(function() {
				//console.log('maximum');
			})
		})
		this.firstNameTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.firstNameInputElem.clear().then(function(){
			self.firstNameInputElem.sendKeys(constants.gtThanMaxCharInput).then(function() {
				//console.log('More than Maximum Chars');
			})
		})
		expect(this.firstNameTooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 35.');
		this.firstNameInputElem.clear().sendKeys(firstname);
	}
	
	this.nickNameFieldValidation = function(){
		var nickname = this.nickNameInputElem.getAttribute('value');
		var flag=0;
		this.nickNameInputElem.clear().then(function(){
			self.nickNameInputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		expect(this.nickNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.nickNameInputElem.clear().then(function(){
			self.nickNameInputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		expect(this.nickNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.nickNameInputElem.clear().then(function(){
			self.nickNameInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		expect(this.nickNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.nickNameInputElem.clear().then(function(){
			self.nickNameInputElem.sendKeys('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA').then(function() {
				//console.log('maximum');
			})
		})
		this.nickNameTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.nickNameInputElem.clear().then(function(){
			self.nickNameInputElem.sendKeys('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA').then(function() {
				//console.log('More than Maximum Chars');
			})
		})
		expect(this.nickNameTooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 50.');
		this.nickNameInputElem.clear().sendKeys(nickname);
	}
	this.validatePrvLastName = function(){
		var prvLastname = this.prvLastNameInputElem.getAttribute('value');
		var flag=0;
		this.prvLastNameInputElem.clear().then(function(){
			self.prvLastNameInputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		expect(this.prvLastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.prvLastNameInputElem.clear().then(function(){
			self.prvLastNameInputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		expect(this.prvLastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.prvLastNameInputElem.clear().then(function(){
			self.prvLastNameInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		expect(this.prvLastNameTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.prvLastNameInputElem.clear().then(function(){
			self.prvLastNameInputElem.sendKeys(constants.maxCharInput).then(function() {
				//console.log('maximum');
			})
		})
		this.prvLastNameTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.prvLastNameInputElem.clear().then(function(){
			self.prvLastNameInputElem.sendKeys(constants.gtThanMaxCharInput).then(function() {
				//console.log('More than Maximum Chars');
			})
		})
		expect(this.prvLastNameTooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 35.');
		this.prvLastNameInputElem.clear().sendKeys(prvLastname);
	}
	this.validateMIField = function(){
		var prvLastname = this.MIInputElem.getAttribute('value');
		var flag=0;
		this.MIInputElem.clear().then(function(){
			self.MIInputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		expect(this.MITooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.MIInputElem.clear().then(function(){
			self.MIInputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		expect(this.MITooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.MIInputElem.clear().then(function(){
			self.MIInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		expect(this.MITooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.MIInputElem.clear().then(function(){
			self.MIInputElem.sendKeys(constants.maxCharInput).then(function() {
				//console.log('maximum');
			})
		})
		this.MITooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.MIInputElem.clear().then(function(){
			self.MIInputElem.sendKeys(constants.gtThanMaxCharInput).then(function() {
				//console.log('More than Maximum Chars');
			})
		})
		expect(this.MITooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 35.');
		this.MIInputElem.clear().sendKeys(prvLastname);
	}
	this.validateAddress1Field = function(){
		var add1 = this.add1InputElem.getAttribute('value');
		var flag=0;
		this.add1InputElem.clear().then(function(){
			self.add1InputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		this.add1TooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			console.log('is not displayed');
		})
		this.add1InputElem.clear().then(function(){
			self.add1InputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		this.add1TooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.add1InputElem.clear().then(function(){
			self.add1InputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		this.add1TooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.add1InputElem.clear().then(function(){
			self.add1InputElem.sendKeys(constants.maxCharInput).then(function() {
				//console.log('maximum');
			})
		})
		this.add1TooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.add1InputElem.clear().then(function(){
			self.add1InputElem.sendKeys(constants.gtThanMaxCharInput).then(function() {
				//console.log('More than Maximum Chars');
			})
		})
		expect(this.add1TooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 35.');
		this.add1InputElem.clear().sendKeys(add1);
	}
	this.validateAddress2Field = function(){
		var add2 = this.add2InputElem.getAttribute('value');
		var flag=0;
		this.add2InputElem.clear().then(function(){
			self.add2InputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		this.add2TooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.add2InputElem.clear().then(function(){
			self.add2InputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		this.add2TooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.add2InputElem.clear().then(function(){
			self.add2InputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		this.add2TooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.add2InputElem.clear().then(function(){
			self.add2InputElem.sendKeys(constants.charInput150).then(function() {
				//console.log('maximum');
			})
		})
		this.add2TooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.add2InputElem.clear().then(function(){
			self.add2InputElem.sendKeys(constants.charInput151).then(function() {
				console.log('More than Maximum Chars');
			})
		})
		expect(this.add2TooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 150.');
		this.add2InputElem.clear().sendKeys(add2);
	}
	
	this.validateAPT = function(){
		var apt = this.aptInputElem.getAttribute('value');
		var flag=0;
		this.aptInputElem.clear().then(function(){
			self.aptInputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		expect(this.aptTooltipElem.getAttribute("textContent")).toContain('Special characters are not allowed.');
		this.aptInputElem.clear().then(function(){
			self.aptInputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		this.aptTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.aptInputElem.clear().then(function(){
			self.aptInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		this.aptTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.aptInputElem.clear().then(function(){
			self.aptInputElem.sendKeys('AAAAAAAAAA').then(function() {  //10 chars
				//console.log('maximum');
			})
		})
		this.aptTooltipElem.isDisplayed().then(function() {  //11 chars
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.aptInputElem.clear().then(function(){
			self.aptInputElem.sendKeys('AAAAAAAAAAA').then(function() {
				//console.log('More than Maximum Chars');
			})
		})
		expect(this.aptTooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 10.');
		this.aptInputElem.clear().sendKeys(apt);
	}
	this.validateCityField = function(){
		var city = this.cityInputElem.getAttribute('value');
		var flag=0;
		this.cityInputElem.clear().then(function(){
			self.cityInputElem.sendKeys(constants.splCharInput).then(function() {
				//console.log('Special Char');
			})			
		})
		expect(this.cityTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.cityInputElem.clear().then(function(){
			self.cityInputElem.sendKeys(constants.numericInput).then(function() {
				//console.log('Numeric');
			})
		})
		expect(this.cityTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.cityInputElem.clear().then(function(){
			self.cityInputElem.sendKeys(constants.aphaNumericInput).then(function() {
				//console.log('Alphanumeric');
			})
		})
		expect(this.cityTooltipElem.getAttribute("textContent")).toContain('Digits or special characters are not allowed.');
		this.cityInputElem.clear().then(function(){
			self.cityInputElem.sendKeys(constants.maxCharInput).then(function() {
				//console.log('maximum');
			})
		})
		this.cityTooltipElem.isDisplayed().then(function() {
			expect(flag).toEqual(1);
			//console.log('is displayed');
		},function(){
			expect(flag).toEqual(0);
			//console.log('is not displayed');
		})
		this.cityInputElem.clear().then(function(){
			self.cityInputElem.sendKeys(constants.gtThanMaxCharInput).then(function() {
				//console.log('More than Maximum Chars');
			})
		})
		expect(this.cityTooltipElem.getAttribute("textContent")).toContain('The maximum length of the field is 35.');
		this.cityInputElem.clear().sendKeys(city);
	}
	
	this.demographicsFieldValidation = function(){
		this.lastNameFieldValidation();
		this.firstNameFieldValidation();
		this.validateMIField();
		this.nickNameFieldValidation();
		this.validatePrvLastName();
		this.verifyPhoneFieldFormat();
		this.validateAddress1Field();
		this.validateAddress2Field();
		this.validateAPT();
		this.validateCityField();
	}
	
	this.verifyRequiredFields = function(){
		basePage.clearField(this.lastNameInputElem).then(function(name) {
			expect(self.lastNameTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.lastNameInputElem.sendKeys(name);
		})
		basePage.clearField(this.firstNameInputElem).then(function(name) {
			expect(self.firstNameTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.firstNameInputElem.sendKeys(name);
		})
		basePage.clearField(this.add1InputElem).then(function(add1) {
			expect(self.add1TooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.add1InputElem.sendKeys(add1);
		})
		basePage.clearField(this.cityInputElem).then(function(city) {
			expect(self.cityTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.cityInputElem.sendKeys(city);
		})
		basePage.clearField(this.zipInputElem).then(function(zip) {
			expect(self.zipTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.zipInputElem.sendKeys(zip);
		})
		basePage.clearField(this.patientCellPhnInputElem).then(function(cell) {
			expect(self.pttCellPhnTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.patientCellPhnInputElem.sendKeys(cell);
		})
		basePage.clearField(this.patientEmailInputElem).then(function(email) {
			expect(self.pttEmailTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.patientEmailInputElem.sendKeys(email);
		})
		var opt;
		this.genderDrdElem.element(by.css('option:checked')).getText().then(function(text){
			opt = text;
			console.log(opt);		
			basePage.clearDrd(self.genderDrdOptionsElem);
			expect(self.genderTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.genderDrdElem.element(by.cssContainingText('option', opt)).click();
		})
		this.pttType1Elem.element(by.css('option:checked')).getText().then(function(text){
			opt = text;
			console.log(opt);		
			basePage.clearDrd(self.pttType1OptionsElem);
			expect(self.pttType1TooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.pttType1Elem.element(by.cssContainingText('option', opt)).click();
		})
		this.stateDrdElem.element(by.css('option:checked')).getText().then(function(text){
			opt = text;
			console.log(opt);		
			basePage.clearDrd(self.stateDrdOptionsElem);
			expect(self.stateTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.stateDrdElem.element(by.cssContainingText('option', opt)).click();
		})
		this.raceDrdElem.element(by.css('option:checked')).getText().then(function(text){
			opt = text;
			console.log(opt);		
			basePage.clearDrd(self.raceDrdOptionsElem);
			expect(self.raceTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.raceDrdElem.element(by.cssContainingText('option', opt)).click();
		})
		this.ethnicityDrdElem.element(by.css('option:checked')).getText().then(function(text){
			opt = text;
			console.log(opt);		
			basePage.clearDrd(self.ethnicityDrdOptionsElem);
			expect(self.ethnicityTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.ethnicityDrdElem.element(by.cssContainingText('option', opt)).click();
		})
		this.languageDrdElem.element(by.css('option:checked')).getText().then(function(text){
			opt = text;
			console.log(opt);		
			basePage.clearDrd(self.raceDrdOptionsElem);
			expect(self.languageTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.languageDrdElem.element(by.cssContainingText('option', opt)).click();
		})
		this.priPvdDrdElem.element(by.css('option:checked')).getText().then(function(text){
			opt = text;
			console.log(opt);		
			basePage.clearDrd(self.priPvdDrdOptionsElem);
			expect(self.priPvdTooltipElem.getAttribute("textContent")).toContain('This is a required field');
			self.priPvdDrdElem.element(by.cssContainingText('option', opt)).click();
		})	
	}
	
	/*this.validateDOBField = function(){
		basePage.DOBFieldValidator(self.DOBFieldElem);
	}*/
	
	this.verifyPhoneFieldFormat = function(){
		this.patientHomePhnInputElem.getAttribute('value').then(function(home) {
			basePage.clearField(self.patientHomePhnInputElem);
			self.patientHomePhnInputElem.sendKeys(constants.cellPhoneNumber);
			basePage.verifyPhoneFormat(self.patientHomePhnInputElem,constants.cellPhoneNumber);
			self.patientHomePhnInputElem.sendKeys(home);
		})
		this.patientWorkPhnInputElem.getAttribute('value').then(function(work) {
			basePage.clearField(self.patientWorkPhnInputElem);
			self.patientWorkPhnInputElem.sendKeys(constants.cellPhoneNumber);
			basePage.verifyPhoneFormat(self.patientWorkPhnInputElem,constants.cellPhoneNumber);
			self.patientWorkPhnInputElem.sendKeys(work);
		})
		this.patientCellPhnInputElem.getAttribute('value').then(function(cell) {
			basePage.clearField(self.patientCellPhnInputElem);
			self.patientCellPhnInputElem.sendKeys(constants.cellPhoneNumber);
			basePage.verifyPhoneFormat(self.patientCellPhnInputElem,constants.cellPhoneNumber);
			self.patientCellPhnInputElem.sendKeys(cell);
		})
		this.emergncyCellPhnInputElem.getAttribute('value').then(function(emCell) {
			basePage.clearField(self.emergncyCellPhnInputElem);
			self.emergncyCellPhnInputElem.sendKeys(constants.cellPhoneNumber);
			basePage.verifyPhoneFormat(self.emergncyCellPhnInputElem,constants.cellPhoneNumber);
			self.emergncyCellPhnInputElem.sendKeys(emCell);
		})
		this.familyPhnNumInputElem.each(function(elementLoc,index) {
			elementLoc.getAttribute('value').then(function(fam) {
				basePage.clearField(elementLoc);
				elementLoc.sendKeys(constants.cellPhoneNumber);
				basePage.verifyPhoneFormat(elementLoc,constants.cellPhoneNumber);
				elementLoc.sendKeys(fam);
			})
		})
	}

}
module.exports = new patientDetails();
