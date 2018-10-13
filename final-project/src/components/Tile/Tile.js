import React from "react";
import "./Tile.css";


 const Tile = (props) => {
	
  return (
    <div className="col s1.5">
    <div id="whiteSquare" className="card-panel"> 
        <span> {props.i} X {props.j}
</span>
    </div>
</div>

  );

}

export default Tile;