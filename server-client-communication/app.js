// import fs from 'fs';
// import net from 'net';
var fs = require("fs");
var net = require("net");
var filename = process.argv[2];
var server = net.createServer(function(connection){
    console.log("connected..");
    connection.write(JSON.stringify({
        type: 'watching',
        file: filename
    })+ "\n" );

    var watcher = fs.watch(filename, function(){
        connection.write(JSON.stringify({
            type: "changed",
            file: filename
        }) +"\n");
    });
    connection.on("close", function(){
        console.log("Disconnected..");
        watcher.close();
    });
});

if (!filename){
    throw ERROR('No target filename was Specified');
}

server.listen(1234, function(){
    console.log('Listening for Subscriber...');
});