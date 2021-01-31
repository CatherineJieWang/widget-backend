"use strict";
const Router = require("koa-router");
const router = new Router();
const weatherControler = require('../contoler/weather')
const locationControler = require('../contoler/location')

router.get("/", async (ctx) => {
  ctx.body = "Hello";
});

//v1
router.get("/location", async (ctx) => {
    locationControler.getLocation(ctx);
});

router.get("/weather/:cityId", async (ctx) => {
    weatherControler.getWeather(ctx);
});

module.exports = router;

