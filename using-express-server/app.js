var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Learning NodeJs');
});

var server = app.listen(7000, function(){
    var host = server.address().address ;
    var port = server.address().port;
    console.log("app listen at http://%s:%s", host, port);
});