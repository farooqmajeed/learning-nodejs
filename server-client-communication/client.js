var net = require("net");
var client = net.connect({port: 1234});

client.on("data", function(data){
    var message = JSON.parse(data);
    if(message.type === "watching"){
        console.log("NOW watching: " + message.file);
    }
    else if (message.type === "changed") {
        console.log("File '" + message.file + "'changed");
    }
    else {
        throw Error("Unrecognized message type: " + message.type);
    }
});