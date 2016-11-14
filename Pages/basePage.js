
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
	this.sortAndCompareList = function(listElem,type){
		var i=0;
		var sorted = [], unSorted = [];
		if(type=='element'){
			listElem.each(function(element,index){
				element.getText().then(function(text) {
					unSorted[i]=text;
					i++;
				})		
			}).then(function() {
				sorted = unSorted.slice();
				sorted.sort();
				expect(sorted).toEqual(unSorted);
			})
		}
		else if(type=='text'){
			sorted = listElem.slice();
			sorted.sort();
			expect(sorted).toEqual(listElem);
		}
		else if(type=='date'){
			var date_sort_asc = function (date1, date2) {
				  if (date1 > date2) return 1;
				  if (date1 < date2) return -1;
				  return 0;
				};

			sorted = listElem.slice();
			sorted.sort(date_sort_asc);
			expect(sorted).toEqual(listElem);
		}
		else if(type=='age'){
			sorted = listElem.slice();
			var sortAge = function(age1, age2) {
				var splitAge1 = age1.split(' ');
				var splitAge2 = age2.split(' ');
				if(splitAge1.length == 4){
					if(splitAge2.length==4){
						if(splitAge2[0]==splitAge1[0]){
							return splitAge2[2]-splitAge1[2];
						}
						else{
							return splitAge2[0]-splitAge1[0];
						}
					}
					else if(splitAge2[1]=='Y'){
						return splitAge2[0]-splitAge1[0];
					}
					else
						return -1;
				}
				else{
					if(splitAge1[1]=='Y'){
						if(splitAge2.length==4){
							if(splitAge2[0]==splitAge1[0])
								return 1;
							else{
								return splitAge2[0]-splitAge1[0];
							}
						}
						else{
							if(splitAge2[1]=='Y'){
								return splitAge2[0]-splitAge1[0];
							}
							else
								return -1;
						}
					}
					else{
						if(splitAge2.length==4)
							return 1;
						else{
							if(splitAge2[1]=='M'){
								return splitAge2[0]-splitAge1[0];
							}
							else
								return 1;
						}
					}	
				}
			}
			sorted.sort(sortAge);
			expect(sorted).toEqual(listElem);
		}
		
	}
	
}
module.exports = new basePage();