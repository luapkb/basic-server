'use strict';

require('dotenv').config();
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {res.send('hello paul')});

app.listen(PORT, () => console.log(`app listening on port ${PORT})!`));

