import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { TaskMainProvider } from './contexts/TaskMainContext'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TaskMainProvider>
        <App />
      </TaskMainProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
