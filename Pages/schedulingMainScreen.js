var basePage = require('../Pages/basePage.js');
var constants = require('../constants.js');

var schedulingMainScreen = function(){
	this.schedulerMenuElem = element(by.xpath("//div//ul[@id='SchedulerMenu']"));
	this.showAllElem = element(by.xpath("(//div//ul[@id='SchedulerMenu']/li)[1]"));
	this.showAllChkBoxElem = element(by.id('allcheck'));
	this.provider1ChkBoxElem = element(by.xpath("(//div//ul[@id='SchedulerMenu']//li)[2]"));
	this.providerChkBoxesElem = element.all(by.xpath("//div//ul[@id='SchedulerMenu']//input"));
	this.providerColumnHeaderElem = element.all(by.xpath("//div//table//th[@class='k-slot-cell']"));
	this.providerInfoLinkElem = element.all(by.xpath("//div/table//a[@class='glyphicon glyphicon-info-sign providerlink']"));
	this.calenderElem = element(by.xpath("//div[@id='calendar']"));
	this.calenderDatesElem = element.all(by.xpath("//div[@id='calendar']//a"));
	this.calenderFooterElement = element(by.xpath("//div[@id='calendar']/div[@class='k-footer']/a"));
	this.calendarHeaderElement = element(by.xpath('(//div[@id="calendar"]/div[@class="k-header"]/a)[2]'));
	this.columnDateHeaderElem = element.all(by.xpath("//span[@class='k-link k-nav-day']"));
	this.schNavTab = element.all(by.xpath('//span[@class="nav-tab-content"]'));
	this.navCloseButtons = element.all(by.xpath("//span[@class='nav-tab-content']/span[@class='t-close']"));
	
	var today = new Date;
	var date = today.getDate();
	var day = basePage.convertToDay(today.getDay());
	var number = today.getMonth();
	var month = basePage.convertToMonth(number);
	var year = today.getFullYear();

	var self = this;
	this.verifyItemsInDailyView = function(){
		expect(this.schedulerMenuElem).toBeDefined();
		expect(this.calenderElem).toBeDefined();
	}

	this.verifyShowAll = function(){
		var EC = protractor.ExpectedConditions;
	    browser.wait(EC.visibilityOf(this.provider1ChkBoxElem));
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
	            			//console.log(name);
	            			count++;
	            		})	
	    		}
	    	})
	    })
	    browser.getCurrentUrl().then(function() {
	    	expect(count).toEqual(5);
	    })
	    
	}
	this.calendaHeaderFooter = function(){
		expect(this.calendarHeaderElement.getText()).toEqual(month+" "+year);
		if(date<10){
			expect(this.calenderFooterElement.getText()).toEqual(day+", "+month+" 0"+date+", "+year);
		}
		else {
			expect(this.calenderFooterElement.getText()).toEqual(day+", "+month+" "+date+", "+year);
		}
		/*this.columnDateHeaderElem.each(function(elem,index) {
			if(date<10){
				expect(elem.getText()).toContain(number+1+"/0"+date);
			}
			else
				expect(elem.getText()).toContain(number+1+"/"+date);
		})*/
	}
	this.navigateToDate = function(){
		var calendarDate;
		var date1;
		if(date>=25){
			date1=date-3;
		}
		else{
			date1=date+3;
		}
		this.calenderDatesElem.each(function(elem,index) {
			elem.getText().then(function(d) {
				//console.log("d:"+d+"  date:"+date1);
				if(d==date1){
					elem.click();/*.then(function(arg0) {
						//console.log('click'+date1);
					})*/
				}	
			})
		})
		expect(this.schNavTab.get(0).getText()).toContain(date1);
	}
	this.checkAProvider = function(nameAbbr){
		this.showAllChkBoxElem.click();
		browser.waitForAngular().then(function() {
			self.providerChkBoxesElem.each(function(elem,index) {
		    	var i=index+1;
		    	if(index !== 0){
		    		element(by.xpath("(//div//ul[@id='SchedulerMenu']/li)["+i+"]")).getText().then(function(name) {
		    				if(nameAbbr===name){
		    					elem.click();
		    					expect(self.providerColumnHeaderElem.get(0).getText()).toContain(name);
		    				}
		            	})	
		    		}
		    })
		})
	}
	this.providerNameDispOnHover = function(){
		var j = 0;
		self.providerChkBoxesElem.each(function(elem,index) {
	    	var i=index+1;
	    	//console.log("i:"+i);
	    	if(index !== 0 && index<=5){
	    		var providerElem = element(by.xpath("(//div//ul[@id='SchedulerMenu']/li)["+i+"]"));
	    		providerElem.getText().then(function(name) {
	    			//console.log("name:"+name);
	    			browser.actions().mouseMove(elem).perform();
	    			expect(providerElem.getAttribute('title')).toContain(constants.providerTitle[j]);
	    			j++;
	    		})
	    	}
		})
	}
	    			
}
module.exports = new schedulingMainScreen();
