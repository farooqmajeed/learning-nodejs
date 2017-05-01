var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('GOt a get request for Home');
});
app.get('/aboutus', function(req, res){
    console.log(" Got a get request for About us")
    res.send('About us');
});

app.get('/*list', function(req, res){
    console.log(" Got a get request for List ")
    res.send('Depart List');
});
var server = app.listen(7000, function(){
    var host = server.address().address ;
    var port = server.address().port;
    console.log("app listen at http://%s:%s", host, port);
});