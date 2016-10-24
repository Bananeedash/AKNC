var basePage = require('../Pages/basePage.js');
var baseSpec = require('../Specs/baseSpec.js');
var constants = require('../constants.js');
var welcomePage = require('../Pages/welcomePage.js');
var patientSearchScreen = require('../Pages/patientSearchScreen.js');
var patientHubScreen = require('../Pages/patientHubScreen.js');
var patientDetails = require('../Pages/patientDetails.js');

describe('Demographics accordion',function(){
	baseSpec.initSetup();
	it('should have all items',function(){
		welcomePage.navigateToPatientModule();
		patientSearchScreen.searchWithDOB();
		patientSearchScreen.searchGridColumElem.get(1).click();
		patientHubScreen.navigateToPatientDetails();
		patientDetails.validateAllElementsOfDemographicsAccordion();
	})
})