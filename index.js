const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
//const utils = require('./utils');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useFindAndModify: false });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./models/game');

const gameRoutes = require('./routes/gameRoutes');

app.use('/games', gameRoutes);


app.get('*', (req, res, next) => {
    const err = new Error('Page not found');
    err.statusCode = 404;
    next(err);
});

const port = 4000;
app.listen(port, () => {
    console.log(`NodeJs server running on port ${port}`);
});

// This function should only be run once
// utils.populate_database('games.json');

module.exports = app;
