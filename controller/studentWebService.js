var express = require('express');
var routes = express.Router();
var student = require("../model/student");

routes.get("/getAll", function(req, res){
	student.find(function(err, result){
		res.send(result);
	});
});


module.exports=routes;