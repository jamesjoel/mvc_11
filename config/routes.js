var express = require('express');
var routes = express.Router();

routes.use("/", require("../controller/home"));
routes.use("/studentWebService", require("../controller/studentWebService"));


module.exports=routes;