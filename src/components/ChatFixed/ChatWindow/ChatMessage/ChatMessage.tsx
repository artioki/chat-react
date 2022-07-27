import React,{FC} from 'react';
import {StyledBotMessage, StyledMessage} from "./ChatMessageStyled";
import messageInterface from "../../../../Types/messageInterface";



const ChatMessage:FC<messageInterface> = ({message,you}) => {
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
