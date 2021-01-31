let LOCATION_URL;
let WEATHER_URL;
let GEOLOCATION_URL

if (process.env.SERVER_ENV === "prod") {
  WEATHER_URL = "https://www.metaweather.com/api/location";
  LOCATION_URL = "https://www.metaweather.com/api/location/search";
  GEOLOCATION_URL = "https://geolocation-db.com/jsonp";
} else {
  WEATHER_URL = "https://www.metaweather.com/api/location";
  LOCATION_URL = "https://www.metaweather.com/api/location/search";
  GEOLOCATION_URL = "https://geolocation-db.com/jsonp";
}

module.exports = { WEATHER_URL, LOCATION_URL,GEOLOCATION_URL };
