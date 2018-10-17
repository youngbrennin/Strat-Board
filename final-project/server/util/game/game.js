const Sequelize = require('sequelize');
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
                player1Name: user.name,
                player1hp : 20,
                player1ap : 2
            })
            .then((response) => {
                db.Users
                .find({where : {id : user.id}})
                .then((user) => {
                    user
                        .update({
                            activeGame : response.dataValues.id
                        })
                        .then(() => {
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
                        player2Name : userName,
                        activePlayer : game.dataValues.player1,
                        player2hp : 20,
                        player2ap : 2
                    })
                    .then(() => {
                        db.Users
                            .find({where : {id : userID}})
                            .then((user) => {
                                user.update({
                                    activeGame : gameID
                                })
                                    .then((updateRes) => {
                                        return this.makeDeck(gameID, userID, cb);
                                    })
                            })
                    })
                }
                return cb(false);
            })

        
    },
    loadGame : function(gameID, userID, cb) {
        // console.log('loadGame params ====================>>>>', gameID, userID, cb);
        db.Games
            .find({where : {id : gameID}})
            .then((result) => {
                // console.log('db query =================================' ,result);
                const game = result.dataValues;
                let searchObject = {}
                if(game.player1 === userID) {
                    searchObject = {
                        [Sequelize.Op.or]: [
                            {
                                gameID : gameID,
                                location : "board"
                            },
                            {
                                gameID : gameID,
                                location : "hand",
                                owner : userID
                            }
                        ]
                    }
                }
                else if(game.player2 === userID){
                    searchObject = {
                        [Sequelize.Op.or]: [
                            {
                                gameID : gameID,
                                location : "board"
                            },
                            {
                                gameID : gameID,
                                location : "hand",
                                owner : userID
                            }
                        ]
                    }
                }
                else {
                    searchObject = {
                        gameID : gameID,
                        location : "board"
                    }
                }

                db.Cards
                    .findAll({where : searchObject})
                    .then((result) => {
                        const cards = result;
                        let returnCards = [];
                        cards.forEach(card => {
                            returnCards.push(card.dataValues);
                        });

                        let gameState = {
                            gameID : game.id,
                            player1 : game.player1,
                            player1Name : game.player1Name,
                            player1AP : game.player1ap,
                            player1HP : game.player1hp,
                            player2 : game.player2,
                            player2Name : game.player2Name,
                            player2AP : game.player2ap,
                            player2HP : game.player2AP,
                            activePlayer : game.activePlayer,
                            cards : returnCards
                        }
                        return cb(gameState);
                    })
            })
    }
}

module.exports = game;