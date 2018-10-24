const Sequelize = require('sequelize');
const db = require('../../models');
const makeGame = require('../../../src/utils/gameUtils/makeGame');

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
        return new Promise((resolve, reject) => {
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
                    resolve(true);
                })
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
                            activeGame : response.dataValues.id,
                            player1hp : 20,
                            player1ap : 2
                        })
                        .then(() => {
                            user.save();
                            this.makeDeck(response.dataValues.id, user.id)
                                .then((status) => {
                                    return cb(status);
                                })
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
                                        this.makeDeck(gameID, userID)
                                            .then((status) => {
                                                this.drawToFive(gameID, game.dataValues.player1);
                                                this.drawToFive(gameID, userID);
                                                return cb(true);
                                            })
                                    })
                            })
                    })
                }
                return cb(false);
            })

        
    },
    loadGame : function(gameID, userID, cb) {
        db.Games
            .find({where : {id : gameID}})
            .then((result) => {
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
							player2HP : game.player2hp,
							activePlayer : game.activePlayer,
							cards : returnCards
                        }
                        return cb(gameState);
                    })
            })
    },
    drawToFive : function(gameID, userID) {
        db.Games
            .find({where : {id : gameID}})
            .then((result) => {
                const game = result.dataValues;
                if(game.player1 === userID || game.player2 === userID) {
                    db.Cards
                        .findAll({where : {
                            gameID : gameID,
                            location : "hand",
                            owner : userID
                        }})
                        .then((result) => {
                            let cardsInHand = result.length;

                            db.Cards
                                .findAll({where : {
                                    gameID : gameID,
                                    location : "deck",
                                    owner : userID
                                }})
                                .then((result) => {
                                    const cards = result;
                                    let selectedCard = {};
                                    let newCards = [];
                                    while(cardsInHand < 5) {
                                        selectedCardID = Math.floor(Math.random() * cards.length - 1);
                                        selectedCard = cards.splice(selectedCardID, 1);
                                        newCards.push(selectedCard[0].dataValues.id);
                                        cardsInHand++;
                                    } 
                                    db.Cards
                                        .update({
                                            location : "hand"
                                        }, {
                                            where: {id : newCards}
                                        })
                                        .then((result) => {
                                            return result;
                                        })
                                });
                        });
                }
            });
    },
    getGameObject : function(gameID, userID) {
        const gameData = this.loadGame(gameID, userID);
        const gameObject = makeGame(gameData);
        return gameObject;
    }
}

module.exports = game;