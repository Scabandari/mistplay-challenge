const Game = require('../models/game');
const utils = require('../utils');

exports.game_create = (req, res) => {
    const game = new Game(req.query);
    game.save().then(game => {
        res.status(200).json(game);
    }).catch(err =>{
        res.status(400).json({
            "Error msg": `Could not create model instance. Bad query: ${JSON.stringify(req.query)}`,
            "err": err
        });
    });
};

exports.game_list = (req, res) => {
    Game.find({}).then(games => {
        res.status(200).send(games);
    }).catch(err => {
        res.status(406).json({
            "Error msg": "No model_ones found",
            "err": err
        });
    });
};

exports.game_detail = (req, res) => {
    const { gameId } = req.params;
    Game.findById(gameId).then(game => {
        res.status(200).json(game);
    }).catch(err => {
        res.status(406).json({
            "Error msg": `No game found with id: ${gameId}`,
            "err": err
        });
    });
};

exports.game_search = async (req, res) => {
    let { keywords } = req.query;
    keywords = keywords.map(keyword => keyword.toLowerCase());

    // TODO there should be a mongoose query that makes this all a breeze
    const games = await Game.find({});
    const search_results = [];
    games.forEach(game => {
        keywords.forEach(keyword => {
            const lowercase_title = game.title.toLowerCase();
            if(lowercase_title.includes(keyword)) {
               //search_results.push(game);  // TODO naive and doesnt check if it's already in list
               if(!utils.id_in_list(game._id, search_results)){
                   search_results.push(game);
               }
           }
        });
    });

    //TODO would be better to not add repeats in the first place, see above todo
    // https://wsvincent.com/javascript-remove-duplicates-array/
    const response = [...new Set(search_results)];
    console.log(`response: ${JSON.stringify(response, null, 2)}`);
    res.json(response);
};