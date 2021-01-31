const assert = require("assert");
const thirdPartyApi = require("./thirdpartyApi");
const axios = require("axios");

async function getWeatherFromThirdParty(cityId) {
  try {
    const response = await axios.get(`${thirdPartyApi.WEATHER_URL}/${cityId}`);
    if (response.data) {
      return response.data.consolidated_weather;
    }
  } catch (error) {
    console.error("Error at Get Weather", error);
  }
}

async function getWeather(req, res) {
  const { cityId } = req.params;
  assert(cityId, "city must exist!");
  try {
    const response = await getWeatherFromThirdParty(cityId);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.status(404).send(e);
  }
}

module.exports = { getWeather };
