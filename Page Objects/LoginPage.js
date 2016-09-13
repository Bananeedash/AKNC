/**
 * Created by bananee.dash on 5/24/2016.
 */

var environment = require('../Environment.json');
var envt = environment.env;
var baseURL = environment.dev.AKNCUrl;
//var userName = (envt == 'dev' ? environment.dev.AKNCusername : environment.staging.AKNCusername);
//var password = (envt == 'dev' ? environment.dev.password : environment.staging.password);
var LoginPage = function () {
    this.getEMR = function () {
        browser.get(baseURL);
//        console.log(userName);
//        console.log(password);
    }
    this.userNameElem = element(by.id('UserName'));
    this.passwordElem = element(by.id('Password'));
    this.loginButtonElem = element(by.buttonText('Login'));
    this.headerLogoElem = element(by.xpath("//app//div/a[@class='logo']"));
    this.loginErrorElem = element(by.id('validationError'));
    this.login = function (username,password) {
        this.userNameElem.sendKeys(username);
        this.passwordElem.sendKeys(password);
        this.loginButtonElem.click();
    }
    

}
 //LoginPage.prototype = environment;
 module.exports = new LoginPage();
