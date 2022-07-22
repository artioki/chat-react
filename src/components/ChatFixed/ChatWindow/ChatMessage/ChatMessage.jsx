import React from 'react';
import {StyledBotMessage, StyledMessage} from "./ChatMessageStyled";



function ChatMessage({message,you}) {
  return (
    typeof you !== 'undefined'
      ?
      <StyledMessage you={you}>
        <div className={'grow'}/>
        <div className={'message'}>
          {message}
        </div>
      </StyledMessage>
      :
      <StyledBotMessage>
        {message}
      </StyledBotMessage>

  );
}


export default ChatMessage;
