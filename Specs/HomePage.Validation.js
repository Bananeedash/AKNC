/**
 * Created by bananee.dash on 5/24/2016.
 */
var homePage = require('D:/Protractor/AKNC/Page Objects/homepage.js');
var loginPage = require('D:/Protractor/AKNC/Page Objects/LoginPage.js');
describe('Home Page',function () {
    browser.ignoreSynchronization = true;
    homePage = new homePage();
    loginPage = new loginPage();

    loginPage.getEMR();
    loginPage.login('alaskauser','Password@123');

        it('should display welcome message',function () {
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(homePage.welcomeMsg));
            homePage.welcomeMsg.getText().then(function (welcomemsg) {
            console.log(welcomemsg);
        })
        browser.ignoreSynchronization = false;
        expect(homePage.welcomeMsg).toBeDefined();

    })
    it('should display Patients',function () {
        expect(homePage.patients).toBeDefined();
    })
    it('should display Scheduling',function () {
        expect(homePage.scheduling).toBeDefined();
    })
    it('should display Billing',function () {
        expect(homePage.billing).toBeDefined();
    })
    it('should display Inbox',function () {
        expect(homePage.inbox).toBeDefined();
    })
    it('should display Wizard',function () {
        expect(homePage.wizard).toBeDefined();
    })
    it('should display Practice Management',function () {
        expect(homePage.practiceMgmt).toBeDefined();
    })
    it('should display Users',function () {
        expect(homePage.users).toBeDefined();
    })
    it('should display Settings',function () {
        expect(homePage.settings).toBeDefined();
    })
    /*it('should validate ')*/
})