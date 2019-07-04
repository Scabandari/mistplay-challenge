const Game = require('../models/game');

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