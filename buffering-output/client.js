var net = require("net");
var lib = require("./lib");

var netClient = net.connect({ port: 1234 });
var libClient = lib.connect(netClient);

libClient.on('message', function(message){
    if (message.type === 'watching'){
         console.log("Now watching: " + message.file);
    }
    else if (message.type === 'changed'){
        console.log(" File '" + message.file + "' changed");
    }
    else {
        throw Error(" Unrecognized message type: " + message.type)
    }
});