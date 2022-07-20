import React from 'react';
import {StyledMessage} from "./ChatMessageStyled";

function ChatMessage({key,message,you}) {
  return (
    <StyledMessage key={key} you={you}>
      <div className={'grow'}>

      </div>
      <div className={'message'}>
        {message}
      </div>
    </StyledMessage>
  );
}


export default ChatMessage;