import { ChakraProvider, Box } from '@chakra-ui/react'
import MainContainer from './components/MainContainer'
import { appStyle } from './components/styles'

function App() {
  return (
    <ChakraProvider>
      <Box {...appStyle}>
        <MainContainer />
      </Box>
    </ChakraProvider>
  )
}

export default App
