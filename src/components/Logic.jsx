import { useState } from 'react'

const Logic = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(true)

  const handleClick = (i) => {
    if (squares[i]) return
    const newSquares = squares.slice()
    newSquares[i] = turn ? 'X' : 'O'
    setSquares(newSquares)
    setTurn(!turn)
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null))
    setTurn(true)
  }

  return { squares, handleClick, turn, handleRestart }
}

export default Logic
