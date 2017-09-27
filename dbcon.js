var express = require('express');
var app = express();

app.listen(8080, function() {
    console.log('Nikhil Bot-Server listening on port 8080...');
});

// app.js
const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
  	host: 'localhost',
 	 user: 'root',
 	 password: 'Heathkir1',
  	database: 'Quotes'
});

con.connect((err) => {
  	if(err){
   		 console.log('Error connecting to Db');
   		 return;
  		}
  	console.log('Connection established');
});

var dbResult = con.query('SELECT * FROM quote', (err,rows) => {
	if (err) throw err;
	console.log('Data received from db:\n');
	console.log(rows);
})



app.get('/*', function(req, res) {
   	 var jsonResponse ;
    	jsonResponse.push({"text": dbResult});
	res.send(jsonResponse);
});
   

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

