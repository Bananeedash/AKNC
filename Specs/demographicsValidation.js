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
		patientSearchScreen.searchGridRowsElem.get(0).click();
		patientHubScreen.navigateToPatientDetails();
		patientDetails.validateAccordionHeaders();
    	patientDetails.validateAllElementsOfDemographicsAccordion();
    	patientDetails.demographicsEditButtonElem.click();
	})
	xit('should verify the order of state options list',function(){
		patientDetails.validateAlphaOrderStateList();
	})
	xit('should verify all mandatory fields',function(){
		patientDetails.verifyRequiredFields();
	})
	xit('should verify that error message is displayed when only zip is input',function(){
		patientDetails.validateWZipInput();
	})
	xit('should verify that error message is displayed when zip and respective state is input',function(){
		patientDetails.validateWZipAndStateInput();
	})
	xit('should verify that error message is displayed when city, state and respective zip is input',function(){
		patientDetails.validateWCityStateZipInput();
	})
	xit('should verify that error message is displayed when both city and zip are left blank',function(){
		patientDetails.validateAddressWoZipAndState();
	})
	xit('should verify patient address validator',function(){
		patientDetails.verifyAddressValidator();
	})
	xit('should verify validator behavior when zip and plus4 fields are left blank',function(){
		patientDetails.verifyAddrsValidatorWithoutZip();
	})
	xit('should verify validator behavior when City field is left blank',function(){
		patientDetails.verifyAddrsValidatorWithoutCity();
	})
	xit('should verify validator behavior when invalid state is selected',function(){
		patientDetails.verifyAddrsValidatorWithInvState();
	})
	xit('should verify Address 2 field can be left blank',function(){
		patientDetails.verifyAddrs2Blank();
	})
	xit('should verify APT field can be left blank',function(){
		patientDetails.verifyAptBlank();
	})
	xit('should verify behaviour of sms pop-up',function(){
		patientDetails.validateSMSPopUp();
	})
	xit('should verify behaviour of Resend invite button',function(){
		patientDetails.validateResendInvite();
	})
	xit('should validate all free input fields',function(){
		patientDetails.demographicsFieldValidation();	
		
	})
	
	
})