var loginPage = require('../Pages/loginPage.js');
var basePage = require('../Pages/basePage.js');
var environment = require('../Environment.json');
var envt = environment.env;
var userName = (envt == 'dev' ? environment.dev.AKNCusername : (envt == 'qa' ? environment.qa.AKNCusername : environment.staging.AKNCusername));
var password = (envt == 'dev' ? environment.dev.password : (envt == 'qa' ? environment.qa.password : environment.staging.password));

var baseSpec = function() {
	this.initSetup = function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
			loginPage.getEMR();
			loginPage.login(userName,password);
			browser.ignoreSynchronization = false;
		});
		
		afterAll(function() {
			
		});
		beforeEach(function () {
	    	
	    });
		afterEach(function() {
			
		});
	}
}

module.exports = new baseSpec();