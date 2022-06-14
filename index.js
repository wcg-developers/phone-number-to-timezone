var areaCodes = require('./area_codes');
var usCodes = areaCodes.usCodes;
var countryCodes = areaCodes.countryCodes;
var canadaCodes = areaCodes.canadaCodes;
var self = module.exports = {
	//Build Local Info object
	getLocalInfo: function (text, options, callback) {
		if (!text) {
			return;
		}
		var localInfo = new Object();
		var text = self.cleanText(text.toString());
		var text = self.standardizeCountry(text);
		localInfo['text'] = text;
		//set Options
		self.setOptions(localInfo, options);
		//Check for US
		self.checkUS(localInfo);
		//Add Type (Area or Country)
		self.addType(localInfo);
		//Add Location and Country Info
		self.addLocation(localInfo);
		//Add Current Time for Area Codes
		self.addTime(localInfo);
		if (typeof callback == "function") {
			callback(localInfo);
			return;
		}
		return localInfo;
	},
	// Correct 00 and replace for +
	standardizeCountry: function (x) {
		if (x.substring(0, 2) === "00") {
			x = x.replace("00", "+");
		}
		return x;
	},
	// Set options which are passed as paramas
	setOptions: function (object, options) {
		//Set Defaults
		object['options'] = {};
		object['options']['military'] = true;
		object['options']['zone_display'] = "offset";
		//Only accept validated options
		var submittedOptions = options;
		var submittedOptions = self.validateOptions(options);
		if (!submittedOptions) {
			return;
		}
		if (submittedOptions['military'] == false || submittedOptions['military'] == "false") {
			object['options']['military'] = false;
		}
		if (submittedOptions['zone_display'] === "name") {
			object['options']['zone_display'] = "name";
		}
	},
	//Remove invalid options
	validateOptions: function (options) {
		if (typeof (options) !== "object" || options.length < 1) {
			return false;
		}
		var submittedOptions = Object.keys(options);
		var availableOptions = ['military', 'format', 'zone_display'];
		for (let i = 0; i < submittedOptions.length; i++) {
			var valid = false;
			for (let x = 0; x < availableOptions.length; x++) {
				if (submittedOptions[i] == availableOptions[x]) {
					valid = true;
					break;
				}
			}
			if (!valid) {
				delete options[submittedOptions[i]];
			}
		}
		return options;
	},
	//Check for US to process as area
	checkUS: function (object) {
		var text = object['text'];
		var beginning = text.substring(0, 2);
		if (text !== "+1") {
			if (beginning === "+1") {
				text = text.replace("+1", "");
			}
			if (text.substring(0, 1) == "1") {
				text = text.substring(1, text.length);
			}
			if (text.length < 3) {
				object['valid'] = false;
			}
		}
		object['text'] = text;
	},
	//Detect if Area Code or Country Code
	addType: function (object) {
		var text = object['text'];
		var beg = text.substring(0, 1);
		var beg2 = text.substring(0, 2);
		var type = "";
		object['time'] = {};
		if (beg === "+" || beg2 === "00") {
			object['text'] = text.substring(0, 5);
			object['time']['zone'] = false;
			type = "country";
		} else {
			if (text.length < 3) {
				object['valid'] = false;
			}
			object['text'] = text.substring(0, 3);
			object['time']['zone'] = false;
			type = "area";
		}
		object['type'] = type;
	},
	// Add location
	addLocation: function (object) {
		var type = object['type'];
		var text = object['text'];
		var location = false;
		switch (type) {
		case "area":
			{
				location = self.getLoc(object);
				while (!location && text.length > 3) {
					text = text.substring(0, text.length - 1);
					object['text'] = text;
					location = self.getLoc(object);
				}
				if (location) {
					self.chooseUsCanada(object);
				}
				break;
			}
		case "country":
			{
				object['country_info'] = self.getCountryInfo(object);
				location = object['country_info']['name'];
				while (!location && text.length > 2) {
					text = text.substring(0, text.length - 1);
					object['text'] = text;
					object['country_info'] = self.getCountryInfo(object);
					location = object['country_info']['name']
				}
				break;
			}
		}
		if (!location) {
			object['valid'] = false;
		}
		object['location'] = location;
	},
	//Linear Search US Time Zones
	getLoc: function (object) {
		var text = object['text'];
		var location = false;
		var zone_display_key = object['options']['zone_display'];
		for (let i = 0; i < usCodes.length - 1; i++) {
			for (let x = 0; x < usCodes[i]['codes'].length; x++) {
				if (text === usCodes[i]['codes'][x]) {
					var location = usCodes[i]['codes'][x + 1];
					object['time']['zone'] = usCodes[i][zone_display_key];
					object['offset'] = usCodes[i]['offset'];
					object['dst'] = usCodes[i]['dst'];
					break;
				}
			}
		}
		if (location) {
			return location;
		}
		var tollFree = usCodes[usCodes.length - 1];
		for (let i = 0; i < tollFree['codes'].length; i++) {
			if (text === tollFree['codes'][i]) {
				var location = 'Toll Free or Other';
				object['time']['zone'] = "Toll Free or Other";
				object['offset'] = tollFree['offset'];
				object['dst'] = tollFree['dst'];
				break;
			}
		}
		return location;
	},
	//For US/Canada Area codes, add correct Country
	chooseUsCanada: function (object) {
		var code = object['text'];
		var usIndex = self.getCountryInfo({
			text: '+1'
		}).index;
		object['country_info'] = countryCodes[usIndex + 1];
		for (let i = 0; i < canadaCodes.length; i++) {
			if (code === canadaCodes[i]) {
				object['country_info'] = countryCodes[usIndex + 2];
				break;
			}
		}
	},
	// Get country info
	getCountryInfo: function (object) {
		var text = object['text'];
		var code = text.substring(1, text.length);
		var country_info = [];
		var countryIndex = false;
		for (let i = 0; i < countryCodes.length; i++) {
			if (code === countryCodes[i]['code']) {
				var country_info = countryCodes[i];
				object['offset'] = countryCodes[i]['offset'];
				object['dst'] = countryCodes[i]['dst'];
				countryIndex = i;
				break;
			}
		}
		country_info['index'] = countryIndex;
		return country_info;
	},
	//Finds hour difference from GMT for specific time zone
	addTime: function (object) {
		if (object['valid'] == false) {
			object['time'] = false;
			return;
		}
		object['dstnow'] = false;
		var type = object['type'];
		var zone = object['time']['zone'];
		var offset = object['offset'];
		var location = object['location'];
		var isDlsAffected = object['dst'];
		var zone_display = object['options']['zone_display'];
		if (zone === "Toll Free or Other" || !location) {
			object['time'] = false;
			return;
		}
		var date = new Date();
		var hour = date.getHours();
		var mins = date.getMinutes();
		var utcOffset = date.getTimezoneOffset() / 60;
		var utcHour = hour + utcOffset;
		var hour2 = false;
		var military = object['options']['military'];
		//Check for Daylight Savings
		var dst = 0;
		if (isDlsAffected && self.checkDst(object)) {
			dst += 1;
		}
		//Dual Time Zones
		if (offset.length > 1) {
			hour = utcHour + offset[1] + dst;
			hour2 = utcHour + offset[0] + dst;
			var time = self.formatTime(hour, mins, offset[1], military);
			var time2 = self.formatTime(hour2, mins, offset[0], military);
			object['time']['hour2'] = time2.hour;
			object['time']['meridian2'] = time2.meridian;
			var meridian2 = "";
			if (object['time']['meridian2']) {
				meridian2 = " " + time2.meridian;
			}
			object['time']['display2'] = time2.hour.toString() + ":" + time.mins.toString() + meridian2;
			//Format Zone Display
			if (zone_display == "offset" || type == "country") {
				object['time']['zone'] = self.formatOffsetZoneDisplay(offset[1] + dst, object);
				object['time']['zone2'] = self.formatOffsetZoneDisplay(offset[0] + dst, object);
			}
		} else {
			hour = utcHour + offset + dst;
			var time = self.formatTime(hour, mins, offset, military);
			//Format Zone Display
			if (zone_display == "offset" || type == "country") {
				object['time']['zone'] = self.formatOffsetZoneDisplay(offset + dst, object);
			}
		}
		object['time']['hour'] = time.hour;
		object['time']['mins'] = time.mins;
		object['time']['meridian'] = time.meridian;
		let meridian;
		if (object['time']['meridian']) {
			meridian = " " + time.meridian;
		} else {
			meridian = "";
		}
		object['time']['display'] = time.hour.toString() + ":" + time.mins.toString() + meridian;
	},
	checkDst: function (object) {
		var date = new Date();
		var year = date.getFullYear();
		var dst = false;
		var country_info = object['country_info'];
		var start_month = country_info['start_month'];
		var start_week = country_info['start_week'];
		var start_offset = country_info['start_offset'];
		var start_day = country_info['start_day'];
		var end_month = country_info['end_month'];
		var end_week = country_info['end_week'];
		var end_day = country_info['end_day'];
		var startDate = self.nthWeekdayOfMonth(start_day, start_week, new Date(year, start_month));
		var endDate = self.nthWeekdayOfMonth(end_day, end_week, new Date(year, end_month));
		var middleOfYear = new Date(year, 5);
		if (start_offset) { //Only affects Jerusalem and Jordan
			var day = startDate.getDate();
			var day = day + start_offset;
			if (day > 31) {
				day = day - 31;
				start_month = start_month + 1;
			}
			startDate = new Date(year, start_month, day);
		}
		if (startDate < middleOfYear) {
			if (date >= startDate && date < endDate) {
				dst = true;
			}
		} else {
			// Important:: Original code had an issue with the case where
			// current date was greater than the middle of the year and  
			// the end of dst was in the next year.
			// Example:: set current date to 06/15/2022 and test with Australia number

			// In the case where end month is within the same year.
			if(end_month > start_month) {
				if (date < startDate || date >= endDate) {
					dst = true;
				}
			} else {
				// In the case where start month is less than the end month which means it is in the next year
				if (date > startDate || date <= endDate) {
					dst = true;
				}
			}

		}

		object['dstStartDate'] = `${startDate.toISOString()}`;
		object['dstEndDate'] = `${endDate.toISOString()}`;

		if ( endDate < startDate ) {
			if ( date < middleOfYear) {

				object['dstStartDate'] = self.nthWeekdayOfMonth(start_day, start_week, new Date(year-1, start_month)).toISOString();
			} else {
				object['dstEndDate'] = self.nthWeekdayOfMonth(end_day, end_week, new Date(year+1, end_month)).toISOString();
			}

		}

		object['dstnow'] = dst;
		return dst;
	},
	nthWeekdayOfMonth: function (weekday, n, date) {
		var count = 0;
		var result = new Date(date.getFullYear(), date.getMonth(), 1);
		while (true) {
			// If statement added to stop infinite loop for certain numbers in middle east
			if (typeof weekday !== 'number' || isNaN(weekday)) {
				break;
			}
			if (result.getDay() === weekday) {
				if (++count == n) {
					break;
				}
			}
			result.setDate(result.getDate() + 1);
		}
		return result;
	},
	formatOffsetZoneDisplay: function (offset, object) {
		var offset = offset.toString();
		if (offset > 0) {
			offset = "+" + offset;
		}
		if (offset == 0) {
			offset = "";
		}
		var output = "GMT" + offset;
		return output;
	},
	formatTime: function (hour, mins, offset, military) {
		var meridian = false;
		//Format Mins
		//Handle irregular offsets
		var partialOffset = (offset % 1);
		if (partialOffset < 0 || partialOffset === (-0)) {
			partialOffset *= (-1);
		}
		if (partialOffset > 0) {
			let offsetMinutes = partialOffset * 60;
			mins = mins + offsetMinutes;
			hour = hour - partialOffset;
		}
		if (mins < 0) {
			mins = 60 + mins;
			hour -= 1;
		}
		if (mins > 60) {
			mins = mins - 60;
			hour += 1;
		}
		mins = mins.toString();
		if (mins.length == 1) {
			mins = "0" + mins;
		}
		if (mins == 0) {
			mins = "00";
		}
		if (mins == 60) {
			mins = "00";
			hour += 1;
		}
		//Format Hour
		if (hour >= 24) {
			hour = hour - 24;
		}
		if (hour < 0) {
			hour = hour + 24;
		}
		if (hour < 10 && military) {
			hour = "0" + hour.toString();
		}
		//12-hour Format
		if (!military) {
			if (hour > 11) {
				meridian = "PM";
			} else {
				meridian = "AM";
			}
			if (hour == 0 || hour == 23) {
				hour = "12";
			}
			if (hour > 12 && hour < 24) {
				hour = hour - 12;
			}
			if (hour < 0) {
				hour = hour + 12;
			}
		}
		var result = {
			hour: hour.toString(),
			mins: mins.toString(),
			meridian: meridian
		};
		return result;
	},
	//Allow only numerical and "+" characters
	cleanText: function (x) {
		var text = x;
		text = text.replace(/\s/g, '');
		text = text.replace(/[^+0-9]/g, '');
		if (text.length > 5) {
			text = text.substring(0, 5);
		}
		return text;
	}
};
