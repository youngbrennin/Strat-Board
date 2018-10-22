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