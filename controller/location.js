const assert = require("assert");
const thirdPartyApi = require("./thirdpartyApi");
const axios = require("axios");

async function getLocationFromThirdParty(param) {
  try {
    const response = await axios.get(`${thirdPartyApi.LOCATION_URL}/${param}`);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error at Get Weather", error);
  }
}

async function getGeoLocationFromThirdParty() {
  try {
    const response = await axios.get(thirdPartyApi.GEOLOCATION_URL);
    if (response.data) {
      return response.data.split("(")[1].split(")")[0];
    }
  } catch (error) {
    console.error("Error at Get Weather", error);
  }
}

async function getLocation(req, res) {
  const { query, lattlong } = req.query;
  let searchParam = "";
  if (query) {
    searchParam = `?query=${query}`;
  }
  if (lattlong) {
    searchParam = `?lattlong=${lattlong}`;
  }

  try {
    const response = await getLocationFromThirdParty(searchParam);
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.status(404).send(e);
  }
}
async function getGeoLocation(req, res) {
  try {
    const response = await getGeoLocationFromThirdParty();
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.status(404).send(e);
  }
}

module.exports = { getLocation, getGeoLocation };
