import React from "react";
import "./Tile.css";


 const Tile = (props) => {
	
  return (
    <div className="col s1.5">
    <div id="whiteSquare" className="card-panel"> 
        <span> {props.x} X {props.y}</span>
        {props.children}
    </div>
</div>

  );

}

export default Tile;