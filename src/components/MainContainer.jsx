import { Box } from '@chakra-ui/react'
import Game from './Game'
import { mainContainerStyle } from './styles'

const MainContainer = () => {
  return (
    <Box {...mainContainerStyle}>
      <Game />
    </Box>
  )
}

export default MainContainer
