const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useFindAndModify: false });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./models/modelOne');

const modelOneRoutes = require('./routes/modelOneRoutes');

app.use('/modelOnes', modelOneRoutes);


app.get('*', (req, res, next) => {
    const err = new Error('Page not found');
    err.statusCode = 404;
    next(err);
});

const port = 4000;
app.listen(port, () => {
    console.log(`NodeJs server running on port ${port}`);
});

module.exports = app;
