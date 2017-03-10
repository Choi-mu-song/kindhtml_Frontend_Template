'use strict';
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: '203.225.59.177,23306',
//     user: 'grpark',
//     password: 'grpark@12!',
//     database: 'grpark'
// });

// connection.connect();

// connection.query('SELECT * from board', function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
// });

// connection.end();
// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('Hello World!');
// });

// app.listen(3000, function(){
//   console.log('Example app listening on port 3000!')
// });

var sql = require('mssql');

var config = {
    user: 'groupdb_admin',
    password: 'smartadmin@12!',
    server: '203.225.59.70,3008',
    database: '기타',
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}

var connection = new sql.Connection(config, function (err) {
    // ... error checks 
    
    // Query 
    console.log("Hello npm start!!!");
    var request = new sql.Request(connection); 
    request.query('SELECT * FROM tb_survey_2017', function (err, recordset) {
        // ... error checks 
        
        console.dir(err);
    });
    
    // Stored Procedure 
    
    var request = new sql.Request(connection);
    request.input('input_parameter', sql.Int, 10);
    request.output('output_parameter', sql.VarChar(50));
    request.execute('procedure_name', function (err, recordsets, returnValue) {
        // ... error checks 
        
        console.dir(recordsets);
    });
    
});

connection.on('error', function (err) {

  console.log("ERROR");
	// ... error handler 
});