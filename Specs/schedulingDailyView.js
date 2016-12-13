var basePage = require('../Pages/basePage.js');
var baseSpec = require('../Specs/baseSpec.js');
var constants = require('../constants.js');
var welcomePage = require('../Pages/welcomePage.js');
var patientSearchScreen = require('../Pages/patientSearchScreen.js');
var patientHubScreen = require('../Pages/patientHubScreen.js');
var patientDetails = require('../Pages/patientDetails.js');
var schedulingMainScreen = require('../Pages/schedulingMainScreen.js');

describe('Daily view',function(){
	baseSpec.initSetup();
	it('should have all items',function(){
		welcomePage.navigateToSchedulingModule();
		schedulingMainScreen.verifyItemsInDailyView();
	})
	it('should verify show all check box behaviour',function(){
		schedulingMainScreen.verifyShowAll();
		schedulingMainScreen.checkAProvider('AEC');
	})
	it('should verify calendar elements',function(){
		schedulingMainScreen.calendaHeaderFooter();
		schedulingMainScreen.navigateToDate();
	})
	xit('should verify name of provider displayed on hovering on checkboxes',function(){
		schedulingMainScreen.providerNameDispOnHover();
	})
})