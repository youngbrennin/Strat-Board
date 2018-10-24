import React, { Component } from "react";
import "./Board.css";
import Cards from "../Cards/Cards";
import Tile from "../Tile";


const Board = (props) => {

    const board = [];
    let tileJSX = "";
    for (let y = 0; y < 8; y++) {
        const squareRows = [];
        for (let x = 0; x < 6; x++) {
            if(props.cards[x] && props.cards[x][y]){
                let card = props.game.cards[props.cards[x][y].id];
                tileJSX = <Tile x={x} y={y}>
                    <Cards
                        key = {card.id}
                        id = {card.id}
                        owner = {card.owner}
                        type = {card.type}
                        damage = {card.damage}
                        activePlayer = {props.activePlayer}
                        loggedInPlayer = {props.loggedInPlayer}
                        game = {props.game} />
                </Tile>
            }
            else {
                tileJSX = <Tile x={x} y={y} />
            }
            squareRows.push(tileJSX);console.log(tileJSX)
        }
        board.push(squareRows)
    }

    return (
        <div className="container">

            <div>
                {board}
            </div>

        </div>
    )
}

export default Board;