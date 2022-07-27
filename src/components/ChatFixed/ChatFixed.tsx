import React, {useState,FC} from 'react';
import {useMediaQuery} from "@mui/material";
import {ChatFixedStyled} from "./ChatFixedStyled";
import ChatWrapper from "./ChatWrapper/ChatWrapper";
import ChatWindow from "./ChatWindow/ChatWindow";
import mobileContext from "./mobileContext";
import messageInterface from "../../Types/messageInterface";


interface chatFixedInterface{
    messages:messageInterface[],
    submitCallback:(message:React.RefObject<HTMLTextAreaElement>)=>void
}

const ChatFixed:FC<chatFixedInterface> = ({messages,submitCallback}) =>{
  const [visibleWindow, setVisibleWindow] = useState(false);
  const mobile = useMediaQuery('(max-width:410px)');

  return (
    <mobileContext.Provider value={mobile}>
      <ChatFixedStyled mobile={mobile}>
        <ChatWindow visibleWindow={visibleWindow} messeges={messages} inputCallback={submitCallback} />
        <ChatWrapper visibleWindow={visibleWindow} setVisibleWindow={setVisibleWindow}/>
      </ChatFixedStyled>
    </mobileContext.Provider>
  );
}

const createMessage = (key: any, message: any, you: any) =>{
  return {key:key,message:message,you:you}
}
export default ChatFixed;
export {createMessage}