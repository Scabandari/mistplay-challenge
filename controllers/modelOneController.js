const ModelOne = require('../models/modelOne');

exports.model_one_create = (req, res) => {
    const model_one = new ModelOne(req.query);
    model_one.save().then(model_one => {
        res.status(200).json(model_one);
    }).catch(err =>{
        res.status(400).json({
            "Error msg": `Could not create model instance. Bad query: ${JSON.stringify(req.query)}`,
            "err": err
        });
    });
};

exports.model_one_list = (req, res) => {
    ModelOne.find({}).then(model_ones => {
        res.status(200).send(model_ones);
    }).catch(err => {
        res.status(406).json({
            "Error msg": "No model_ones found",
            "err": err
        });
    });
};