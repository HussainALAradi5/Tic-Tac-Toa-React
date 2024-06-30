import { useState } from "react";

const Square = (props) => {
  
  return (
    <div className="square">
      <button onClick={props.onSquareClick}>{props.value}</button>
 
    </div>
  );
};
export default Square;
