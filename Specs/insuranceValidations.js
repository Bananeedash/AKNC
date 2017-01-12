var basePage = require('../Pages/basePage.js');
var baseSpec = require('../Specs/baseSpec.js');
var constants = require('../constants.js');
var welcomePage = require('../Pages/welcomePage.js');
var patientSearchScreen = require('../Pages/patientSearchScreen.js');
var patientHubScreen = require('../Pages/patientHubScreen.js');
var patientDetails = require('../Pages/patientDetails.js');

describe('Insurance accordion',function(){
	baseSpec.initSetup();
	
	it('should have all sections',function(){
		welcomePage.navigateToPatientModule();
		patientSearchScreen.searchWithDOB();
		patientSearchScreen.searchGridRowsElem.get(0).click();
		patientHubScreen.navigateToPatientDetails();
		patientDetails.verifyInsSections();
	})
	it('should validate all fields',function(){
		patientDetails.validatePlanDedField();
		patientDetails.validateMaxOopField();
		patientDetails.validateCoPayField();
		patientDetails.validatePolicyHolderField();
		patientDetails.validateCoInsField();
	})
})