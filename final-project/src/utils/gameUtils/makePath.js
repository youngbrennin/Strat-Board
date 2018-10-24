// This object exists to take inputs and construct arrays of relative x,y coords for the makeCard factory

module.exports = {

    path : [],

    addSegment : function(type, direction, start, end) {
        // type is standard, move, or attack
        // direction is 0-7 clockwise starting at 0 as up
        // start and end is relative to previous step (or origin)

        let xChange = 0;
        let yChange = 0;

        // determine relative change per step
        switch(direction){
            case 0:
                yChange = -1;
                break;
            case 1:
                xChange = 1;
                yChange = -1;
                break;
            case 2:
                xChange = 1;
                break;
            case 3:
                xChange = 1;
                yChange = 1;
                break;
            case 4:
                yChange = 1;
                break;
            case 5:
                xChange = -1;
                yChange = 1;
                break;
            case 6:
                xChange = -1;
                break;
            case 7:
                xChange = -1;
                yChange = -1;
                break;
        }

        // skip to first checked spot
        let nextMove = {
            type: type,
            x: xChange * start,
            y: yChange * start
        }
        this.path.push(nextMove);

        // create object for remaining moves
        let remainingMoves = {
            type: type,
            x: xChange,
            y: yChange
        }

        // add remaining moves
        for(let i = 0; i <= end - start; i++) {
            this.path.push(remainingMoves);
        }
    },
    
    getAndReset : function(){
        let returnPath = this.path;
        this.path = [];
        return returnPath;
    }
}