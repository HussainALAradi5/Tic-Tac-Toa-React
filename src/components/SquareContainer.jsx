import { useState } from "react";
import Square from "./Square";

const SquareContainer = () => {
  const [sqaures, setSquares] = useState([]);
  const [turn, setTurn] = useState(true); //the next turn for x player

  const winnerHandler = (sqaures) => {
    const firstRow = [0, 1, 2];
    const secondRow = [3, 4, 5];
    const thirdRow = [6, 7, 8];
    const firstColumn = [0, 3, 6];
    const secondColumn = [1, 4, 7];
    const thirdColumn = [2, 5, 8];
    const fourthColumn = [0, 4, 8];
    const fifthCoulmn = [2, 4, 6];
    const lines = [
      firstRow,
      secondRow,
      thirdRow,
      firstColumn,
      secondColumn,
      thirdColumn,
      fourthColumn,
      fifthCoulmn,
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        sqaures[a] &&
        sqaures[a] === sqaures[b] &&
        sqaures[a] === sqaures[c]
      ) {
        return sqaures[a];
      }
    }
    return null;
  };
  const winner = winnerHandler(sqaures);
  let status;
  if (winner) {
    status = "winner:" + winner;
  } else {
    status = "this is " + (turn ? "X" : "O")+" turn" ;
  }
  
  const handleClick = (i) => {
    console.log("i=", i);
    if (sqaures[i] || winnerHandler(sqaures)) return;
    const nextSqaures = sqaures.slice();
    if (turn) nextSqaures[i] = "X";
    else nextSqaures[i] = "O";
    setSquares(nextSqaures);
    setTurn(!turn);
  };
const handleRestart=()=>{
  setTurn(true)
  setSquares([])
}
  return (
    <div className="squareContainer">
      <div className="status"> {status}</div>
      <Square  value={sqaures[0]} onSquareClick={() => handleClick(0)} />
      <Square  value={sqaures[1]} onSquareClick={() => handleClick(1)} />
      <Square  value={sqaures[2]} onSquareClick={() => handleClick(2)} />

      <Square value={sqaures[3]} onSquareClick={() => handleClick(3)} />
      <Square value={sqaures[4]} onSquareClick={() => handleClick(4)} />
      <Square value={sqaures[5]} onSquareClick={() => handleClick(5)} />

      <Square value={sqaures[6]} onSquareClick={() => handleClick(6)} />
      <Square value={sqaures[7]} onSquareClick={() => handleClick(7)} />
      <Square value={sqaures[8]} onSquareClick={() => handleClick(8)} />
        <button  className="restrt"onClick={handleRestart}>restart</button>
      

    </div>
  );
};
export default SquareContainer;
