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
	this.DOBInput = '04/06/2016';
	this.patientDOB = '04/06/16';
	this.LNInput = 'FISHER';
	this.MRNInput = '1011024';
	this.quickSearchInputType1 = 'FN';
	this.quickSearchInputType2 = 'LN';
	this.quickSearchInputType3 = 'MRN';
	this.quickSearchInputType4 = 'DOB';
	this.quickSearchFNInput = 'john';
	this.quickSearchLNInput = 'Mat';
	this.quickSearchMRNInput = '1011070';
	this.quickSearchDOBInput = '4/6/2016';
	
	//PATIENT HUB SCREEN Constants
	this.patientInfoLabels = [ 'MRN:','DOB:','AGE:','SEX:','ADDRESS:','CELL:','EMAIL:','ATTENDING PROVIDER:','SECONDARY PROVIDER:', 
	                           'PATIENT TYPE 1:','PATIENT TYPE 2:','REFERRING PROVIDER:','PCP PROVIDER:','PHARMACY:' ];
	//this.patientHubLabResultsLabels = ['Labs','Tel Enc','DI','Web Enc','Referrals','Documents','Actions','P2P'];
	//this.patientHubApptDetails = [ 'Last Appointment:', 'Patient Last appt', 'Next Appointment:', 'Patient Next appt', 'Bumped Appointments:', 
	  //                             'Patient Bumped Appts','Facility:', 'Facility Name', 'Facility:', 'Facility Name', 'Case Manager HX:', 'Case Manager' ];
	this.patientHubRightTabsLabels = ['APPOINTMENTS', 'ENCOUNTER', 'EMR', 'RX', 'ACCOUNT', 'ORDERS', 'DOCUMENTS' ];
	
	//Demographics Constants
	
	this.stateAlphabeticalList = ['ALABAMA', 'ALASKA', 'AMERICAN SAMOA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT',
	                              'DELAWARE', 'DISTRICT OF COLUMBIA', 'FEDERATED STATES OF MICRONESIA', 'FLORIDA', 'GEORGIA', 'GUAM', 'HAWAII', 'IDAHO', 
	                              'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARSHALL ISLANDS', 'MARYLAND',
	                              'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE',
	                              'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'NORTHERN MARIANA ISLANDS', 'OHIO',
	                              'OKLAHOMA', 'OREGON', 'PALAU', 'PENNSYLVANIA', 'PUERTO RICO', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA',
	                              'TENNESSEE', 'UTAH', 'VERMONT', 'VIRGIN ISLANDS', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN',
	                              'WYOMING', 'TEXAS'];
	
	
	
	
	
	
}

module.exports = new constants;