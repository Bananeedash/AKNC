/**
 * Created by bananee.dash on 5/24/2016.
 */
module.exports = function () {
    this.welcomeMsg = element(by.xpath("//p[@class='cl-name']"));
    this.patients = element(by.className('pts'));
    this.EMR = element(by.className('emr'));
    this.scheduling = element(by.className('sch'));
    this.billing = element(by.className('bill'));
    this.inbox = element(by.className('inb'));
    this.wizard = element(by.className('wiz'));
    this.practiceMgmt = element(by.className('pm'));
    this.users = element(by.className('usr'));
    this.settings = element(by.className('stg'));
    

}
