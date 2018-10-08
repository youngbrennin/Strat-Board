import React, { Component } from "react";
import "./Board.css";
import Tile from "../Tile";


class Board extends Component {

    render() {
        const board = [];
        for(let i = 0; i < 8; i++){
          const squareRows = [];
          for(let j = 0; j < 6; j++){
              squareRows.push(<Tile i={i}  j={j}/>)
          }
          board.push(squareRows)
        }

        return (
            <div className="container">
            
                {/* <div className="row"> */}
                <div>
        {board}
      </div>
                    {/* <Tile /> */}
{/* </div> */}
</div>
                )}
                }

export default Board;