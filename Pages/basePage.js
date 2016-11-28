
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
			fieldLocator.click().then(function() {
			browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform();
			browser.actions().keyUp(protractor.Key.CONTROL).perform();
			browser.sleep(3000);
			console.log('clear field');
			browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
		})
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
		else if(type=='number'){
			var numberSort = function(n1,n2){
				return(n1-n2);
			}
			sorted = listElem.slice();
			sorted.sort(numberSort);
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
	this.convertToMonth = function(number){
		var month;
		if(number===0)
			month = 'JANUARY';
		else if(number===1)
			month = 'FEBRUARY';
		else if(number===2)
			month = 'MARCH';
		else if(number===3)
			month = 'APRIL';
		else if(number===4)
			month = 'MAY';
		else if(number===5)
			month = 'JUNE';
		else if(number===6)
			month = 'JULY';
		else if(number===7)
			month = 'AUGUST';
		else if(number===8)
			month = 'SEPTEMBER';
		else if(number===9)
			month = 'OCTOBER';
		else if(number===10)
			month = 'NOVEMBER';
		else if(number===11)
			month = 'DECEMBER';
		return month;
	}
	this.convertToDay = function(number){
		var day;
		if(number===0)
			day = 'SUNDAY';
		else if(number===1)
			day = 'MONDAY';
		else if(number===2)
			day = 'TUESDAY';
		else if(number===3)
			day = 'WEDNESDAY';
		else if(number===4)
			day = 'THURSDAY';
		else if(number===5)
			day = 'FRIDAY';
		else if(number===6)
			day = 'SATURDAY';
		return day;
	}
	/*this.DOBFieldValidator = function(fieldLoc){
		var date = new Date();
		fieldLoc.sendKeys(constants.futureDate);
		
		
	}*/
}
module.exports = new basePage();