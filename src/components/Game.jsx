import Square from './Square'
import ResultLogic from './ResultLogic'
import { useState } from 'react'
import Logic from './Logic'

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const {
    squares: currentSquares,
    turn,
    handleClick,
    handleRestart
  } = Logic({
    onClickSquare: setSquares
  })

  const winner = ResultLogic(currentSquares)
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${turn ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <div className="status">
        <h1>{status}</h1>
      </div>

      <div className="board">
        {currentSquares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button className="restart" onClick={handleRestart}>
        Restart
      </button>
    </div>
  )
}

export default Game
