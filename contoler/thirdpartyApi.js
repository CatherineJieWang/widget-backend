let LOCATION_URL
let WEATHER_URL

if (process.env.SERVER_ENV === "prod") {
  WEATHER_URL = "https://www.metaweather.com/api/location";
  LOCATION_URL = "https://www.metaweather.com/api/location/search";
} else {
  WEATHER_URL = "https://www.metaweather.com/api/location";
  LOCATION_URL = "https://www.metaweather.com/api/location/search";
}

module.exports = {WEATHER_URL , LOCATION_URL};