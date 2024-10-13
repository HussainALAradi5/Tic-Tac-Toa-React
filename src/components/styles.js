const appStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  bg: 'gray.800',
  p: 4
}

const mainContainerStyle = {
  bg: 'gray.700',
  p: 6,
  borderRadius: 'lg',
  boxShadow: 'lg',
  maxW: '400px'
}

const gameContainerStyle = {
  spacing: 4,
  bg: 'gray.700',
  p: 6,
  borderRadius: 'md',
  boxShadow: 'lg',
  align: 'center'
}

const boardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 2,
  width: '300px'
}

const squareStyle = {
  aspectRatio: '1',
  backgroundColor: 'blue.500',
  color: 'white',
  fontSize: '3rem',
  borderRadius: 'md',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  _hover: {
    backgroundColor: 'blue.700',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer'
  }
}

const restartButtonStyle = {
  mt: 4,
  colorScheme: 'blue',
  size: 'lg',
  boxShadow: 'md'
}

export {
  appStyle,
  mainContainerStyle,
  gameContainerStyle,
  boardStyle,
  squareStyle,
  restartButtonStyle
}
