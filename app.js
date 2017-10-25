const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

app.get('/', (req, res) => {
	res.sendFile('/human2.html', { root: __dirname });
});

app.use(express.static((__dirname + '/static')));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.post("/clothes", function(req, res){
	res.sendFile("/"+req.body.clothing, { root: __dirname });
});

app.listen(process.env.PORT || 3000);