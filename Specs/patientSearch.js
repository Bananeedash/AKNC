var basePage = require('../Pages/basePage.js');
var baseSpec = require('../Specs/baseSpec.js');
var constants = require('../constants.js');
var welcomePage = require('../Pages/welcomePage.js');
var patientSearchScreen = require('../Pages/patientSearchScreen.js');

describe('Verify Patient Search functionalities',function(){
	baseSpec.initSetup();
	it('should verify all the elements in Patient Search screen',function(){
		welcomePage.navigateToPatientModule();
		patientSearchScreen.checkAllItemsInPtsScrn();
	})
	it('should verify default options selected in Search field drop-downs and cursor defaul to DOB',function(){
		patientSearchScreen.validateDefaultOptionsAndCursorDefault();
	})
	it('should verify the Search Fields dropdown options',function(){
		patientSearchScreen.validateDrowpdownOptions();
	})
	it('should search with DOB search criteria',function(){
		patientSearchScreen.searchWithDOB();
		patientSearchScreen.resetSearchFields();
	})
	it('should search with Last Name search criteria',function(){
		patientSearchScreen.searchWithLN();
		patientSearchScreen.resetSearchFields();
	})
	it('should search with MRN/Chart# search criteria',function(){
		patientSearchScreen.searchWithMRN();
		patientSearchScreen.resetSearchFields();
	})
	it('should verify dropdown options of Advanced Search fields',function(){
		patientSearchScreen.enableAdvancedSearch();
		patientSearchScreen.validateDefaultAdvSrchDropdownOptions();
		patientSearchScreen.disableAdvancedSearch();
	})
	it('should select an option in a dropdown and verify rest dropdowns',function(){
		patientSearchScreen.enableAdvancedSearch();
		patientSearchScreen.selectOptionInDrdAndVerifyRestDrds(patientSearchScreen.drpdwn2Elem,patientSearchScreen.drpdwn2OptionsElem,2,2);
		patientSearchScreen.disableAdvancedSearch();
	})
	it('should search using quick search bar',function(){
		patientSearchScreen.searchWithQuickSearch(constants.quickSearchInputType1,constants.quickSearchFNInput,2);
		basePage.clearField(patientSearchScreen.quickSearchElem);
		patientSearchScreen.searchWithQuickSearch(constants.quickSearchInputType2,constants.quickSearchLNInput,1);
		basePage.clearField(patientSearchScreen.quickSearchElem);
		patientSearchScreen.searchWithQuickSearch(constants.quickSearchInputType3,constants.quickSearchMRNInput,0);
		basePage.clearField(patientSearchScreen.quickSearchElem);
		patientSearchScreen.searchWithQuickSearch(constants.quickSearchInputType4,constants.quickSearchDOBInput,4);
		basePage.clearField(patientSearchScreen.quickSearchElem);
		
	})
	it('should verify functionality of reset link button',function(){
		patientSearchScreen.resetLinkFunctionality();
	})
	
})