var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'Server rodando.'
    response.send(result);
})
.get('/login', function(request, response){
    var result = 'Login'
    response.send(result);	
})
.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});