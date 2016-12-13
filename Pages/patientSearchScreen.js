var basePage = require('../Pages/basePage.js');
var welcomePage = require('../Pages/welcomePage.js');
var patientHubScreen = require('../Pages/patientHubScreen.js');
var moment = require('C:/Users/bananee.dash/node_modules/moment');
var constants = require('../constants.js');

var patientSearchScreen = function() {
	this.goButtonElem = element(by.buttonText('GO'));
	this.advSearchElem = element(by.buttonText('Advanced search'));
	this.resetLinkElem = element(by.buttonText('Reset'));
	this.quickSearchElem = element(by.xpath("//div[@class='title-div']//input"));
	this.quickSearchResultsElem = element.all(by.xpath("//div[@class='title-div']//li"));
	this.drddwnElems = element.all(by.xpath("//div[@class='field-section']//select"));
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
	this.searchGridHeaderElem = element.all(by.xpath("//div[@id='PatientSearchGrid']/div//th"));
	this.searchGridRowsElem = element.all(by.xpath("//div[@id='PatientSearchGrid']//tbody/tr"));
	this.inputDrdOptions = element.all(by.xpath("//div[@class='field-section']//span/select[@class='searchTextbox ng-untouched ng-pristine ng-valid']/option"));
	
	
	var self = this;
	this.checkAllItemsInPtsScrn = function() {
		expect(this.goButtonElem).toBeDefined();
		expect(this.advSearchElem).toBeDefined();
		expect(this.resetLinkElem).toBeDefined();
		expect(this.drpdwn1Elem).toBeDefined();
	}
	
	this.verifyOrderOfDrdOptionsList = function(){
		this.enableAdvancedSearch();
		basePage.sortAndCompareList(self.drpdwn1OptionsElem);
		basePage.sortAndCompareList(self.drpdwn2OptionsElem);
		basePage.sortAndCompareList(self.drpdwn3OptionsElem);
		basePage.sortAndCompareList(self.drpdwn4OptionsElem);
		basePage.sortAndCompareList(self.drpdwn5OptionsElem);
		basePage.sortAndCompareList(self.drpdwn6OptionsElem);
		this.disableAdvancedSearch();
	}
	this.validateDefaultOptionsAndCursorDefault = function(){
		expect(this.searchCriteria1Elem.equals(browser.switchTo().activeElement())).toBe(true);
		this.drpdwn1Elem.element(by.css('option:checked')).getText().then(function(drd1Text){
			console.log(drd1Text);
			expect(drd1Text).toEqual(constants.searchDefault1);
		})
		this.drpdwn2Elem.element(by.css('option:checked')).getText().then(function(drd2Text){
			console.log(drd2Text);
			expect(drd2Text).toEqual(constants.searchDefault2);
		})
		this.drpdwn3Elem.element(by.css('option:checked')).getText().then(function(drd3Text){
			console.log(drd3Text);
			expect(drd3Text).toEqual(constants.searchDefault3);
		})
	}
	
	this.validateDrowpdownOptions = function(){
		expect(this.drpdwn1OptionsElem.getText()).toContain(constants.searchDefault1);
		expect(this.drpdwn1OptionsElem.getText()).not.toContain(constants.searchDefault2);
		expect(this.drpdwn1OptionsElem.getText()).not.toContain(constants.searchDefault3);
		expect(this.drpdwn2OptionsElem.getText()).toContain(constants.searchDefault2);
		expect(this.drpdwn2OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(this.drpdwn2OptionsElem.getText()).not.toContain(constants.searchDefault3);
		expect(this.drpdwn3OptionsElem.getText()).toContain(constants.searchDefault3);
		expect(this.drpdwn3OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(this.drpdwn3OptionsElem.getText()).not.toContain(constants.searchDefault2);
	}
	
	this.clickGo = function(){
		this.goButtonElem.click();
	}
	
	this.validateGOButtonWithoutSearchCriteria = function(){
		this.clickGo();
		expect(this.searchGridRowsElem.count()).toEqual(20);
	}
	
	this.searchWithDOB = function(){
		this.searchCriteria1Elem.sendKeys(constants.DOBInput);
		this.goButtonElem.click();
		expect(this.searchGridColumElem.get(6).getText()).toEqual(constants.patientDOB);
	}
	
	this.searchWithLN = function(){
		this.searchCriteria2Elem.sendKeys(constants.LNInput);
		this.goButtonElem.click();
		expect(this.searchGridColumElem.get(0).getText()).toEqual(constants.LNInput);
	}
	
	this.searchWithMRN = function(){
		this.searchCriteria3Elem.sendKeys(constants.MRNInput);
		this.goButtonElem.click();
		expect(this.searchGridColumElem.get(2).getText()).toEqual(constants.MRNInput);
		expect(this.searchGridRowsElem.count()).toBe(1);
	}
	
	this.clickOnSearchresultNavToPatientHub = function(index){
		this.searchGridRowsElem.get(0).click();
		expect(patientHubScreen.patientImgElem).toBeDefined();
	}
	
	this.resetSearchFields = function(){
		this.resetLinkElem.click();
	}
	this.enableAdvancedSearch = function(){
		this.advSearchElem.click();
	}
	this.disableAdvancedSearch = function(){
		this.advSearchElem.click();
	}
	this.searchWithAdvSearchDrd = function (){
		this.enableAdvancedSearch();
		this.inputCriteriaToSearchFields(4,constants.searchFieldDropdownValues[1]);
		this.clickGo();
		expect(this.searchGridRowsElem.count()).not.toBe(0);
		this.resetSearchFields();
		this.disableAdvancedSearch();
	}
	this.validateDefaultAdvSrchDropdownOptions = function(){
		this.enableAdvancedSearch();
		expect(this.drpdwn4OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(this.drpdwn4OptionsElem.getText()).not.toContain(constants.searchDefault2);
		expect(this.drpdwn4OptionsElem.getText()).not.toContain(constants.searchDefault3);
		expect(this.drpdwn5OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(this.drpdwn5OptionsElem.getText()).not.toContain(constants.searchDefault2);
		expect(this.drpdwn5OptionsElem.getText()).not.toContain(constants.searchDefault3);
		expect(this.drpdwn6OptionsElem.getText()).not.toContain(constants.searchDefault1);
		expect(this.drpdwn6OptionsElem.getText()).not.toContain(constants.searchDefault2);
		expect(this.drpdwn6OptionsElem.getText()).not.toContain(constants.searchDefault3);
		this.disableAdvancedSearch();
	}
	this.selectOptionInDrd = function(dropdownElem,dropdownOptionsElem,index){
		dropdownElem.click().then(function(){
			dropdownOptionsElem.get(index).click();
		})
	}
	this.inputCriteriaToSearchFields = function(drdNo,option){
		var i = drdNo;
		this.drd = element(by.id("drd"+i));
		this.drdOption = element.all(by.xpath("//select[@id='drd"+i+"']/option"));
		this.searchInputElem = element(by.xpath("(//div[@class='patient-search-topic']//input)["+i+"]"));
		this.drdOption.each(function(element,index){
			element.getText().then(function(text) {
				if(option==text){
					element.click();
				}
			})
		})
		if(option==constants.searchFieldDropdownValues[0]){
			this.searchInputElem.sendKeys(constants.DOBInput);
		}
		else if(option==constants.searchFieldDropdownValues[1]){
			this.searchInputElem.sendKeys(constants.emailInput);
		}
		else if(option==constants.searchFieldDropdownValues[2]){
			this.searchInputElem.sendKeys(constants.FNInput);
		}
		else if(option==constants.searchFieldDropdownValues[3]){
			this.inputDrdOptions.each(function(element,index){
				element.getText().then(function(text) {
					if(text==constants.genderInput){
						element.click();
					}
				})
			})					
		}
		else if(option==constants.searchFieldDropdownValues[4]){
			this.searchInputElem.sendKeys(constants.LNInput);
		}
		else if(option==constants.searchFieldDropdownValues[5]){
			this.inputDrdOptions.each(function(element,index){
				element.getText().then(function(text) {
					if(text==constants.MSInput){
						element.click();
					}
				})
			})
		}
		else if(option==constants.searchFieldDropdownValues[6]){
			this.searchInputElem.sendKeys(constants.MNInput);
		}
		else if(option==constants.searchFieldDropdownValues[7]){
			this.searchInputElem.sendKeys(constants.MRNInput);
		}
		browser.sleep(3000);
		
	}
	this.selectOptionInDrdAndVerifyRestDrds = function(dropdownElem,dropdownOptionsElem,dropdownNumber,index){
		this.enableAdvancedSearch();
		this.selectOptionInDrd(dropdownElem,dropdownOptionsElem,index);
		dropdownOptionsElem.get(index).getText().then(function(option){
			for(var i=1;i<=6;i++){
				var drd = element(by.id('drd'+i));
				var drdOption = element.all(by.xpath("//select[@id='drd"+i+"']/option"));
				if(i!=dropdownNumber){
					expect(drdOption.getText()).not.toContain(option);
				}
					
			}
				
		})
		this.disableAdvancedSearch();
	}
	
	this.searchWithQuickSearch = function(inputType,input,searchResultIndex){
		this.quickSearchElem.sendKeys(input);
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
		welcomePage.navigateToPatientModule();
		this.resetSearchFields();
		this.searchCriteria1Elem.sendKeys(constants.DOBInput);
		this.goButtonElem.click();
		this.resetSearchFields();
		expect(this.searchCriteria1Elem.getText()).toBe('');
		this.searchCriteria2Elem.sendKeys(constants.LNInput);
		this.goButtonElem.click();
		this.resetSearchFields();
		expect(this.searchCriteria2Elem.getText()).toBe('');
		this.searchCriteria3Elem.sendKeys(constants.MRNInput);
		this.goButtonElem.click();
		this.resetSearchFields();
		expect(this.searchCriteria3Elem.getText()).toBe('');
		
	}
	
	this.validateSortingSearchResults = function(){
		welcomePage.navigateToPatientModule();
		this.resetSearchFields();
		this.validateGOButtonWithoutSearchCriteria();
		var ColumnElem = [];
		this.searchGridHeaderElem.each(function(elem,index){			
			if(index!=10){
				if(index == 2){
					index++;
					elem.click();
					self.searchGridRowsElem.each(function(elem,i){
						var indexRows = i+1;
						element(by.xpath("((//div[@id='PatientSearchGrid']//tbody/tr)["+indexRows+"])/td["+index+"]")).getText().then(function(text){
							ColumnElem[i] = text;
							//console.log(ColumnElem[i]);
						})
					})
					browser.waitForAngular().then(function() {
						basePage.sortAndCompareList(ColumnElem,'number');
					})
				}				
				else if(index == 6){
					index++;
					elem.click();
					self.searchGridRowsElem.each(function(elem,i){
						var indexRows = i+1;
						element(by.xpath("((//div[@id='PatientSearchGrid']//tbody/tr)["+indexRows+"])/td["+index+"]")).getText().then(function(text){
							var date = new Date(text);
							ColumnElem[i] = date;
							//console.log(ColumnElem[i]);
						})
					})
					browser.waitForAngular().then(function() {
						basePage.sortAndCompareList(ColumnElem,'date');
					})
				}
				else if(index == 7){
					index++;
					elem.click();
					self.searchGridRowsElem.each(function(elem,i){
						var indexRows = i+1;
						element(by.xpath("((//div[@id='PatientSearchGrid']//tbody/tr)["+indexRows+"])/td["+index+"]")).getText().then(function(text){
							ColumnElem[i] = text;
							//console.log(ColumnElem[i]);
						})
					})
					browser.waitForAngular().then(function() {
						basePage.sortAndCompareList(ColumnElem,'age');
					})
				}
				else{
					index++;
					elem.click();
					self.searchGridRowsElem.each(function(elem,i){
						var indexRows = i+1;
						element(by.xpath("((//div[@id='PatientSearchGrid']//tbody/tr)["+indexRows+"])/td["+index+"]")).getText().then(function(text){
							ColumnElem[i] = text;
							//console.log(ColumnElem[i]);
						})
					})
					browser.waitForAngular().then(function() {
						basePage.sortAndCompareList(ColumnElem,'text');
					})
				}
				
			}				
		})
	}	
}
module.exports = new patientSearchScreen();