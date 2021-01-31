"use strict";

const Koa = require("koa");
const { oas } = require("koa-oas3");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const router = require("./routes/api");
const app = new Koa();
app.use(bodyParser());
// app.use(
//   oas({
//     endpoint: "/openapi.json",
//     file: path.resolve(process.cwd(), "openapi.yaml"),
//     uiEndpoint: "/oas",
//     validatePaths: ["/else"],
//   })
// );
app.use(router.routes());
app.listen(3000);
