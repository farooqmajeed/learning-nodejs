var events = require("events");
var util = require("util");

LibClient = function(stream){
    events.EventEmitter.call(this);
    var self = this;
    var buffer = '';
    stream.on("data", function(data){
        buffer += data;
        var boundary = buffer.indexOf("\n");
        while(boundary !== -1){
            var input = buffer.substr(0, boundary);
            buffer = buffer.substr(boundary + 1);
            self.emit("message", JSON.parse(input));
            boundary = buffer.indexOf("\n");
        }
    });
};

  util.inherits(LibClient, events.EventEmitter);
  exports.LibClient =LibClient;
  exports.connect = function(stream){
      return new LibClient(stream);
  };