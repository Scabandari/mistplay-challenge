const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    genre: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
    },
    subgenre: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    pid: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    rCount: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Game', gameSchema);