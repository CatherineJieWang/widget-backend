"use strict";
const express = require("express");
const router = new express.Router();
const weatherControler = require("../controler/weather");
const locationControler = require("../controler/location");

router.get("/", async function () {
  console.log("Hello Here");
});

//v1
router.get("/location", locationControler.getLocation);
router.get("/geolocation", locationControler.getGeoLocation);

router.get("/weather/:cityId", weatherControler.getWeather);

module.exports = router;
