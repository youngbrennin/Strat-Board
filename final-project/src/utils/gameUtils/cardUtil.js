module.exports = {
    cardsToTiles : function(cardList) {
        const tileList = {};
    
        cardList.forEach(card => {
            if(tileList[card.x] === undefined){
                tileList[card.x] = {}
            }
            tileList[card.x][card.y] = true;
        });

        return tileList;
    },
    checkPath : function(cardArray, path, originX, originY) {
        const tileArray = this.cardsToTiles(cardArray);

        const returnTiles = [];

        var relativeX = originX;
        var relativeY = originY;

        path.forEach(thisSpot => {
            relativeX += thisSpot.x;
            relativeY += thisSpot.y;
            let mapSpot = false;
            if(tileArray[relativeX] === undefined) {
                mapSpot = false;
            }
            else if(tileArray[relativeX][relativeY] === true) {
                mapSpot = true;
            }


            if(relativeX < 0 || relativeY < 0) {
                return returnTiles;
            }
            if(mapSpot !== true && thisSpot.type === "standard" || thisSpot.type === "move") {
                returnTiles.push({
                    type : "move",
                    x : relativeX,
                    y : relativeY
                });
            }
            else if(mapSpot === true && thisSpot.type === "standard" || thisSpot.type === "attack") {
                returnTiles.push({
                    type : "take",
                    x : relativeX,
                    y : relativeY
                });
            }
            else {
                return returnTiles;
            }
        });
        return returnTiles;
    }
}



// [
//     {
//         x: X_COORD,
//         y: Y_COORD
//     }
// ]