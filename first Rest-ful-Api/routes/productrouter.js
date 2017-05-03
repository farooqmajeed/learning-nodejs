var express = require('express');
var bodyParser = require('body-parser');
var mangoose = require('mongoose');
var Products = require('../models/schema');

var productRouter = express.Router();
productRouter.route('/').get(function(req, res){
    Products.find({}, function(err, product){
        if(err) throw err;
        res.json(product);
    });
})
.post(function(req, res){
    Products.create(req.body, function(err, product){
        if(err) throw err;
        console.log('Product Added');
        res.writeHead(200, {'Content-Type':'text/plain'});
        var id = product._id;
        res.end('Added product: ' + id);
    });
})
.delete(function(req, res, next){
    Products.remove({}, function(err, resp){
        if(err) throw err;
        res.json(resp);
    });
});

productRouter.route('/:prId').get(function(req, res, next){
    Products.findById(req.params.prId, function(err, product) {
        if (err) throw err;
        res.json(product);
    });
})
.put(function(req, res, next){
    Products.findByIdAndUpdate(req.params.prId, {
        $set: req.body
    }, {
         new: true
    }, function(err, product) {
        if(err) throw err;
        res.json(product);
    });
})
.delete(function(req, res, netx){
    Products.remove(req.params.prId, function(err, resp){
        if(err) throw err;
        res.json(resp)
    });
});

module.exports = productRouter;