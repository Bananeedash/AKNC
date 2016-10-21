
var moment = require('C:/Users/bananee.dash/node_modules/moment');
var basePage = function() {
	
	this.isVisible = function(element) {
		return element.isDisplayed();
	}
	
	this.compareDate = function(actualDate,format) {
		var expectedDate = moment().format(format)
		if(actualDate == expectedDate){
			return true;
		}
		else
			return false;
			
	}
	this.checkURL = function(expectedText) {
		var currentURL = browser.getCurrentUrl();
    	expect(currentURL).toContain(expectedText);
	}
	this.changeToUpperCase = function(text){
		return text.toUpperCase();
	}
	this.countNumberOfElements = function(elemLocator){
		return elemLocator.count();
	}
	this.clearField = function(fieldLocator){
		fieldLocator.clear();
	}
}

module.exports = new basePage();