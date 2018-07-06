var express = require('express');
var routes = express.Router();

routes.use("/", require("../controller/home"));
routes.use("/studentWebService", require("../controller/studentWebService"));
routes.use("/demoWebService", require("../controller/demoWebService"));


module.exports=routes;