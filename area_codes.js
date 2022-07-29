//Objects for Area/Country Codes
var usCodes = [

	{
		name: 'AST',
		dst: true,
		offset: (-4),
		codes: ["441", "Bermuda", "506", "New Brunswick", "782", "Nova Scotia", "902", "Nova Scotia"]
	},

	{
		name: 'AST',
		dst: false,
		offset: (-4),
		codes: ["758", "Saint Lucia", "246", "Barbados", "264", "Anguilla", "268", "Antigua and Barbuda", "284", "British Virgin Islands", "340", "U.S. Virgin Islands", "473", "Grenada", "664", "Montserrat", "721", "Sint Maarten", "767", "Dominica", "784", "Saint Vincent & the Grenadines", "787", "Puerto Rico", "868", "Trinidad and Tobago", "869", "Saint Kitts & Nevis", "939", "Puerto Rico"]
	},

	{
		name: 'NST',
		dst: true,
		offset: (-3.5),
		codes: ["709", "Newfoundland"]
	},

	{
		name: 'EST',
		dst: true,
		offset: (-5),
		codes: ["463", "Indianapolis, IN", "934", "Suffolk, NY", "548", "Toronto, ON", "743", "Greensboro, NC", "854", "Charleston, SC", "380", "Columbus, OH", "220", "Columbus, OH", "930", "Evansville, IN", "201", "Newark, NJ", "202", "Washington, DC", "203", "New Haven, CT", "207", "Portland, ME", "212", "New York, NY", "215", "Philadelphia, PA", "216", "Cleveland, OH", "223", "Lancaster, PA", "226", "Elora, ON", "229", "Albany, GA", "231", "Muskegon, MI", "234", "Akron, OH", "239", "Fort Meyers, FL", "240", "Baltimore, MD", "242", "Bahamas", "248", "Detroit, MI", "249", "Algoma Mills, ON", "252", "Greenville, NC", "260", "Fort Wayne, IN", "263", "Montreal, QC", "267", "Philadelphia, PA", "269", "Kalamazoo, MI", "272", "Lake Ariel, PA", "276", "Martinsville, VA", "283", "Cincinnati, OH", "289", "Mount Albert, ON", "301", "Baltimore, MD", "302", "Wilmington, DE", "304", "Charleston, WV", "305", "Miami, FL", "313", "Detroit, MI", "315", "Syracuse, NY", "317", "Indianapolis, IN", "321", "Orlando, FL", "326", "Dayton, OH", "329", "Poughkeepsie, NY", "330", "Akron, OH", "332", "New York, NY", "336", "Greensboro, NC", "339", "Boston, MA", "343", "Northbrook, ON", "347", "Brooklyn, NY", "351", "Danvers, MA", "352", "Gainesville, FL", "363", "Hempstead, NY", "354", "Granby, QC", "365", "Bradford, ON", "367", "Quebec City, QC", "382", "London, ON", "386", "Daytona Beach, FL", "401", "Providence, RI", "404", "Atlanta, GA", "407", "Orlando, FL", "410", "Baltimore, MD", "412", "Pittsburgh, PA", "413", "Springfield, MA", "416", "Toronto, ON", "418", "Chambord, QC", "419", "Toledo, OH", "434", "Lynchburg, VA", "437", "Toronto, ON", "438", "Montreal, QC", "440", "Cleveland, OH", "443", "Baltimore, MD", "445", "Philadelphia, PA", "450", "Saint Remi, QC", "468", "Sherbrooke, QC", "470", "Atlanta, GA", "472", "Fayetteville, NC", "475", "New Haven, CT", "478", "Macon, GA", "428", "Moncton, NB", "484", "Philadelphia, PA", "502", "Louisville, KY", "508", "Boston, MA", "513", "Cincinnati, OH", "514", "Montreal, QC", "516", "Springfield Gardens, NY", "517", "Lansing, MI", "518", "Schenectady, NY", "519", "Harriston, ON", "540", "Fredericksburg, VA", "551", "Newark, NJ", "561", "West Palm Beach, FL", "567", "Toledo, OH", "570", "Wilkes Barre, PA", "571", "Alexandria, VA", "579", "Saint Rosalie, QC", "581", "Baie Johan Beetz, QC", "582", "Erie, PA", "585", "Buffalo, NY", "586", "Detroit, MI", "603", "Manchester, NH", "607", "Freeville, NY", "609", "Camden, NJ", "610", "Philadelphia, PA", "613", "Clarence Creek, ON", "614", "Columbus, OH", "616", "Grand Rapids, MI", "617", "Boston, MA", "631", "Deer Park, NY", "640", "Trenton, NJ", "645", "Miami, FL", "646", "Brooklyn, NY", "647", "Toronto, ON", "656", "Tampa, FL", "658", "Jamaica", "649", "Turks and Caicos Islands", "667", "Baltimore, MD", "678", "Atlanta, GA", "680", "Syracuse, NY", "681", "Charleston, WV", "683", "Sudbury, ON", "689", "Orlando, FL", "703", "Alexandria, VA", "704", "Charlotte, NC", "705", "Kapuskasing, ON", "706", "Augusta, GA", "716", "Buffalo, NY", "717", "Lancaster, PA", "718", "Brooklyn, NY", "724", "Pittsburgh, PA", "727","Tampa, FL", "728", "West Palm Beach, FL", "732", "Newark, NJ", "734", "Detroit, MI", "740", "Columbus, OH", "742", "Hamilton, ON", "753", "Northbrook, ON", "754", "Fort Lauderdale, FL", "757", "Virginia Beach, VA", "762", "Augusta, GA", "765", "Indianapolis, IN", "770", "Atlanta, GA", "771", "Washington, DC", "772", "Port Saint Lucie, FL", "774", "Boston, MA", "781", "Boston, MA", "786", "Miami, FL", "802", "Shelburne, VT", "803", "Columbia, SC", "804", "Richmond, VA", "809", "Dominican Republic", "810", "Flint, MI", "813", "Tampa, FL", "814", "Erie, PA", "819", "Gatineau, QC", "826", "Roanoke, VA", "828", "Asheville, NC", "829", "Dominican Republic", "835", "Allentown, PA", "838", "Albany, NY", "839", "Columbia, SC", "843", "Charleston, SC", "845", "Poughkeepsie, NY", "848", "Newark, NJ", "849", "Dominican Republic", "856", "Camden, NJ", "857", "Boston, MA", "859", "Lexington, KY", "860", "Hartford, CT", "862", "Newark, NJ", "863", "Kissimmee, FL", "864", "Greenville, SC", "865", "Knoxville, TN", "873", "Lannoncatn, QC", "876", "Jamaica", "878", "Pittsburgh, PA", "904", "Jacksonville, FL", "905", "Palgrave, ON", "908", "Newark, NJ", "910", "Fayetteville, NC", "912", "Savannah, GA", "914", "Manhattan, NY", "917", "Brooklyn, NY", "919", "Raleigh, NC", "929", "Brooklyn, NY", "937", "Dayton, OH", "941", "Sarasota, FL", "943", "Atlanta, GA", "947", "Southfield, MI", "948", "Virginia Beach, VA", "954", "Fort Lauderdale, FL", "959", "Hartford, CT", "973", "Newark, NJ", "978", "Boston, MA", "980", "Charlotte, NC", "984", "Raleigh, NC", "989", "Saginaw, MI"]
	},

	{
		name: 'EST',
		dst: false,
		offset: (-5),
		codes: ["345", "Cayman Islands"]
	},

	{ //Arizona Times
		name: 'MST',
		dst: false,
		offset: (-7),
		codes: ["602", "Phoenix, AZ", "520", "Phoenix, AZ", "480", "Phoenix, AZ", "623", "Phoenix, AZ", "928", "Phoenix, AZ"]
	},

	{
		name: 'CST',
		dst: true,
		offset: (-6),
		codes: ["726", "San Antonio, TX","737", "Austin, TX", "204", "Strathclair, MB", "205", "Birmingham, AL", "210", "San Antonio, TX", "214", "Dallas, TX", "217", "Chicago, IL", "218", "Duluth, MN", "224", "Chicago, IL", "225", "Baton Rouge, LA", "228", "Gulfport, MS", "251", "Mobile, AL", "254", "Killeen, TX", "256", "Hunstville, AL", "262", "Milwaukee, WI", "274", "Green Bay, WI", "281", "Houston, TX", "306", "Gravelborg, SK", "309", "Peoria, IL", "312", "Chicago, IL", "314", "Saint Louis, MO", "316", "Wichita, KS", "318", "Shreveport, LA", "319", "Cedar Rapids, IA", "320", "Saint Cloud, MN", "325", "Abilene, TX", "327", "Jonesboro, AR", "331", "Lemont, IL", "334", "Montgomery, AL", "337", "Lafayette, LA", "346", "Houston, TX", "361", "Corpus Christi, TX", "402", "Omaha, NE", "405", "Oklahoma City, OK", "409", "Beaumont, TX", "414", "Milwaukee, WI", "417", "Springfield, MO", "430", "Longview, TX", "431", "Killarney, MB", "432", "Midland, TX", "447", "Springfield, IL", "464", "Chicago, IL", "469", "Dallas, TX", "474", "Saskatoon, SK", "479", "Springdale, AR", "501", "Little Rock, AR", "504", "New Orleans, LA", "507", "Rochester, MN", "512", "Austin, TX", "515", "Des Moines, IA", "531", "Lincoln, NE", "534", "Chippewa Falls, WI", "539", "Tulsa, OK", "557", "Saint Louis, MO", "563", "Davenport, IA", "572", "Oklahoma City, OK", "573", "Columbia, MO", "580", "Oklahoma City, OK", "584", "Winnipeg, MB", "601", "Jackson, MS", "608", "Madison, WI", "612", "Minneapolis, MN", "615", "Nashville, TN", "629", "Nashville, TN", "618", "Belleville, IL", "625", "Nashville, TN", "630", "Chicago, IL", "636", "Saint Louis, MO", "639", "Saskatoon, SK", "641", "Beaman, IA", "651", "Minneapolis, MN", "659", "Birmingham, AL", "660", "Otterville, MO", "662", "Southaven, MS", "682", "Dallas, TX", "708", "Chicago, IL", "712", "Sioux City, IA", "713", "Houston, TX", "715", "Green Bay, WI", "726", "San Antonio, TX", "731", "Jackson, TN", "763", "Minneapolis, MN", "769", "Jackson, MS", "773", "Chicago, IL", "779", "Rockford, IL", "806", "Lubbock, TX", "815", "Chicago, IL", "816", "Kansas City, MO", "817", "Dallas, TX", "830", "New Braunfels, TX", "832", "Houston, TX", "847", "Chicago, IL", "861", "Peoria, IL", "870", "Jonesboro, AR", "872", "Chicago, IL", "901", "Memphis, TN", "903", "Tyler, TX", "913", "Kansas City, KS", "918", "Tulsa, OK", "920", "Milwaukee, WI", "936", "Conroe, TX", "938", "Goodwater, AL", "940", "Denton, TX", "945", "Dallas, TX", "952", "Minneapolis, MN", "956", "Laredo, TX", "972", "Dallas, TX", "975", "Kansas City, MO", "979", "College Station, TX", "985", "New Orleans, LA"]
	},

	{
		name: 'MST',
		dst: true,
		offset: (-7),
		codes: ["825", "Edmonton, Alberta", "303", "Denver, CO", "307", "Casper, WY", "368", "Edmonton, Alberta", "385", "Salt Lake City, UT", "403", "Gadsby, Alberta", "406", "Billings, MT", "435", "Park City, UT", "505", "Albuquerque, NM", "575", "Las Cruces, NM", "587", "Fahler, Alberta", "719", "Colorado Springs, CO", "720", "Denver, CO", "780", "Beaver Lodge, Alberta", "801", "Salt Lake City, UT", "970", "Fort Collins, CO", "983", "Denver, CO"]
	},


	{
		name: 'MST/CST',
		dst: true,
		offset: [(-6), (-7)],
		codes: ["915", "El Paso, TX", "308", "Grand Island, NE", "605", "Sioux Falls, SD", "620", "Hutchinson, KS", "701", "Fargo, ND", "785", "Topeka, KS", "867", "Pont Inlet, NT"]
	},

	{
		name: 'CST/EST',
		dst: true,
		offset: [(-5), (-6)],
		codes: ["219", "Valparaiso, IN", "270", "Bowling Green, KY", "364", "Bowling Green, KY", "448", "Pensacola, FL", "807", "Manitouwadge, ON", "812", "Evansville, IN", "850", "Pensacola, FL", "931", "Clarksville, TN", "423", "Chattanooga, TN", "574", "South Bend, IN", "606", "Sharpsburg, KY", "906", "Deerton, MI"]
	},

	{
		name: 'PST/MST',
		dst: true,
		offset: [(-7), (-8)],
		codes: ["208", "Boise, ID", "458", "Eugene, OR", "541", "Eugene, OR", "986", "Boise, ID"]
	},

	{
		name: 'PST',
		dst: true,
		offset: (-8),
		codes: ["778", "Vancouver, BC", "628", "San Francisco, CA", "206", "Seattle, WA", "209", "Fresno, CA", "213", "Los Angeles, CA", "236", "Victoria, BC", "250", "Mcleese Lake, BC", "253", "Seattle, WA", "279", "Sacramento, CA", "310", "Los Angeles, CA", "323", "Los Angeles, CA", "341", "Oakland, CA", "350", "Fresno, CA", "360", "Seattle, WA", "408", "San Jose, CA", "415", "San Francisco, CA", "424", "Los Angeles, CA", "425", "Seattle, WA", "442", "Victorville, CA", "503", "Portland, OR", "509", "Spokane, WA", "510", "San Jose, CA", "530", "Sacramento, CA", "559", "Fresno, CA", "562", "Los Angeles, CA", "564", "Seattle, WA", "604", "Mission, BC", "619", "San Diego, CA", "626", "Los Angeles, CA", "650", "San Jose, CA", "657", "Long Beach, CA", "661", "Bakersfield, CA", "669", "San Jose, CA", "672", "Vancouver, BC", "702", "Las Vegas, NV", "707", "Santa Rosa, CA", "714", "Long Beach, CA", "725", "Las Vegas, NV", "747", "Los Angeles, CA", "760", "San Diego, CA", "775", "Reno, NV", "778", "Wellington, BC", "805", "Bakersfield, CA", "818", "Los Angeles, CA", "820", "Bakersfield, CA", "831", "Salinas, CA", "840", "San Bernardino, CA", "858", "San Diego, CA", "909", "Riverside, CA", "916", "Sacramento, CA", "925", "Oakland, CA", "949", "Santa Ana, CA", "951", "Riverside, CA", "971", "Portland, OR"]
	},

	{
		name: 'SST',
		dst: false,
		offset: (-11),
		codes: ["684", "American Samoa"]
	},

	{
		name: 'HAST',
		dst: false,
		offset: (-10),
		codes: ["808", "Hawaii"]
	},

	{
		name: 'Chamorro Standard Time',
		dst: false,
		offset: (10),
		codes: ["670", "Common Wealth of the Northern Mariana Islands"]
	},

	{
		name: 'GUAM',
		dst: false,
		offset: (10),
		codes: ["671", "Guam"]
	},

	{
		name: 'AKST',
		dst: true,
		offset: (-9),
		codes: ["907", "Juneau"]
	},

	{ //Keep as Last Index
		name: "Toll Free or Other",
		dst: false,
		offset: false,
		codes: ["911", "456", "500", "521", "523", "524", "525", "526", "527", "528", "533", "544", "566", "577", "600", "700", "710", "800", "844", "855", "866", "877", "833", "888", "900"]
	}
];


