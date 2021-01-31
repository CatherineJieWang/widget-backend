const assert = require("assert");
const thirdPartyApi = require('./thirdpartyApi')

function getWeather(ctx) {
  console.log('tstc',ctx)
  const {cityId} = ctx.params
  console.log('ctx',)
    assert(cityId, "city must exist!");
    const res = fetch(`${thirdPartyApi.WEATHER_URL}/weathers?id=${cityId}`)
      .then((res) => res.json())
      .then((data) => data);
    if (res) {
      ctx.body = res;
    } else {
      ctx.body = {
        message: `${cityId} not found`,
      };
      ctx.status = 404;
    }
  }


  module.exports = {getWeather};
