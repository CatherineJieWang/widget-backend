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


async function getWeather(ctx) {
  // console.log("tstc", ctx);
  // const {cityId} = ctx.params
  const cityId = 44418;
  assert(cityId, "city must exist!");
  const res = await getWeatherFromThirdParty(cityId);
  if (res) {
    console.log('here?')
    ctx.body = res;
  } else {
    console.log('error here?')
    ctx.body = {
      message: `${cityId} not found`,
    };
    ctx.status = 404;
  }
}

module.exports = { getWeather };
