var basePage = require('../Pages/basePage.js');
var constants = require('../constants.js');

var patientHubScreen = function(){
	this.nameheaderCloseElem = element.all("//span[@class='nav-tab-content']/span");
	this.nameHeaderInPatientHubElem = element(by.xpath("//span[@class='nav-tab-content']"));
	this.patientImgElem = element(by.xpath("//div[@class='patientHubLeft']//img[@id='img']"));
	this.patientDetailsLinkElem = element(by.xpath("//div//div[@class='pt-hub-details-link']"));
	this.patientHubNameElem = element(by.xpath("(//section[@class='col-md-12 pt-hub-main-details']//div[@class='col-md-10']/div)[1]"));
	this.patientInfoElem = element.all(by.xpath("(//section[@class='col-md-12 pt-hub-main-details']//div[@class='col-md-6'])//div"));
	this.patientInfoLabelElem = element.all(by.xpath("(//section[@class='col-md-12 pt-hub-main-details']//div[@class='col-md-6'])//label"));
	this.patientBalanceInfoElem = element.all(by.xpath("(//div[@class='patientHubLeft']//section[@class='col-md-12 color-section'])[1]//label"));
	this.patientHubLabResultsLabelsElem = element.all(by.xpath("//div[@class='patientHubLeft']//div[@class='col-md-5 pt-hub-lab-results']//label"));
	this.patientHubApptDetailsElem = element.all(by.xpath("(//div[@class='patientHubLeft']//div[@class='col-md-12'])[2]//label"));
	this.patientHubRightTabsElem = element.all(by.xpath("//div[@class='patientHubRight']//ul[@class='nav nav-tabs']/li"));

	var self=this;

	this.validatePatientNameAndMRN = function(){
		self.patientHubNameElem.getText().then(function(name){
			var splitText = name.split(",");
			var updatedName = splitText[0]+","+splitText[1]
			expect(self.nameHeaderInPatientHubElem.getText()).toContain(basePage.changeToUpperCase(updatedName));
		})
		self.patientInfoElem.get(0).getText().then(function(text){
			var splitText = text.split(" ");
			var MRN = splitText[1];
			expect(self.nameHeaderInPatientHubElem.getText()).toContain(MRN);
		})
		
	}

	this.validateAllItemsInPatientHub = function(){
		expect(self.patientInfoLabelElem.getText()).toEqual(constants.patientInfoLabels);
		expect(basePage.countNumberOfElements(self.patientInfoLabelElem)).toBe(14);
		expect(self.patientBalanceInfoElem.getText()).toContain('PATIENT BALANCE:');
		expect(self.patientBalanceInfoElem.getText()).toContain('ACCOUNT BALANCE:');
		expect(self.patientBalanceInfoElem.getText()).toContain('COLL. BALANCE:');
		expect(self.patientBalanceInfoElem.getText()).toContain('COLLECTION STATUS:');
		expect(self.patientBalanceInfoElem.getText()).toContain('ASSIGNED TO:');
		expect(self.patientHubLabResultsLabelsElem.getText()).toContain('LABS');
		expect(self.patientHubLabResultsLabelsElem.getText()).toContain('TEL ENC');
		expect(self.patientHubLabResultsLabelsElem.getText()).toContain('DI');
		expect(self.patientHubLabResultsLabelsElem.getText()).toContain('WEB ENC');
		expect(self.patientHubLabResultsLabelsElem.getText()).toContain('REFERRALS');
		expect(self.patientHubLabResultsLabelsElem.getText()).toContain('DOCUMENTS');
		expect(self.patientHubLabResultsLabelsElem.getText()).toContain('ACTIONS');
		expect(self.patientHubLabResultsLabelsElem.getText()).toContain('P2P');
		expect(self.patientHubApptDetailsElem.getText()).toContain('LAST APPOINTMENT:');
		expect(self.patientHubApptDetailsElem.getText()).toContain('NEXT APPOINTMENT:');
		expect(self.patientHubApptDetailsElem.getText()).toContain('BUMPED APPOINTMENTS:');
		expect(self.patientHubApptDetailsElem.getText()).toContain('FACILITY:');
		expect(self.patientHubApptDetailsElem.getText()).toContain('FACILITY:');
		expect(self.patientHubApptDetailsElem.getText()).toContain('CASE MANAGER HX:');
		expect(self.patientHubRightTabsElem.getText()).toEqual(constants.patientHubRightTabsLabels);
		expect(basePage.countNumberOfElements(self.patientHubRightTabsElem)).toBe(7);	
	}

	this.navigateToPatientDetails = function(){
		this.patientDetailsLinkElem.click();
		expect(basePage.checkURL('details'));
	}

}
module.exports = new patientHubScreen();