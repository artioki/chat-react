import React, {useContext} from 'react';
import {DivWindowChat} from "./ChatWindowStyled";
import TextBox from "./TextBox/TextBox";
import InputBox from "./InputBox/InputBox";
import ChatMessage from "./ChatMessage/ChatMessage";
import mobileContext from "../mobileContext";



function ChatWindow({visible=false,inputCallback,messeges}) {
  const mobile = useContext(mobileContext);


  return (
    <DivWindowChat mobile={mobile} visible={visible}>
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