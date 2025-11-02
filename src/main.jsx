import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Import ChakraProvider
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap your App in the ChakraProvider */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)