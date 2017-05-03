var mongoose = require('mongoose');
var assert = require('assert');
var Learning = require('./schema.js');

var url = 'mongodb://localhost:27017/MyDb';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
     console.log('connected');
 });

 var newTopic = Learning({
     topic: 'NodeJs',
     description: 'Server Side Javascript'
 });
newTopic.save(function(err){
    if(err) throw err;
    Learning.find({}, function(err, data){
        if(err) throw err;
        console.log(data)
    });
});
 

