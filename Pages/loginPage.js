/**
 * Created by bananee.dash on 5/24/2016.
 */

var environment = require('../Environment.json');
var basePage = require('../Pages/basePage.js');
var envt = environment.env;
var baseURL = (envt == 'dev' ? environment.dev.AKNCUrl : (envt == 'qa' ? environment.qa.AKNCUrl : environment.staging.AKNCUrl));
//var userName = (envt == 'dev' ? environment.dev.AKNCusername : environment.staging.AKNCusername);
//var password = (envt == 'dev' ? environment.dev.password : environment.staging.password);
var loginPage = function () {
      
    this.userNameElem = element(by.id('UserName'));
    this.passwordElem = element(by.id('Password'));
    this.loginButtonElem = element(by.buttonText('Login'));
    //this.headerLogoElem = element(by.xpath("//app//div/a[@class='logo']"));
    this.loginErrorElem = element(by.id('validationError'));
    
    var self = this;
    
    //Load AKNC EMR Application
    this.getEMR = function () {
        browser.get(baseURL);
    }
    
    //Login to AKNC EMR application with username and password
    this.login = function (username,password) {
        self.userNameElem.sendKeys(username);
        self.passwordElem.sendKeys(password);
        self.loginButtonElem.click();
    }
    
    this.clearCredentials = function(){
    	basePage.clearField(self.userNameElem);
    	basePage.clearField(self.passwordElem);
    }
    

}
 //LoginPage.prototype = environment;
 module.exports = new loginPage();
