// 3rd parties
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// Application
const routes = require("./src/routes");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
