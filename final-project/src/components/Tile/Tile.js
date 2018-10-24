import React from "react";
import "./Tile.css";


 const Tile = (props) => {
	
  return (
    <div className="col s1.5">
    <div id="whiteSquare">
        {props.children}
    </div>
</div>

  );

}

export default Tile;