import { useState } from 'react'
import ResultLogic from './ResultLogic'

const Logic = ({ onClickSquare }) => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(true)

  const handleClick = (i) => {
    if (squares[i] || ResultLogic(squares)) return
    const nextSquares = squares.slice()
    nextSquares[i] = turn ? 'X' : 'O'
    setSquares(nextSquares)
    setTurn(!turn)
    onClickSquare(nextSquares)
  }

  const handleRestart = () => {
    setTurn(true)
    setSquares(Array(9).fill(null))
    onClickSquare(Array(9).fill(null))
  }

  return { squares, turn, handleClick, handleRestart }
}

export default Logic
