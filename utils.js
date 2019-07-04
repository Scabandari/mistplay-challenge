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
    //console.log(`id: ${id}`);
    list.forEach(list_item => {
      //console.log(`list_item._id: ${list_item._id}`);
      if(list_item._id === id) {
          return true;
      }
  });
  return false;
};

