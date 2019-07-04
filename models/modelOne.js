const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelOneSchema = new Schema({
    string_: {
        type: String,
        required: true,
        default: 'string info'
    },
    number_: {
        type: String,
        required: true,
        default: 42
    },
    date_time: {
        type: String,
        required: true,
        default: Date.now()
    },

});

module.exports = mongoose.model('ModelOne', modelOneSchema);