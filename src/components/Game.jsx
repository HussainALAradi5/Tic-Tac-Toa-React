import { Box, Button, Text, VStack } from '@chakra-ui/react'
import Square from './Square'
import Logic from './Logic'
import ResultLogic from './ResultLogic'
import { gameContainerStyle, boardStyle, restartButtonStyle } from './styles'

const Game = () => {
  const { squares, handleClick, turn, handleRestart } = Logic()
  const winner = ResultLogic(squares)

  return (
    <VStack {...gameContainerStyle}>
      <Text fontSize="2xl" color="white">
        {winner ? `Winner: ${winner}` : `Next Player: ${turn ? 'X' : 'O'}`}
      </Text>

      <Box {...boardStyle}>
        {squares.map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </Box>

      <Button {...restartButtonStyle} onClick={handleRestart}>
        Restart
      </Button>
    </VStack>
  )
}

export default Game
