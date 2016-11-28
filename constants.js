var constants = function() {
	
	//WELCOME SCREEN Constants
	this.welcomeMessage = 'WELCOME TO ALASKA NEUROLOGY CENTER';
	this.msgBelowWelcomeMsg = 'Please choose an option below to get started.';
	this.actionButtonLabels = ['DME/CPAP','Sleep Lab','MRI Scanner','Infusion Nurse','EEG/EVP Lab','Check-in','Check-out','Triage','Nurse',
	                           'Provider','Prior Authorizations','Benefits','Billing','Cafe','CMA','Medical Records','Referrals Out','Scheduling'];
	this.mainNavLabels = ['PATIENTS','EMR','SCHEDULING','BILLING','INBOX','WIZARD','PRACTICE MANAGEMENT','USERS','SETTINGS'];
	
	//PATIENT SEARCH SCREEN Constants
	this.searchFieldDropdownValues = ['DATE OF BIRTH','EMAIL','FIRST NAME','GENDER','LAST NAME','MARITIAL STATUS','MIDDLE NAME','MRN / CHART #','PATIENT TYPE I','PATIENT TYPE II',
	                                  'SSN'];
	this.searchDefault1 = 'DATE OF BIRTH';
	this.searchDefault2 = 'LAST NAME';
	this.searchDefault3 = 'MRN / CHART #';
	this.DOBInput = '01/05/1963';
	this.patientDOB = '01/05/63';
	this.emailInput = 'bananee.dash@mindfiresolutions.com';
	this.FNInput = 'JOHN';
	this.genderInput = 'FEMALE';
	this.MSInput = 'DIVORCED';
	this.MNInput = 'JUAN';
	this.LNInput = 'FISHER';
	this.MRNInput = '4';
	this.quickSearchInputType1 = 'FN';
	this.quickSearchInputType2 = 'LN';
	this.quickSearchInputType3 = 'MRN';
	this.quickSearchInputType4 = 'DOB';
	this.quickSearchFNInput = 'john';
	this.quickSearchLNInput = 'Mat';
	this.quickSearchMRNInput = '70';
	this.quickSearchDOBInput = '1/5/1963';
	
	//PATIENT HUB SCREEN Constants
	this.patientInfoLabels = [ 'MRN:','DOB:','AGE:','SEX:','ADDRESS:','CELL:','EMAIL:','ATTENDING PROVIDER:','SECONDARY PROVIDER:', 
	                           'PATIENT TYPE 1:','PATIENT TYPE 2:','REFERRING PROVIDER:','PCP PROVIDER:','PHARMACY:' ];
	//this.patientHubLabResultsLabels = ['Labs','Tel Enc','DI','Web Enc','Referrals','Documents','Actions','P2P'];
	//this.patientHubApptDetails = [ 'Last Appointment:', 'Patient Last appt', 'Next Appointment:', 'Patient Next appt', 'Bumped Appointments:', 
	  //                             'Patient Bumped Appts','Facility:', 'Facility Name', 'Facility:', 'Facility Name', 'Case Manager HX:', 'Case Manager' ];
	this.patientHubRightTabsLabels = ['APPOINTMENTS', 'ENCOUNTER', 'EMR', 'RX', 'ACCOUNT', 'ORDERS', 'DOCUMENTS' ];
	
	//Demographics Constants
	this.splCharInput = '@@#$';
	this.numericInput = '8148';
	this.aphaNumericInput = 'ASD7854';
	this.maxCharInput = 'abcdefhijklmnopqrstuvwxyzabcdefhijklmnopqrstuvwxyz';
	this.gtThanMaxCharInput = 'abcdefhijklmnopqrstuvwxyzabcdefhijklmnopqrstuvwxyzz';
	/*this.stateAlphabeticalList = ['-- SELECT --', 'ALABAMA', 'ALASKA', 'AMERICAN SAMOA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT',
	                              'DELAWARE', 'DISTRICT OF COLUMBIA', 'FEDERATED STATES OF MICRONESIA', 'FLORIDA', 'GEORGIA', 'GUAM', 'HAWAII', 'IDAHO', 
	                              'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARSHALL ISLANDS', 'MARYLAND',
	                              'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE',
	                              'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'NORTHERN MARIANA ISLANDS', 'OHIO',
	                              'OKLAHOMA', 'OREGON', 'PALAU', 'PENNSYLVANIA', 'PUERTO RICO', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA',
	                              'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGIN ISLANDS', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN',
	                              'WYOMING' ];*/
	this.patientAddress = ['1950 NE Burnside Rd','Drop at the gate','2C','Gresham',' OREGON','97030','7949'];
	
	this.cellPhoneNumber = '8582217576';
	this.futureDate = '01/02/2020';
	
	//SCHEDULING CONSTANTS
	this.providerTitle = ['Aaron Brooklyn Murphy Neuro-endocrinologist','Adalyn Barry Roberts Vascular neurologist','Allan Donald Price Neuro-infectious diseases',
	                      'Avery Ernest Wood Vascular neurologist','Aria Gordon Wood Neuro-infectious diseases'];
	
	
}

module.exports = new constants;