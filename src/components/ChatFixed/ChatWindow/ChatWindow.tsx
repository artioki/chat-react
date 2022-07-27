import React, {useContext,FC} from 'react';
import {DivWindowChat} from "./ChatWindowStyled";
import TextBox from "./TextBox/TextBox";
import InputBox from "./InputBox/InputBox";
import ChatMessage from "./ChatMessage/ChatMessage";
import mobileContext from "../mobileContext";
import messageInterface from "../../../Types/messageInterface";

interface ChatWindowInterface{
    visibleWindow:boolean,
    inputCallback:(message:React.RefObject<HTMLTextAreaElement>)=>void
    messeges:messageInterface[]
}

const ChatWindow:FC<ChatWindowInterface> = ({visibleWindow=false,inputCallback,messeges}) => {
  const mobile = useContext(mobileContext);


  return (
    <DivWindowChat mobile={Boolean(mobile)} visible={visibleWindow}>
      <InputBox inputCallback={inputCallback} />
      <TextBox >
        {messeges.map((elem,idx)=>{
          return <ChatMessage {...elem} key={idx}></ChatMessage>
        })}
      </TextBox>
    </DivWindowChat>
  );
}

export default ChatWindow;