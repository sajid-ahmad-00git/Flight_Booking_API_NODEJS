const express = require("express");
const { infoRouter } = require("./info-route");

const v1Router = express.Router();

v1Router.use("/info", infoRouter);

module.exports = { v1Router };
