
/**
 * Created by bananee.dash on 5/24/2016.
 */
var loginPage = require('../Pages/loginPage.js');
var welcomePage = require('../Pages/welcomePage.js')
var basePage = require('../Pages/basePage.js');
var environment = require('../Environment.json');
var envt = environment.env;
var userName = (envt == 'dev' ? environment.dev.AKNCusername : (envt == 'qa' ? environment.qa.AKNCusername : environment.staging.AKNCusername));
var password = (envt == 'dev' ? environment.dev.password : (envt == 'qa' ? environment.qa.password : environment.staging.password));

describe('AKNC EMR',function () {

    browser.ignoreSynchronization = true;
    loginPage.getEMR();
    
   
    it('should not allow login with invalid username',function () {
    	
        loginPage.login('xyz',password);
        //expect(loginPage.loginErrorElem).toBeDefined();
        var result = basePage.isVisible(loginPage.loginErrorElem);
        expect(result).toBeTruthy();
        loginPage.clearCredentials();
        
    })
    it('should not allow login with invalid password',function () {

        loginPage.login(userName,'Password123');
        var errorMessage = loginPage.loginErrorElem.getText();
        //expect(loginPage.loginErrorElem).toBeDefined();
        expect(errorMessage).toMatch('Invalid login attempt.');
        loginPage.clearCredentials();

    })
    it('should login successfully',function () {
    	
        loginPage.login(userName,password);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(welcomePage.AKNCLogoElem));
        browser.ignoreSynchronization = false;
        expect(browser.getCurrentUrl()).toEqual('http://akncemr-qa.azurewebsites.net/#/home');
        //expect(loginPage.headerLogoElem).toBe(true);
    })
    
})