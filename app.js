const express = require('express');
const app = express();
const path = require('path');
var io = require('socket.io');
var verbose = false;
var UUID = require('node-uuid');
var bodyParser = require('body-parser');

app.get('/', (req, res) => {
	res.sendFile('/human2.html', { root: __dirname });
});
//just use a different route
app.get("/world", function(req, res, next){
	var file = req.params[0];
	if(verbose) console.log('express requested');
	res.sendFile(__dirname + "/" + file);
});

app.use(express.static((__dirname + '/static')));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.post("/clothes", function(req, res){
	res.sendFile("/"+req.body.clothing, { root: __dirname });
});
app.post("/world", function(req, res){
	res.sendFile("/"+req.body.world, { root: __dirname });
});


app.listen(process.env.PORT || 3000);