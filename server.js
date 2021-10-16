// 3rd parties
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// Application
const routes = require("./src/routes");
const json = require("./package.json");

const app = express();
const port = process.env.PORT_SERVER;
console.log(port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).json({
    name: json.name,
    version: json.version,
    status: json.status,
  });
});
app.use("/", routes);

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
