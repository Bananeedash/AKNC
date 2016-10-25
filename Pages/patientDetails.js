var basePage = require('../Pages/basePage.js');
var constants = require('../constants.js');
var patientHubScreen = require('../Pages/patientHubScreen.js'); 

this.headerInPatientDetailsElem = element.all(by.xpath("//div//span[@class='name-header']"));
this.nameheaderCloseElem = element.all(by.xpath("//div//span[@class='name-header']/i"));
this.patientDetailsAccordionsHeadersElem = element.all(by.xpath("//div//h4[@class='panel-title']"));
this.patientImgInDemographicsElem = element(by.xpath("//div/img"));
this.demographicsEditButtonElem = element(by.xpath("//div/button[@id='editDemographics']"));
this.demographicsFieldsElem = element(by.xpath("(//div[@class='col-md-12']//div)[2]"));
this.stateElem = element(by.xpath("(//div[@id='demographicsContainer']//select)[7]"));
this.stateSelectListElem = element.all(by.xpath("(//div[@id='demographicsContainer']//select)[7]/option"));

var self = this;

this.validateAllElementsOfDemographicsAccordion = function(){
	expect(self.patientImgInDemographicsElem).toBeDefined();
	expect(self.demographicsEditButtonElem).toBeDefined();
}

this.validateAlphaOrderStateList = function(){
	var i;
	var count = basePage.countNumberOfElements(self.stateSelectListElem);
	self.stateSelectListElem.get(1).getText().then(function(text){
		console.log(text);
	})
	
}
