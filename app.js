const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.sendFile('/human2.html', { root: __dirname });
});

app.listen(3000);