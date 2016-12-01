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
    	patientDetails.validateAllElementsOfDemographicsAccordion();
    	//patientDetails.demographicsEditButtonElem.click();
	})
	it('should verify the order of state options list',function(){
		patientDetails.validateAlphaOrderStateList();
	})
	xit('should verify all mandatory fields',function(){
		patientDetails.verifyRequiredFields();
	})
	it('should verify that error message is displayed when only zip is input',function(){
		patientDetails.validateWZipInput();
	})
	it('should verify that error message is displayed when zip and respective state is input',function(){
		patientDetails.validateWZipAndStateInput();
	})
	it('should verify that error message is displayed when city, state and respective zip is input',function(){
		patientDetails.validateWCityStateZipInput();
	})
	it('should verify that error message is displayed when both city and zip are left blank',function(){
		patientDetails.validateAddressWoZipAndState();
	})
	it('should verify patient address validator',function(){
		//patientDetails.demographicsEditButtonElem.click();
		patientDetails.verifyAddressValidator();
	})
	it('should verify validator behavior when zip and plus4 fields are left blank',function(){
		patientDetails.verifyAddrsValidatorWithoutZip();
	})
	it('should verify validator behavior when City field is left blank',function(){
		patientDetails.verifyAddrsValidatorWithoutCity();
	})
	it('should verify validator behavior when invalid state is selected',function(){
		patientDetails.verifyAddrsValidatorWithInvState();
	})
	it('should verify Address 2 field can be left blank',function(){
		//patientDetails.demographicsEditButtonElem.click();
		patientDetails.verifyAddrs2Blank();
	})
	it('should verify APT field can be left blank',function(){
		patientDetails.verifyAptBlank();
	})
	it('should verify behaviour of sms pop-up',function(){
		patientDetails.validateSMSPopUp();
	})
	it('should verify behaviour of Resend invite button',function(){
		//patientDetails.demographicsEditButtonElem.click();
		patientDetails.validateResendInvite();
	})
	it('should validate all free input fields',function(){
		//patientDetails.demographicsEditButtonElem.click();
		patientDetails.lastNameFieldValidation();
		patientDetails.firstNameFieldValidation();
		patientDetails.nickNameFieldValidation();
	})
	
	
})