var canadaCodes = ["403", "587", "780", "825", "250", "778", "236", "604", "204", "431", "506", "709", "867", "902", "782", "416", "647", "437", "519", "226", "548", "613", "343", "705", "249", "807", "905", "289", "365", "418", "581", "450", "579", "514", "438", "819", "873", "306", "639", "382", "428", "584", "263", "354", "468", "683", "368", "753", "742", "367", "474", "672"];


//Country Codes
var countryCodes = [

	{
		name: 'Georgia',
		code: '7840',
		capital: 'Abkhazia',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Georgia',
		code: '7940',
		capital: 'Abkhazia',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Afghanistan',
		code: '93',
		capital: 'Kabul',
		offset: (4.5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Åland Islands',
		code: '35818',
		capital: 'Mariehamn',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Albania',
		code: '355',
		capital: 'Tirana',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Algeria',
		code: '213',
		capital: 'Algiers',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'American Samoa',
		code: '1684',
		capital: 'Pago Pago',
		offset: (-11),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Andorra',
		code: '376',
		capital: 'Andorra la Vella',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Angola',
		code: '244',
		capital: 'Luanda',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Anguilla',
		code: '1264',
		capital: 'The Valley',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Antigua and Barbuda',
		code: '1268',
		capital: "St. John's",
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Argentina',
		code: '54',
		capital: 'Buenos Aires',
		offset: (-3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Armenia',
		code: '374',
		capital: 'Yerevan',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Aruba',
		code: '297',
		capital: 'Oranjestad',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Ascension',
		code: '247',
		capital: 'Georgetown, Ascension Island',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Australia',
		code: '61',
		capital: 'Canberra',
		offset: (10),
		dst: true,
		start_month: 9,
		start_week: 1,
		start_offset: false,
		start_day: 0,
		end_month: 3,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Austria',
		code: '43',
		capital: 'Vienna',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Azerbaijan',
		code: '994',
		capital: 'Baku',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Bahamas',
		code: '1242',
		capital: 'Nassau',
		offset: (-5),
		dst: true,
		start_month: 2,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 10,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Bahrain',
		code: '973',
		capital: 'Manama',
		offset: (-3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Bangladesh',
		code: '880',
		capital: 'Dhaka',
		offset: (6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Barbados',
		code: '1246',
		capital: 'Bridgetown',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Caribbean',
		code: '1268',
		capital: 'Barbuda',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Belarus',
		code: '375',
		capital: 'Minsk',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Belgium',
		code: '32',
		capital: 'City of Brussels',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Belize',
		code: '501',
		capital: 'Belmopan',
		offset: (-6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Benin',
		code: '229',
		capital: 'Porto-Novo',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Bermuda',
		code: '1441',
		capital: 'Hamilton',
		offset: (-4),
		dst: true,
		start_month: 2,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 10,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Bhutan',
		code: '975',
		capital: 'Thimphu',
		offset: (6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Guinea-Bissau',
		code: '245',
		capital: 'Bissau',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Bolivia',
		code: '591',
		capital: 'Sucre',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Bosnia and Herzegovina',
		code: '387',
		capital: 'Sarajevo',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Botswana',
		code: '267',
		capital: 'Gaborone',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Brazil',
		code: '55',
		capital: 'Brasília',
		offset: (-4),
		dst: true,
		start_month: 9,
		start_week: 3,
		start_offset: false,
		start_day: 0,
		end_month: 1,
		end_week: 3,
		end_day: 0
	},

	{
		name: 'British Indian Ocean Territory',
		code: '246',
		capital: 'Camp Justice',
		offset: (6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'British Virgin Islands',
		code: '1284',
		capital: 'Road Town',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Brunei Darussalam',
		code: '673',
		capital: 'Bandar Seri Begawan',
		offset: (8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Bulgaria',
		code: '359',
		capital: 'Sofia',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Burkina Faso',
		code: '226',
		capital: 'Ouagadougou',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Burma',
		code: '95',
		capital: 'Naypyidaw',
		offset: (6.5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Burundi',
		code: '257',
		capital: 'Bujumbura',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Cambodia',
		code: '855',
		capital: 'Phnom Penh',
		offset: (7),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Cameroon',
		code: '237',
		capital: 'Yaoundé',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'US/Canada',
		code: '1',
		capital: 'Washington, DC',
		offset: (-5),
		dst: true,
		start_month: 2,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 10,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'United States',
		code: '1',
		capital: 'Washington, DC',
		offset: (-5),
		dst: true,
		start_month: 2,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 10,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Canada',
		code: '1',
		capital: 'Ottawa',
		offset: (-5),
		dst: true,
		start_month: 2,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 10,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Cape Verde',
		code: '238',
		capital: 'Praia',
		offset: (-1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Caribbean Netherlands/Bonaire',
		code: '5997',
		capital: 'Kralendijk',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Cayman Islands',
		code: '1345',
		capital: 'George Town',
		offset: (-5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Central African Republic',
		code: '236',
		capital: 'Bangui',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Chad',
		code: '235',
		capital: "N'Djamena",
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'New Zealand',
		code: '64',
		capital: 'Chatham Island',
		offset: (12.75),
		dst: true,
		start_month: 8,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 3,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Chile',
		code: '56',
		capital: 'Santiago',
		offset: (-4),
		dst: true,
		start_month: 7,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 4,
		end_week: 2,
		end_day: 0
	},

	{
		name: 'China',
		code: '86',
		capital: 'Beijing',
		offset: (8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Christmas Island',
		code: '61',
		capital: 'Flying Fish Cove',
		offset: (7),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Cocos (Keeling) Islands',
		code: '61',
		capital: 'West Island, Cocos (Keeling) Islands',
		offset: (6.5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Colombia',
		code: '57',
		capital: 'Bogotá',
		offset: (-5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Comoros',
		code: '269',
		capital: 'Moroni',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Democratic Republic of the Congo',
		code: '242',
		capital: 'Kinshasa',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Cook Islands',
		code: '682',
		capital: 'Avarua',
		offset: (-10),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Costa Rica',
		code: '506',
		capital: 'San José',
		offset: (-6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: "Côte d'Ivoire",
		code: '225',
		capital: 'Yamoussoukro',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Croatia',
		code: '385',
		capital: 'Zagreb',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Cuba',
		code: '53',
		capital: 'Havana',
		offset: (-5),
		dst: true,
		start_month: 2,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 10,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Curaçao',
		code: '5999',
		capital: 'Willemstad',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Cyprus',
		code: '357',
		capital: 'Nicosia',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Czech Republic',
		code: '420',
		capital: 'Prague',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Democratic Republic of the Congo',
		code: '243',
		capital: 'Kinshasa',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Denmark',
		code: '45',
		capital: 'Copenhagen',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'British Indian Ocean Territory',
		code: '246',
		capital: 'Diego Garcia',
		offset: (6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Djibouti',
		code: '253',
		capital: 'Djibouti',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Dominica',
		code: '1767',
		capital: 'Roseau',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Dominican Republic',
		code: '1809',
		capital: 'Santo Domingo',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Dominican Republic',
		code: '1829',
		capital: 'Santo Domingo',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Dominican Republic',
		code: '1849',
		capital: 'Santo Domingo',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'East Timor',
		code: '670',
		capital: 'Dili',
		offset: (9),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Ecuador',
		code: '593',
		capital: 'Quito',
		offset: (-5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Egypt',
		code: '20',
		capital: 'Cairo',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'El Salvador',
		code: '503',
		capital: 'San Salvador',
		offset: (-6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Equatorial Guinea',
		code: '240',
		capital: 'Malabo',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Eritrea',
		code: '291',
		capital: 'Asmara',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Estonia',
		code: '372',
		capital: 'Tallinn',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Ethiopia',
		code: '251',
		capital: 'Addis Ababa',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Falkland Islands',
		code: '500',
		capital: 'Stanley',
		offset: (-3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Faroe Islands',
		code: '298',
		capital: 'Tórshavn',
		offset: (0),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Federated States of Micronesia',
		code: '691',
		capital: 'Palikir',
		offset: (11),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Fiji',
		code: '679',
		capital: 'Suva',
		offset: (12),
		dst: true,
		start_month: 10,
		start_week: 1,
		start_offset: false,
		start_day: 0,
		end_month: 0,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Finland',
		code: '358',
		capital: 'Helsinki',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'France',
		code: '33',
		capital: 'Paris',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'French Antilles',
		code: '596',
		capital: 'Fort-de-France',
		offset: (-5),
		dst: true,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'French Guiana',
		code: '594',
		capital: 'Cayenne',
		offset: (-3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'French Polynesia',
		code: '689',
		capital: 'Papeete',
		offset: (-10),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Gabon',
		code: '241',
		capital: 'Libreville',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Gambia',
		code: '220',
		capital: 'Banjul',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Georgia',
		code: '995',
		capital: 'Tbilisi',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Germany',
		code: '49',
		capital: 'Berlin',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Ghana',
		code: '233',
		capital: 'Accra',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Gibraltar',
		code: '350',
		capital: 'Gibraltar',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Greece',
		code: '30',
		capital: 'Athens',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Greenland',
		code: '299',
		capital: 'Nuuk',
		offset: (-3),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: false,
		end_month: 9,
		end_week: 4,
		end_day: 6
	},

	{
		name: 'Grenada',
		code: '1473',
		capital: "St. George's",
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Guadeloupe',
		code: '590',
		capital: 'Basse-Terre',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Guam',
		code: '1671',
		capital: 'Hagåtña',
		offset: (10),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Cuba',
		code: '5399',
		capital: 'Guantanamo Bay Cuba',
		offset: (-5),
		dst: true,
		start_month: 2,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 10,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Guatemala',
		code: '502',
		capital: 'Guatemala City',
		offset: (-6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Guinea',
		code: '224',
		capital: 'Conakry',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Guinea',
		code: '245',
		capital: 'Conakry',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Guyana',
		code: '592',
		capital: 'Georgetown',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Haiti',
		code: '509',
		capital: 'Port-au-Prince',
		offset: (-5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Honduras',
		code: '504',
		capital: 'Tegucigalpa',
		offset: (-6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Hong Kong',
		code: '852',
		capital: 'Hong Kong',
		offset: (8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Hungary',
		code: '36',
		capital: 'Budapest',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Iceland',
		code: '354',
		capital: 'Reykjavik',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'India',
		code: '91',
		capital: 'New Delhi',
		offset: (5.5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Indonesia',
		code: '62',
		capital: 'Jakarta',
		offset: (7),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Iran',
		code: '98',
		capital: 'Tehran',
		offset: (3.5),
		dst: true,
		start_month: 2,
		start_week: 21,
		start_offset: false,
		start_day: false,
		end_month: 9,
		end_week: 21,
		end_day: false
	},

	{
		name: 'Iraq',
		code: '964',
		capital: 'Baghdad',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Ireland',
		code: '353',
		capital: 'Dublin',
		offset: (0),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Israel',
		code: '972',
		capital: 'Jerusalem',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: (-2),
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Italy',
		code: '39',
		capital: 'Rome',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Jamaica',
		code: '1876',
		capital: 'Kingston',
		offset: (-5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Jan Mayen/Svalbard',
		code: '4779',
		capital: 'Longyearbyen',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Japan',
		code: '81',
		capital: 'Tokyo',
		offset: (9),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Jordan',
		code: '962',
		capital: 'Amman',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: 1,
		start_day: false,
		end_month: 9,
		end_week: 4,
		end_day: 5
	},

	{
		name: 'Kazakhstan',
		code: '76',
		capital: 'Astana',
		offset: (6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Kazakhstan',
		code: '77',
		capital: 'Astana',
		offset: (6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Kenya',
		code: '254',
		capital: 'Nairobi',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Kiribati',
		code: '686',
		capital: 'South Tarawa',
		offset: (12),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Kuwait',
		code: '965',
		capital: 'Kuwait City',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Kyrgyzstan',
		code: '996',
		capital: 'Bishkek',
		offset: (6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Laos',
		code: '856',
		capital: 'Vientiane',
		offset: (7),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Latvia',
		code: '371',
		capital: 'Riga',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Lebanon',
		code: '961',
		capital: 'Beirut',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Lesotho',
		code: '266',
		capital: 'Maseru',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Liberia',
		code: '231',
		capital: 'Monrovia',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Libya',
		code: '218',
		capital: 'Tripoli',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Liechtenstein',
		code: '423',
		capital: 'Vaduz',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Lithuania',
		code: '370',
		capital: 'Vilnius',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Luxembourg',
		code: '352',
		capital: 'Luxembourg City',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'China',
		code: '853',
		capital: 'Macau',
		offset: (8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Macedonia',
		code: '389',
		capital: 'Skopje',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Madagascar',
		code: '261',
		capital: 'Antananarivo',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Malawi',
		code: '265',
		capital: 'Lilongwe',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Malaysia',
		code: '60',
		capital: 'Kuala Lumpur',
		offset: (8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Maldives',
		code: '960',
		capital: 'Malé',
		offset: (5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Mali',
		code: '223',
		capital: 'Bamako',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Malta',
		code: '356',
		capital: 'Valletta',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Marshall Islands',
		code: '692',
		capital: 'Majuro',
		offset: (12),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Martinique',
		code: '596',
		capital: 'Fort-de-France',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Mauritania',
		code: '222',
		capital: 'Nouakchott',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Mauritius',
		code: '230',
		capital: 'Port Louis',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Mayotte',
		code: '262',
		capital: 'Mamoudzou',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Mexico',
		code: '52',
		capital: 'Mexico City',
		offset: (-6),
		dst: true,
		start_month: 3,
		start_week: 1,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'USA',
		code: '1808',
		capital: 'Midway Island',
		offset: (-11),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Moldova',
		code: '373',
		capital: 'Chișinău',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Monaco',
		code: '377',
		capital: 'Monaco',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Mongolia',
		code: '976',
		capital: 'Ulaanbaatar',
		offset: (8),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: false,
		end_month: 8,
		end_week: 4,
		end_day: false
	},

	{
		name: 'Montenegro',
		code: '382',
		capital: 'Podgorica',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Montserrat',
		code: '1664',
		capital: 'Plymouth',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Morocco',
		code: '212',
		capital: 'Rabat',
		offset: (0),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Mozambique',
		code: '258',
		capital: 'Maputo',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'N. Korea',
		code: '850',
		capital: 'Pyongyang',
		offset: (8.5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Namibia',
		code: '264',
		capital: 'Windhoek',
		offset: (1),
		dst: true,
		start_month: 8,
		start_week: 1,
		start_offset: false,
		start_day: 0,
		end_month: 3,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Nauru',
		code: '674',
		capital: 'Yaren',
		offset: (12),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Nepal',
		code: '977',
		capital: 'Kathmandu',
		offset: (5.75),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Netherlands',
		code: '31',
		capital: 'Amsterdam',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Nevis',
		code: '1869',
		capital: 'Charlestown',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'New Caledonia',
		code: '687',
		capital: 'Nouméa',
		offset: (11),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'New Zealand',
		code: '64',
		capital: 'Wellington',
		offset: (12),
		dst: true,
		start_month: 8,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 3,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Nicaragua',
		code: '505',
		capital: 'Managua',
		offset: (-6),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Niger',
		code: '227',
		capital: 'Niamey',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Nigeria',
		code: '234',
		capital: 'Abuja',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Niue',
		code: '683',
		capital: 'Alofi',
		offset: (-11),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Norfolk Island',
		code: '672',
		capital: 'Kingston',
		offset: (11),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Northern Mariana Islands',
		code: '1670',
		capital: 'Capitol Hill, Saipan',
		offset: (10),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Norway',
		code: '47',
		capital: 'Oslo',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Oman',
		code: '968',
		capital: 'Muscat',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Pakistan',
		code: '92',
		capital: 'Islamabad',
		offset: (5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Palau',
		code: '680',
		capital: 'Ngerulmud',
		offset: (9),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Panama',
		code: '507',
		capital: 'Panama City',
		offset: (-5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Papua New Guinea',
		code: '675',
		capital: 'Port Moresby',
		offset: (10),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Paraguay',
		code: '595',
		capital: 'Asunción',
		offset: (-4),
		dst: true,
		start_month: 9,
		start_week: 1,
		start_offset: false,
		start_day: 0,
		end_month: 2,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Peru',
		code: '51',
		capital: 'Lima',
		offset: (-5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Philippines',
		code: '63',
		capital: 'Manila',
		offset: (8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Pitcairn Islands',
		code: '64',
		capital: 'Adamstown',
		offset: (-8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Poland',
		code: '48',
		capital: 'Warsaw',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Portugal',
		code: '351',
		capital: 'Lisbon',
		offset: (0),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Puerto Rico',
		code: '1787',
		capital: 'San Juan',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Puerto Rico',
		code: '1939',
		capital: 'San Juan',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Qatar',
		code: '974',
		capital: 'Doha',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Réunion',
		code: '262',
		capital: 'Saint-Denis',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Romania',
		code: '40',
		capital: 'Bucharest',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Russia',
		code: '7',
		capital: 'Moscow',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Rwanda',
		code: '250',
		capital: 'Kigali',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'S. Georgia & the S. Sandwich Islands',
		code: '500',
		capital: 'King Edward Point',
		offset: (-2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'S. Korea',
		code: '82',
		capital: 'Seoul',
		offset: (9),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Georgia',
		code: '99534',
		capital: 'S. Ossetia',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Saint Barthélemy',
		code: '590',
		capital: 'Gustavia',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Saint Helena',
		code: '290',
		capital: 'Jamestown',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Saint Kitts and Nevis',
		code: '1869',
		capital: 'Basseterre',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Saint Lucia',
		code: '1758',
		capital: 'Castries',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Saint Martin (France)',
		code: '590',
		capital: 'Marigot',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Saint Pierre and Miquelon',
		code: '508',
		capital: 'Saint-Pierre',
		offset: (-3),
		dst: true,
		start_month: 2,
		start_week: 2,
		start_offset: false,
		start_day: 0,
		end_month: 10,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'Saint Vincent and the Grenadines',
		code: '1784',
		capital: 'Kingstown',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Samoa',
		code: '685',
		capital: 'Apia',
		offset: (13),
		dst: true,
		start_month: 8,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 3,
		end_week: 1,
		end_day: 0
	},

	{
		name: 'San Marino',
		code: '378',
		capital: 'San Marino',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'São Tomé and Príncipe',
		code: '239',
		capital: 'São Tomé',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Saudi Arabia',
		code: '966',
		capital: 'Riyadh',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Senegal',
		code: '221',
		capital: 'Dakar',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Serbia',
		code: '381',
		capital: 'Belgrade',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Seychelles',
		code: '248',
		capital: 'Victoria',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Sierra Leone',
		code: '232',
		capital: 'Freetown',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Singapore',
		code: '65',
		capital: 'Singapore',
		offset: (8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Sint Eustatius',
		code: '5993',
		capital: 'Oranjestad',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Sint Maarten (Netherlands)',
		code: '1721',
		capital: 'Philipsburg',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Slovakia',
		code: '421',
		capital: 'Bratislava',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Slovenia',
		code: '386',
		capital: 'Ljubljana',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Solomon Islands',
		code: '677',
		capital: 'Honiara',
		offset: (11),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Somalia',
		code: '252',
		capital: 'Mogadishu',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'South Africa',
		code: '27',
		capital: 'Cape Town',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'South Sudan',
		code: '211',
		capital: 'Juba',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Spain',
		code: '34',
		capital: 'Madrid',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Sri Lanka',
		code: '94',
		capital: 'Sri Jayawardenepura Kotte',
		offset: (5.5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'St. of Palestine',
		code: '970',
		capital: 'East Jerusalem',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: false,
		end_month: 9,
		end_week: 4,
		end_day: false
	},

	{
		name: 'Sudan',
		code: '249',
		capital: 'Khartoum',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Suriname',
		code: '597',
		capital: 'Paramaribo',
		offset: (-3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Swaziland',
		code: '268',
		capital: 'Mbabane',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Sweden',
		code: '46',
		capital: 'Stockholm',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Switzerland',
		code: '41',
		capital: 'Bern',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Syria',
		code: '963',
		capital: 'Damascus',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: false,
		end_month: 9,
		end_week: 4,
		end_day: false
	},

	{
		name: 'Taiwan',
		code: '886',
		capital: 'Taipei',
		offset: (8),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Tajikistan',
		code: '992',
		capital: 'Dushanbe',
		offset: (5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Tanzania',
		code: '255',
		capital: 'Dodoma',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Thailand',
		code: '66',
		capital: 'Bangkok',
		offset: (7),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Togo',
		code: '228',
		capital: 'Lomé',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Tokelau',
		code: '690',
		capital: 'Fakaofo',
		offset: (13),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Tonga',
		code: '676',
		capital: "Nukuʻalofa",
		offset: (13),
		dst: true,
		start_month: 10,
		start_week: 1,
		start_offset: false,
		start_day: 0,
		end_month: 0,
		end_week: 3,
		end_day: 0
	},

	{
		name: 'Trinidad and Tobago',
		code: '1868',
		capital: 'Port of Spain',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: 1,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Tristan da Cunha',
		code: '2908',
		capital: 'Edinburgh of the Seven Seas',
		offset: (0),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Tunisia',
		code: '216',
		capital: 'Tunis',
		offset: (1),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Turkey',
		code: '90',
		capital: 'Ankara',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Turkmenistan',
		code: '993',
		capital: 'Ashgabat',
		offset: (5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Turks and Caicos Islands',
		code: '1649',
		capital: 'Cockburn Town',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Tuvalu',
		code: '688',
		capital: 'Funafuti',
		offset: (12),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Uganda',
		code: '256',
		capital: 'Kampala',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Ukraine',
		code: '380',
		capital: 'Kiev',
		offset: (2),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'United Arab Emirates',
		code: '971',
		capital: 'Abu Dhabi',
		offset: (4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'United Kingdom/Guernsey/Jersey',
		code: '44',
		capital: 'London',
		offset: (0),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Uruguay',
		code: '598',
		capital: 'Montevideo',
		offset: (-3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'US Virgin Islands',
		code: '1340',
		capital: 'Charlotte Amalie',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Uzbekistan',
		code: '998',
		capital: 'Tashkent',
		offset: (5),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Vanuatu',
		code: '678',
		capital: 'Port Vila',
		offset: (11),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Vatican City State',
		code: '379',
		capital: 'Vatican City',
		offset: (1),
		dst: true,
		start_month: 2,
		start_week: 4,
		start_offset: false,
		start_day: 0,
		end_month: 9,
		end_week: 4,
		end_day: 0
	},

	{
		name: 'Venezuela',
		code: '58',
		capital: 'Caracas',
		offset: (-4),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Vietnam',
		code: '84',
		capital: 'Hanoi',
		offset: (7),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'USA',
		code: '1808',
		capital: 'Wake Island ',
		offset: (12),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Wallis and Futuna',
		code: '681',
		capital: 'Mata Utu',
		offset: (12),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Yemen',
		code: '967',
		capital: "Sana'a",
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Zambia',
		code: '260',
		capital: 'Lusaka',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Tanzania',
		code: '255',
		capital: 'Zanzibar City',
		offset: (3),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	},

	{
		name: 'Zimbabwe',
		code: '263',
		capital: 'Harare',
		offset: (2),
		dst: false,
		start_month: false,
		start_week: false,
		start_offset: false,
		start_day: false,
		end_month: false,
		end_week: false,
		end_day: false
	}

];

module.exports.usCodes = usCodes;
module.exports.countryCodes = countryCodes;
module.exports.canadaCodes = canadaCodes;