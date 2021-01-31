const assert = require("assert");
const thirdPartyApi = require('./thirdpartyApi')

function getLocation(ctx) {
  const { city } = ctx.query;
  assert(city, "city must exist!");
  const res = fetch(`${thirdPartyApi.LOCATION_URL}/?query=${city}`)
    .then((res) => res.json())
    .then((data) => data);
  if (res) {
    ctx.body = res;
  } else {
    ctx.body = {
      message: `${city} not found`,
    };
    ctx.status = 404;
  }
}