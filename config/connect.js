var mysql = require('mysql');
module.exports.mysqlCon = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "tss_11"
});
