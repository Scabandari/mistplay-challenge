'use strict';
const fs = require('fs');
const Game = require('./models/game');

exports.populate_database = (jsonFile) => {
    const games_list = fs.readFileSync(jsonFile);
    const games = JSON.parse(games_list);
    games.forEach(async game => {
        const game_ = new Game(game);
        await game_.save();

    });
};

exports.words_in_sentence = (word_list, sentence) => {
    // return true if any of the words in word_list is in the sentence
    word_list.forEach(word => {
        if(sentence.includes(word)){
            return true;
        }
    });
    return false;
};

exports.id_in_list = (id, list) => {
  // returns true if an object with that id is already in the list
    list.forEach(list_item => {
      if(list_item._id === id) {
          return true;
      }
  });
  return false;
};

