var basePage = function() {
	
	this.isVisible = function(element) {
		return element.isDisplayed();
	}
	
}

module.exports = new basePage();