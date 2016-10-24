var basePage = require('../Pages/basePage.js');
var constants = require('../constants.js');

this.schedulerMenuElem = element(by.xpath("//div//ul[@id='SchedulerMenu']"));
this.showAllChkBoxElem = element(by.xpath("(//div//ul[@class='comp-scheduler']/li)[1]"));
this.providerChkBoxesElem = element.all(by.xpath("//div//ul[@class='comp-scheduler']/li"));
this.providerColumnHeaderElem = element.all(by.xpath("//div//table//th[@colspan='1']"));
this.providerInfoLinkElem = element.all(by.xpath("//div/table//a[@class='glyphicon glyphicon-info-sign providerlink']"));
this.calenderElem = element(by.xpath("//div/div[@id='calendar']"));
this.todayDateInCalenderElement = element(by.xpath("//div/div//a[@class='k-link k-nav-today']"));