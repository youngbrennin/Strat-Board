const db = require('../../models');
const game = require('./game');

newGame = function(user, cb) {
    db.Games
        .create({
            player1: user.id,
            player1Name: user.name
        })
        .then((response) => {
            db.Users
            .find({where : {id : user.id}})
            .then((user) => {
                user.update({activeGame : response.dataValues.id})
                    .then((updateRes) => {
                        user.save();
                        return game.makeDeck(response.dataValues.id, user.id, cb);
                    })
            })
        })
}

module.exports = newGame;