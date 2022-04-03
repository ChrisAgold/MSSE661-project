// Initialize express for server
const express = require('express');
const app = express();

// SERVE PUBLIC DIRECTORY
app.use(express.static('public'));

// GET CSS & JS FILES TO SERVER
app.use('/css', express.static(__dirname + '/public/css')); // http://localhost:3000/css
app.use('/js', express.static(__dirname + '/public/src'));

// SERVER START AT PORT 3000
app.listen(3000, function() {
    console.log("Server started at http://localhost:%s", 3000);
});

// RUN node server/index.js IN TERMINAL
// mysqld TO START MYSQL
// lsof -i:3306 SEE IF RUNNING
// kill -9 (NUMBER AFTER MYSQLD)
