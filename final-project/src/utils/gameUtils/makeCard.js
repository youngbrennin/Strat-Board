// makeCard factory returns an object for the specified card

const makePath = require('./makePath');
const cardUtil = require('./cardUtil');

const makeCard = function(cardObject, gameObject) {
    this.gameID = cardObject.gameID;
    this.id = cardObject.id;
    this.type = cardObject.type;
    this.owner = cardObject.owner;
    this.x = cardObject.x;
    this.y = cardObject.y;
    this.location = cardObject.location;
    this.gameObject = gameObject;

    this.gameObject.addCardLocation(cardObject)

    if(this.location === "hand") {
        if(this.owner === this.gameObject.player1ID) {
            this.x = 0;
            this.y = 0;
            this.moveType = "fromHand";
        }
        else if(this.owner === this.gameObject.player2ID) {
            this.x = 0;
            this.y = 7;
            this.moveType = "fromHand";
        }
    }
    else {
        this.moveType = this.type;
    }

    this.paths = [];

    this.addPath = function(pathArray){
        // array should contain a series of 2-variable arrays for relative x,y positions
        this.paths.push(pathArray);
    }

    // define paths for all pieces
    switch(this.moveType){
        case "none":
            break;
        case "fromHand":
            makePath.addSegment("move", 2, 0, 4)
            this.addPath(makePath.getAndReset());
            break;
        case "rook":
            makePath.addSegment("standard", 0, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 2, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 4, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 6, 1, 4);
            this.addPath(makePath.getAndReset());
            break;
        case "pawn":
            makePath.addSegment("move", 0, 1, 1);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("attack", 1, 1, 1);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("attack", 7, 1, 1);
            this.addPath(makePath.getAndReset());
            break;
        case "knight":
            this.addPath([{
                type: "standard",
                x: -1,
                y: -2
            }]);
            this.addPath([{
                type: "standard",
                x: -2,
                y: -1
            }]);
            this.addPath([{
                type: "standard",
                x: 1,
                y: -2
            }]);
            this.addPath([{
                type: "standard",
                x: 2,
                y: -1
            }]);
            this.addPath([{
                type: "standard",
                x: 2,
                y: 1
            }]);
            this.addPath([{
                type: "standard",
                x: 1,
                y: 2
            }]);
            this.addPath([{
                type: "standard",
                x: -1,
                y: 2
            }]);
            this.addPath([{
                type: "standard",
                x: -2,
                y: 1
            }]);
            break;
        case "bishop":
            makePath.addSegment("standard", 1, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 3, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 5, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 7, 1, 4);
            this.addPath(makePath.getAndReset());
            break;
        case "king":
            makePath.addSegment("standard", 0, 1, 1);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 2, 1, 1);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 4, 1, 1);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 6, 1, 1);
            this.addPath(makePath.getAndReset());
            break;
        case "queen":
            makePath.addSegment("standard", 1, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 3, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 5, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 7, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 0, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 2, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 4, 1, 4);
            this.addPath(makePath.getAndReset());
            makePath.addSegment("standard", 6, 1, 4);
            this.addPath(makePath.getAndReset());
            break;
    }

    this.getPosition = function() {
        let position = {
            x: this.x,
            y: this.y
        }
        return position;
    }

    this.getValidMoves = function() {
        // Input should be an array of card objects that are on the board
        // This assumes that the cards have a getPosition() method that returns {x: x, y: y}

        let validMoves = [];

        this.paths.forEach(path => {
            let theseMoves = cardUtil.checkPath(this.gameObject.cards, path, this.x, this.y);
            validMoves = validMoves.concat(theseMoves);
        });
        return validMoves;
    }

    this.checkMove = function(x, y) {

    }
}

module.exports = makeCard;
