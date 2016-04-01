/**
 * Created by deeptaco on 4/1/16.
 */
var express = require('express'),
    app = express();

app.get('/', function(req, res){
    console.log('Request body');
    console.log(req.body);
    res.send({message:"yo that's dope"});
});

app.listen(80, function() {
    console.log("Listening on port 80");
});

