
"use strict";
const Router = require("koa-router");
const router = new Router();
const weatherControler = require('../controler/weather')
const locationControler = require('../controler/location')

router.get("/", async (ctx) => {
  ctx.body = "Hello";
});

//v1
router.get("/location", async (ctx) => {
    locationControler.getLocation(ctx);
});

router.get("/weather/:city", async (ctx) => {
    weatherControler.getWeather(ctx);
});
