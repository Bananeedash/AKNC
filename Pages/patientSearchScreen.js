var basePage = require('../Pages/basePage.js');
var patientHubScreen = require('../Pages/patientHubScreen.js');
var moment = require('C:/Users/bananee.dash/node_modules/moment');
var constants = require('../constants.js');

var patientSearchScreen = function() {
	this.goButtonElem = element(by.buttonText('GO'));
	this.advSearchElem = element(by.buttonText('Advanced search'));
	this.resetLinkElem = element(by.buttonText('Reset'));
	this.quickSearchElem = element(by.xpath("//div[@class='title-div']//input"));
	this.quickSearchResultsElem = element.all(by.xpath("//div[@class='title-div']//li"));
	this.drpdwn1Elem = element(by.id('drd1'));
	this.drpdwn1OptionsElem = element.all(by.xpath("//select[@id='drd1']/option"));
	this.drpdwn2Elem = element(by.id('drd2'));
	this.drpdwn2OptionsElem = element.all(by.xpath("//select[@id='drd2']/option"));
	this.drpdwn3Elem = element(by.id('drd3'));
	this.drpdwn3OptionsElem = element.all(by.xpath("//select[@id='drd3']/option"));
	this.drpdwn4Elem = element(by.id('drd4'));
	this.drpdwn4OptionsElem = element.all(by.xpath("//select[@id='drd4']/option"));
	this.drpdwn5Elem = element(by.id('drd5'));
	this.drpdwn5OptionsElem = element.all(by.xpath("//select[@id='drd5']/option"));
	this.drpdwn6Elem = element(by.id('drd6'));
	this.drpdwn6OptionsElem = element.all(by.xpath("//select[@id='drd6']/option"));
	this.searchCriteria1Elem = element(by.xpath("(//div[@class='field-section']//span/input)[1]"));
	this.searchCriteria2Elem = element(by.xpath("(//div[@class='field-section']//span/input)[2]"));
	this.searchCriteria3Elem = element(by.xpath("(//div[@class='field-section']//span/input)[3]"));
	this.searchGridColumElem = element.all(by.xpath("(//div[@id='PatientSearchGrid']/div)[2]//td"));
	this.searchGridRowsElem = element.all(by.xpath("//div[@id='PatientSearchGrid']//tbody/tr"));
	
	var self = this;
	this.checkAllItemsInPtsScrn = function() {
		expect(self.goButtonElem).toBeDefined();
		expect(self.advSearchElem).toBeDefined();
		expect(self.resetLinkElem).toBeDefined();
		expect(self.drpdwn1Elem).toBeDefined();
		
		
	}
	this.validateDefaultOptionsAndCursorDefault = function(){
		expect(self.searchCriteria1Elem.equals(browser.switchTo().activeElement())).toBe(true);
		self.drpdwn1Elem.element(by.css('option:checked')).getText().then(function(drd1Text){
			console.log(drd1Text);
			expect(drd1Text).toEqual(constants.searchDefault1);
		})
		self.drpdwn2Elem.element(by.css('option:checked')).getText().then(function(drd2Text){
			console.log(drd2Text);
			expect(drd2Text).toEqual(constants.searchDefault2);
		})
		self.drpdwn3Elem.element(by.css('option:checked')).getText().then(function(drd3Text){
			console.log(drd3Text);
			expect(drd3Text).toEqual(constants.searchDefault3);
		})
	}
	
	this.validateDrowpdownOptions = function(){
		expect(self.drpdwn1OptionsElem.getText()).toContain(constants.searchDefault1);
		expect(self.drpdwn1OptionsElem.getText()).not.toContain(constants.searchDefault2);
		expect(self.drpdwn1OptionsElem.getText()).not.toContain(constants.searchDefault3);
		expect(self.drpdwn2OptionsElem.getText()).toContain(constants.searchDefault2);
		expect(self.drpdwn2OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(self.drpdwn2OptionsElem.getText()).not.toContain(constants.searchDefault3);
		expect(self.drpdwn3OptionsElem.getText()).toContain(constants.searchDefault3);
		expect(self.drpdwn3OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(self.drpdwn3OptionsElem.getText()).not.toContain(constants.searchDefault2);
	}
	
	this.validateGOButtonWithoutSearchCriteria = function(){
		this.goButtonElem.click();
		expect(this.searchGridRowsElem.count()).toEqual(20);
	}
	
	this.searchWithDOB = function(){
		self.searchCriteria1Elem.sendKeys(constants.DOBInput);
		self.goButtonElem.click();
		expect(self.searchGridColumElem.get(6).getText()).toEqual(constants.patientDOB);
	}
	
	this.searchWithLN = function(){
		self.searchCriteria2Elem.sendKeys(constants.LNInput);
		self.goButtonElem.click();
		expect(self.searchGridColumElem.get(0).getText()).toEqual(constants.LNInput);
	}
	
	this.searchWithMRN = function(){
		self.searchCriteria3Elem.sendKeys(constants.MRNInput);
		self.goButtonElem.click();
		expect(self.searchGridColumElem.get(2).getText()).toEqual(constants.MRNInput);
		expect(self.searchGridRowsElem.count()).toBe(1);
	}
	
	this.clickOnSearchresultNavToPatientHub = function(index){
		this.searchGridRowsElem.get(0).click();
		expect(patientHubScreen.patientImgElem).toBeDefined();
	}
	
	this.resetSearchFields = function(){
		self.resetLinkElem.click();
	}
	this.enableAdvancedSearch = function(){
		self.advSearchElem.click();
	}
	this.disableAdvancedSearch = function(){
		self.advSearchElem.click();
	}
	this.selectOptionInDropdown1 = function (){
		
	}
	this.validateDefaultAdvSrchDropdownOptions = function(){
		expect(self.drpdwn4OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(self.drpdwn4OptionsElem.getText()).not.toContain(constants.searchDefault2);
		expect(self.drpdwn4OptionsElem.getText()).not.toContain(constants.searchDefault3);
		expect(self.drpdwn5OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(self.drpdwn5OptionsElem.getText()).not.toContain(constants.searchDefault2);
		expect(self.drpdwn5OptionsElem.getText()).not.toContain(constants.searchDefault3);
		expect(self.drpdwn6OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(self.drpdwn6OptionsElem.getText()).not.toContain(constants.searchDefault2);
		expect(self.drpdwn6OptionsElem.getText()).not.toContain(constants.searchDefault3);
		
	}
	this.selectOptionInDrdAndVerifyRestDrds = function(dropdownElem,dropdownOptionsElem,dropdownNumber,index){
		dropdownElem.click().then(function(){
			dropdownOptionsElem.get(index).click();
			dropdownOptionsElem.get(index).getText().then(function(option){
				for(var i=1;i<=6;i++){
					var drd = element(by.id('drd"+i+"'));
					var drdOption = element.all(by.xpath("//select[@id='drd"+i+"']/option"));
					if(i!=dropdownNumber){
						expect(drdOption.getText()).not.toContain(option);
					}
					
				}
				
			})
			
		})
	}
	this.searchWithQuickSearch = function(inputType,input,searchResultIndex){
		self.quickSearchElem.sendKeys(input);
		if(inputType==constants.quickSearchInputType1){
			self.quickSearchResultsElem.each(function(element,index) {
				element.getText().then(function(result){
					console.log(index+":"+result);
					expect(result).toContain(basePage.changeToUpperCase(input));					
				})
			})
			self.quickSearchResultsElem.get(searchResultIndex).click();
			expect(patientHubScreen.nameHeaderInPatientHubElem.getText()).toContain(basePage.changeToUpperCase(input));
	
		}
		if(inputType==constants.quickSearchInputType2){
			self.quickSearchResultsElem.each(function(element,index) {
				element.getText().then(function(result){
					console.log(index+":"+result);
					expect(result).toContain(basePage.changeToUpperCase(input));					
				})
			})
			self.quickSearchResultsElem.get(searchResultIndex).click();
			expect(patientHubScreen.nameHeaderInPatientHubElem.getText()).toContain(basePage.changeToUpperCase(input));
	
		}
		if(inputType==constants.quickSearchInputType3){
			self.quickSearchResultsElem.each(function(element,index) {
				element.getText().then(function(result){
					console.log(index+":"+result);					
				})
			})
			self.quickSearchResultsElem.get(searchResultIndex).click();
			expect(patientHubScreen.nameHeaderInPatientHubElem.getText()).toContain(input);
	
		}
		if(inputType==constants.quickSearchInputType4){
			self.quickSearchResultsElem.each(function(element,index) {
				element.getText().then(function(result){
					console.log(index+":"+result);					
				})
			})
			self.quickSearchResultsElem.get(searchResultIndex).click();
			expect(patientHubScreen.patientInfoElem.get(1).getText()).toContain(input);
	
		}
		
		
	}
	
	this.resetLinkFunctionality = function(){
		self.searchCriteria1Elem.sendKeys(constants.DOBInput);
		self.goButtonElem.click();
		self.resetSearchFields();
		expect(self.searchCriteria1Elem.getText()).toBe('');
		self.searchCriteria2Elem.sendKeys(constants.LNInput);
		self.goButtonElem.click();
		self.resetSearchFields();
		expect(self.searchCriteria2Elem.getText()).toBe('');
		self.searchCriteria3Elem.sendKeys(constants.MRNInput);
		self.goButtonElem.click();
		self.resetSearchFields();
		expect(self.searchCriteria3Elem.getText()).toBe('');
		
	}
	
	
	/*this.selectQuickSearchResult = function(index){
		self.quickSearchResultsElem.get(index).click();
	}*/
	
	
}

module.exports = new patientSearchScreen;