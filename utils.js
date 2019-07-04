'use strict';
const fs = require('fs');
const Game = require('./models/game');

exports.populate_database = (jsonFile) => {
    //console.log("Working");
    const games_list = fs.readFileSync(jsonFile);
    const games = JSON.parse(games_list);
    // console.log(`games length: ${games.length}`);
    // console.log(`games[0]: ${JSON.stringify(games[0], null, 2)}`);
    games.forEach(async game => {
        const game_ = new Game(game);
        await game_.save();

    });
};


// const game = new Game(req.query);
// game.save().then(game => {
//     res.status(200).json(game);
// }).catch(err =>{
//     res.status(400).json({
//         "Error msg": `Could not create model instance. Bad query: ${JSON.stringify(req.query)}`,
//         "err": err
//     });
// });