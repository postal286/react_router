var path = require('path');
var express = require('express');

var app = express();

const PORT = process.env.PORT || 9000;

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.listen(PORT, function() {
	console.log('listening on ' + PORT);
});