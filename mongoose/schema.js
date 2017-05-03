var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;

var learningSchema = new Schema ({
    topic: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true,
    }
})

var Learning = mongoose.model('learning', learningSchema);
module.exports = Learning;