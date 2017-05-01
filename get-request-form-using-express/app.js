var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/form', function(req, res) {
    res.sendFile(__dirname + "/" + "form.html");
});
 
app.get('/process_get', function(req, res){
    response = {
        firstname: req.query.firstname,
        lastname: req.query.lastname
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(7000, function(){
    var host = server.address().address ;
    var port = server.address().port;
    console.log("app listen at http://%s:%s", host, port);
});