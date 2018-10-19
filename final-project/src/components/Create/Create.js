import React from "react";
import "./Create.css";
import api from "../../utils/api";

const CreateButton = (props) => {

    this.createGame = () => {
        api.createGame()
            .then((created) => {
                if(created) {
                    props.getGames();
                    props.getUser();
                }
                else {
                    props.getUser();
                }
            });
    }

    return (
    <div className="row center-align">
        <button onClick={this.createGame}>CREATE</button>
    </div>
    )
}

export default CreateButton;