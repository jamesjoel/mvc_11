var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "Home Page", pagename : "home/index", appName : "myApp", angularFileName : "/js/app.js"};
	res.render("layout", pageData);
});


module.exports=routes;