import React, { useEffect, useRef } from 'react';
import { Box, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ChatBubble from './ChatBubble';

const MessageList = () => {
  const messages = useSelector((state) => state.chat.messages);
  const currentUser = useSelector((state) => state.chat.currentUser);
  const listRef = useRef(null);
  const nodeRefs = useRef(new Map());

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        height: '400px', 
        overflowY: 'auto', 
        p: 2, 
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
      ref={listRef}
    >
      <TransitionGroup>
        {messages.map((message) => {
          const nodeRef = nodeRefs.current.get(message.id) || React.createRef();
          nodeRefs.current.set(message.id, nodeRef);

          return (
            <CSSTransition
              key={message.id}
              timeout={300}
              classNames="fade"
              nodeRef={nodeRef}
            >
              <div ref={nodeRef}>
                <ChatBubble 
                  message={message} 
                  isCurrentUser={message.sender.id === currentUser.id} 
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Paper>
  );
};

export default MessageList;
