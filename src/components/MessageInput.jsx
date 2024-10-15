import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sendMessage,receiveMessage } from '../store/ChatSlice';


const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim()) {
      dispatch(sendMessage(message));
      setMessage('');
      
      // Simulate receiving a message after a delay
      setTimeout(() => {
        dispatch(receiveMessage('This is a simulated response'));
      }, 1000);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
      />
      <Button variant="contained" onClick={handleSend} sx={{ ml: 1 }}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;