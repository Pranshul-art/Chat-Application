import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import  theme  from '../Theme'

const StyledPaper = styled(Paper)(({  isCurrentUser }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: isCurrentUser ? '20px 20px 0 20px' : '20px 20px 20px 0',
  backgroundColor: isCurrentUser ? theme.palette.primary.main : theme.palette.grey[300],
  color: isCurrentUser ? theme.palette.primary.contrastText : theme.palette.text.primary,
  alignSelf: isCurrentUser ? 'flex-end' : 'flex-start',
  maxWidth: '70%',
}));

const ChatBubble = ({ message, isCurrentUser }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: isCurrentUser ? 'flex-end' : 'flex-start', mb: 1 }}>
      <StyledPaper elevation={1} isCurrentUser={isCurrentUser} >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="caption" display="block" sx={{ mt: 0.5, opacity: 0.7 }}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </Typography>
      </StyledPaper>
    </Box>
  );
};

export default ChatBubble;