import { Box } from '@chakra-ui/react'
import { squareStyle } from './styles'

const Square = ({ value, onClick }) => {
  return (
    <Box {...squareStyle} onClick={onClick}>
      {value}
    </Box>
  )
}

export default Square
