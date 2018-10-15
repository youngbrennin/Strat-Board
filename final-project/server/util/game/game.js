const db = require('../../models');

const game = {
    defaultCards : [
        "pawn",
        "pawn",
        "pawn",
        "pawn",
        "pawn",
        "pawn",
        "pawn",
        "pawn",
        "knight",
        "knight",
        "bishop",
        "bishop",
        "rook",
        "rook",
        "queen",
        "king"
    ],
    makeDeck : function(gameID, user, cb) {
        let queryArray = [];
        this.defaultCards.forEach((card) => {
            queryArray.push({
                type : card,
                owner : user,
                gameID : gameID,
                location : "deck"
            })
        });
        db.Cards.bulkCreate(queryArray)
            .then(() => {
                return cb(true);
            })
    },
    newGame : function(user, cb) {
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
                            return this.makeDeck(response.dataValues.id, user.id, cb);
                        })
                })
            })
    },
    joinGame : function(userID, userName, gameID, cb) {
        db.Games
            .find({where : {id : gameID}})
            .then((game) => {
                if(game.dataValues.player2 === null){
                    game.update({
                        player2 : userID,
                        player2Name : userName
                    })
                    .then(() => {
                        db.Users
                            .find({where : {id : userID}})
                            .then((user) => {
                                user.update({activeGame : gameID})
                                    .then((updateRes) => {
                                        user.save();
                                        return this.makeDeck(gameID, userID, cb);
                                    })
                            })
                    })
                }
                return cb(false);
            })

        
    }
}

module.exports = game;