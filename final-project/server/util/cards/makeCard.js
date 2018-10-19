// makeCard factory returns an object for the specified card

const makePath = require('./makePath');
const cardUtil = require('./cardUtil');

const makeCard = function(x, y, cardName = "none") {
    this.x = x;
    this.y = y;

    this.paths = [];

    this.addPath = function(pathArray){
        // array should contain a series of 2-variable arrays for relative x,y positions
        this.paths.push(pathArray);
    }

    // define paths for all pieces
    switch(cardName){
        case "none":
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

    this.getValidMoves = function(cardArray) {
        // Input should be an array of card objects that are on the board
        // This assumes that the cards have a getPosition() method that returns {x: x, y: y}

        let validMoves = [];

        this.paths.forEach(path => {
            let theseMoves = cardUtil.checkPath(cardArray, path, this.x, this.y);
            validMoves = validMoves.concat(theseMoves);
        });
        console.log(validMoves)
        return validMoves;
    }
}

module.exports = makeCard;

let cardArray = [new makeCard(0, 1)];
let thisCard = new makeCard(3,1,"rook");
thisCard.getValidMoves(cardArray);

// path array format
// [
//     {
//         type: "move",
//         x: 1,
//         y: 0
//     },
//     {
//         type: "attack",
//         x: -1
//     }
// ]