"use strict";

const Koa = require("koa");
const { oas } = require("koa-oas3");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const router = require("./routes/api");
const cors = require('cors');

const app = new Koa();

app.use(
  oas({
    endpoint: "/openapi.json",
    file: path.resolve(process.cwd(), "openapi.yaml"),
    uiEndpoint: "/oas",
    validatePaths: ["/else"],
  })
);
app.use(bodyParser());
app.use(cors())
app.use(router.routes());
app.listen(3000);
