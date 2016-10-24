var basePage = require('../Pages/basePage.js');
var constants = require('../constants.js');
var patientHubScreen = require('../Pages/patientHubScreen.js'); 

this.headerInPatientDetailsElem = element.all(by.xpath("//div//span[@class='name-header']"));
this.nameheaderCloseElem = element.all(by.xpath("//div//span[@class='name-header']/i"));
this.patientDetailsAccordionsHeadersElem = element.all(by.xpath("//div//h4[@class='panel-title']"));
this.patientImgInDemographicsElem = element(by.xpath("//div/img"));
this.demographicsEditButtonElem = element(by.xpath("//div/button[@id='editDemographics']"));
this.demographicsFieldsElem = element(by.xpath("(//div[@class='col-md-12']//div)[2]"));

var self = this;

this.validateAllElementsOfDemographicsAccordion = function(){
	expect(self.patientImgInDemographicsElem).toBeDefined();
	expect(self.demographicsEditButtonElem).toBeDefined();
}
