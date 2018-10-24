const makeCard = require('./makeCard');

const makeGame = function(gameObject) {
    // this constructor thingy will become an object containing all card objects.
    // card list can contain non-baord cards, it will handle it correctly.

    const cardsListArray = gameObject.cards;
    this.activePlayer = gameObject.activePlayer;
    this.gameID = gameObject.gameID;
    this.player1ID = gameObject.player1;
    this.player1AP = gameObject.player1AP;
    this.player1HP = gameObject.player1HP;
    this.player1Name = gameObject.player1Name;
    this.player2ID = gameObject.player2;
    this.player2AP = gameObject.player2AP;
    this.player2HP = gameObject.player2HP;
    this.player2Name = gameObject.player2Name;

    this.addCardLocation = function(cardObject) {
        const cardData = {
            id : cardObject.id,
            location : cardObject.location,
            owner : cardObject.owner,
            type : cardObject.type,
            x : cardObject.x,
            y : cardObject.y
        }

        const location = cardObject.location;
        const owner = cardObject.owner;
        const x = cardObject.x;
        const y = cardObject.y;

        if(location === "board") {
            if(!this.cardLocations.board[x]){
                this.cardLocations.board[x] = {};
            }
            this.cardLocations.board[x][y] = cardData;
        }
        else if(location === "hand" && owner === this.player1ID) {
            this.cardLocations.player1Hand.push(cardData)
        }
        else if(location === "hand" && owner === this.player2ID) {
            this.cardLocations.player2Hand.push(cardData)
        }
    }

    this.cardLocations = {
        player1Hand : [],
        player2Hand : [],
        board : {}
    };

    this.cards = [];
    cardsListArray.forEach((card) => {
        this.cards[card.id] = new makeCard(card, this);
    });

    

    this.canActivePlayerAct = function() {
        if(this.activePlayer === this.player1 && this.player1AP > 0 || this.activePlayer === this.player2 && this.player2AP > 0) {
            return true;
        }
        return false;
    }
}

module.exports = makeGame;