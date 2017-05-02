var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan')

var app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: 'secretkey', saveUninitialized: true, resave: true, cookie: {maxAge: 30000}}));

app.get('/', function(req, res, next) {
    if (req.session.views){
        req.session.views++;
            res.setHeader('Content-Type', 'text/html')
            res.write('<p>views: '+ req.session.views +'</p>')
            res.write('<p> Expires in:'  + (req.session.cookie.maxAge / 1000) + 's</p>')
            res.end()
    
    }   else {
        req.session.views = 1
        res.end('Refresh Page!')
    } 

});
   
 
app.listen(3000, function(){
console.log('server started....');
});
    
