const express = require("express");

const infoRouter = express.Router();

infoRouter.get("/", (req, res) => {
  return res.json({
    msg: "successfully hitted the info route",
  });
});

module.exports = { infoRouter };
