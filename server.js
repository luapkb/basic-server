'use strict';

require('dotenv').config();
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

app.get('/hello', (req, res) => {res.send('hello paul')});
app.get('/hello/greenterrd', (req, res) => {res.send ('blue')});
app.get('/speedboat', (req, res) => {res.send('a purple goose')});


app.use('*', (request, response) => response.send('the route is bad'));


app.listen(PORT, () => console.log(`app listening on port ${PORT})!`));


