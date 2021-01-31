"use strict";
const express = require('express')
const bodyParser = require('body-parser')
const router = require("./routes/api");
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(router);
app.listen(8080);
