import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container, Typography, Box } from '@mui/material';
import { Provider } from 'react-redux';

import './App.css'
import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'
import store from './store/storee';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Chat Application
          </Typography>
          <MessageList />
          <MessageInput />
        </Box>
      </Container>
    </Provider>
  )
}

export default App
