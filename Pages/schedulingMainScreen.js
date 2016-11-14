var basePage = require('../Pages/basePage.js');
var constants = require('../constants.js');

var schedulingMainScreen = function(){
	this.schedulerMenuElem = element(by.xpath("//div//ul[@id='SchedulerMenu']"));
	this.showAllElem = element(by.xpath("(//div//ul[@id='SchedulerMenu']/li)[1]"));
	this.showAllChkBoxElem = element(by.id('allcheck'));

	this.providerChkBoxesElem = element.all(by.xpath("//div//ul[@id='SchedulerMenu']//input"));
	this.providerColumnHeaderElem = element.all(by.xpath("//div//table//th[@class='k-slot-cell']"));
	this.providerInfoLinkElem = element.all(by.xpath("//div/table//a[@class='glyphicon glyphicon-info-sign providerlink']"));
	this.calenderElem = element(by.xpath("//div/div[@id='calendar']"));
	this.todayDateInCalenderElement = element(by.xpath("//div/div//a[@class='k-link k-nav-today']"));

	var self = this;
	this.verifyItemsInDailyView = function(){
		expect(this.schedulerMenuElem).toBeDefined();
		expect(this.calenderElem).toBeDefined();
	}

	this.verifyShowAll = function(){
		var EC = protractor.ExpectedConditions;
	    browser.wait(EC.visibilityOf(this.showAllChkBoxElem));
	    expect(this.showAllElem.getText()).toEqual('SHOW ALL');
	    browser.sleep(3000);
	    this.showAllChkBoxElem.click();
	    var count = 0;
	    var j=0;
	    var provider = [];
	    var providerName = [];
	    this.providerChkBoxesElem.each(function(elem,index) {
	    	elem.isSelected().then(function(select) {
	    		var i=index+1;
	    		if(select && index !== 0){
	    			element(by.xpath("(//div//ul[@id='SchedulerMenu']/li)["+i+"]")).getText().then(function(name) {
	    					expect(self.providerColumnHeaderElem.get(count).getText()).toContain(name);
	            			console.log(name);
	            			count++;
	            		})	
	    		}
	    	})
	    })
	    browser.getCurrentUrl().then(function() {
	    	expect(count).toEqual(5);
	    })
	    
	}
}
module.exports = new schedulingMainScreen();
