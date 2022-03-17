const express = require('express');
const app = express();

// SERVE PUBLIC DIRECTORY
app.use(express.static('public'));

app.listen(3000, function() {
    console.log("Server started at http://localhost:%s", 3000);
});





