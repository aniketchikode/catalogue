const express = require("express");
const bodyParser = require("body-parser");

require("./app/config/db.config.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 27017;

require('./app/route/route.js')(app);

app.get("/", (req, res) => res.send("Running"));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
