var basePage = require('../Pages/basePage.js');
var baseSpec = require('../Specs/baseSpec.js');
var constants = require('../constants.js');
var welcomePage = require('../Pages/welcomePage.js');
var patientSearchScreen = require('../Pages/patientSearchScreen.js');
var patientHubScreen = require('../Pages/patientHubScreen.js');

describe('Verify patient hub details',function(){
	baseSpec.initSetup();
	it('should validate patient name',function(){
		welcomePage.navigateToPatientModule();
		patientSearchScreen.searchWithDOB();
		patientSearchScreen.searchGridColumElem.get(1).click();
		patientHubScreen.validatePatientNameAndMRN();
	})
	it('should validate all items in patient hub',function(){
		patientHubScreen.validateAllItemsInPatientHub();
	})
	xit('should click on Patient details link and navigate to patient details screen',function(){
		patientHubScreen.navigateToPatientDetails();
	})
})