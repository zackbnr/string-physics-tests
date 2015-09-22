var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(process.env.PORT || 1337, function() {
    console.log('App is listening.');
});
