const assert = require("assert");
const thirdPartyApi = require('./thirdpartyApi')


async function getLocationFromThirdParty(city) {
  try {
    const response = await axios.get(`${thirdPartyApi.LOCATION_URL}/?query=${city}`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error at Get Weather", error);
  }
}

async function getLocation(ctx) {
  const { city } = ctx.query;
  assert(city, "city must exist!");
  const res = await getLocationFromThirdParty(city)
  if (res) {
    ctx.body = res;
  } else {
    ctx.body = {
      message: `${city} not found`,
    };
    ctx.status = 404;
  }
}
module.exports = {getLocation};
