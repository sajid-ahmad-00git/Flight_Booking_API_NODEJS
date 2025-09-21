const express = require("express");
const { ServerConfig } = require("./config");

const { apiRouter } = require("./routes");
const app = express();

app.use("/api", apiRouter);
app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on PORT:${ServerConfig.PORT}`);
});
