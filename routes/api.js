"use strict";
const express = require("express");
const router = new express.Router();
const weatherController = require("../controller/weather");
const locationController = require("../controller/location");

router.get("/", async function () {
  console.log("Hello Here");
});

//v1
router.get("/location", locationController.getLocation);
router.get("/geolocation", locationController.getGeoLocation);

router.get("/weather/:cityId", weatherController.getWeather);

module.exports = router;
