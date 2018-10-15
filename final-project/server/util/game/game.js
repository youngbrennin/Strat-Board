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
    }
}

module.exports = game;