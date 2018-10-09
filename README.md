# phone-number-to-timezone

phone-number-to-timezone is a utility that helps to get the current time and location for a phone number, area code, or country code.

We have used Chronomouse client-side js library to make it available at server side too.

Get information such as the current time, GMT offset time zone name, location, the capital city, daylight savings laws, or daylight savings status.

Currently supports US & Canada Area Codes and all Country Codes.

## Getting Started

install with npm:

```
$ npm install phone-number-to-timezone

```

## Examples

```
console.log ( getLocalInfo('+1809*******'));

 { text: '809',
  options: { military: true, zone_display: 'offset' },
  time:
   { zone: 'GMT-4',
     hour: '06',
     mins: '10',
     meridian: false,
     display: '06:10' },
  type: 'area',
  offset: -5,
  dst: true,
  country_info:
   { name: 'United States',
     code: '1',
     capital: 'Washington, DC',
     offset: -5,
     dst: true,
     start_month: 2,
     start_week: 2,
     start_offset: false,
     start_day: 0,
     end_month: 10,
     end_week: 1,
     end_day: 0 },
  location: 'Dominican Republic',
  dstnow: true }

```
## Properties
```
getLocalInfo( string area/country code,function callback);
```
Input text must start with '+' or '00' to trigger country code search.
```
var obj = getLocalInfo('615');
```

**obj.text** - string. The input text for the area or country code.

**obj.location** - string. For area codes, the name of the major city for that area followed by state abbreviation. Country codes, the name of the country.

```
console.log( getLocalInfo('415').location );
// San Francisco, CA

console.log( getLocalInfo('+55').location );
// Brazil
```

**obj.valid** - boolean. True, if a matching code was found in the time info arrarys. If false, other properties will may falsy (undefined or false).

**obj.dst** - boolean. If country has Daylight Savings laws. NOT an indication of Daylight Savings being currently active. Note: DST Laws are subject to change and would require updating codearrays.js.

**obj.dstnow** - boolean. If Daylight Savings is currently in effect. Note: DST Laws are subject to change and would require updating codearrays.js.

**obj.offset** - number. Offset of the zone without calculating daylight savings.

**obj.type** - string. Distinguishes area from country code. Will return either 'area' or 'country'.

**obj.country_info** - obj. Contains info about the country. See further properties below. If US/Canada Country Code, returns info for US.

**obj.country_info.code** - string. Country calling code, i.e. '55'.

**obj.country_info.capital** - string. Capital city.

**obj.country_info.dst** - boolean. If country has Daylight Savings laws. NOT an indication of Daylight Savings being currently active.

**obj.country_info.offset** - number. GMT Offset.

**obj.options** - obj. Received input options. More on passing options below.

**obj.options.military** - boolean. If 24-hour time is set. Default true.

**obj.options.zone_display** - string. 'name' or 'offset'. Default 'name'.

**obj.time** - obj. Contains info about the current time.

**obj.time.display** - string. Current time in hh:mm format. If miltary time is set to false, then this will include the meridian (AM/PM).

```
     console.log ( getLocalInfo('615').time.display );
     // 8:45 AM
```

**obj.time.hour** - string. Current hour.

**obj.time.hour2** - string. For split US/Canada time zones - the current hour of the time zone immediately east.

**obj.time.mins** - string. Current minutes.

**obj.time.meridian** - string. Current meridian (AM/PM).

**obj.time.meridian2** - string. For split time zones - the other meridian for hour2.

**obj.time.zone** - string. Time zone, displayed as the name of the time zone, or as the GMT offset, depending on the options. The default is 'offset' and is displayed in format "GMT+/-[offset]".


```
     console.log ( getLocalInfo('615').time.zone );
     // GMT-5
```

**zone_display** - string. Sets obj.zone_display. Can be 'name' OR 'offset'. Displays zone by zone name or GMT offset. Default 'offset'.
```
console.log ( getLocalInfo('615',{zone_display: 'area'}).time.zone );
// CST
console.log ( getLocalInfo('615',{zone_display: 'offset'}).time.zone );
// GMT-5
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
