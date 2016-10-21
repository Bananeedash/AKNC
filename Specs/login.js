/**
 * Created by bananee.dash on 5/24/2016.
 */
var LoginPage = require('../Pages/LoginPage.js');
var basePage = require('../Pages/basePage.js');
var environment = require('../Environment.json');
var envt = environment.env;
var userName = (envt == 'dev' ? environment.dev.AKNCusername : (envt == 'qa' ? environment.qa.AKNCusername : environment.staging.AKNCusername));
var password = (envt == 'dev' ? environment.dev.password : (envt == 'qa' ? environment.qa.password : environment.staging.password));
describe('AKNC EMR',function () {
    
    //LoginPage = new LoginPage();

	beforeEach(function () {
    	browser.ignoreSynchronization = true;
        LoginPage.getEMR();
    })
    
    afterEach(function() {
    	browser.refresh();
    })
    
    it('should not allow login with invalid username',function () {
    	
        LoginPage.login('xyz',password);
        //expect(LoginPage.loginErrorElem).toBeDefined();
        var result = basePage.isVisible(LoginPage.loginErrorElem);
        expect(result).toBeTruthy();
    })
    it('should not allow login with invalid password',function () {

        LoginPage.login(userName,'Password123');
        var errorMessage = LoginPage.loginErrorElem.getText();
        //expect(LoginPage.loginErrorElem).toBeDefined();
        expect(errorMessage).toMatch('Invalid login attempt.');

    })
    it('should login successfully',function () {
    	
        LoginPage.login(userName,password);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(LoginPage.headerLogoElem));
        browser.ignoreSynchronization = false;
        expect(browser.getCurrentUrl()).toEqual('http://akncemr-qa.azurewebsites.net/#/home');
        //expect(LoginPage.headerLogoElem).toBe(true);
    })
    
})