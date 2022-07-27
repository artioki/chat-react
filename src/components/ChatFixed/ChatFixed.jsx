import React, {useState} from 'react';
import {useMediaQuery} from "@mui/material";
import {ChatFixedStyled} from "./ChatFixedStyled";
import ChatWrapper from "./ChatWrapper/ChatWrapper";
import ChatWindow from "./ChatWindow/ChatWindow";
import mobileContext from "./mobileContext";




function ChatFixed({messeges,submitCallback}) {
  const [visibleWindow, setVisibleWindow] = useState(false);
  const mobile = useMediaQuery('(max-width:410px)');

  return (
    <mobileContext.Provider value={mobile}>
      <ChatFixedStyled mobile={mobile}>
        <ChatWindow visible={visibleWindow} messeges={messeges} inputCallback={submitCallback} />
        <ChatWrapper visible={visibleWindow} setVisible={setVisibleWindow}/>
      </ChatFixedStyled>
    </mobileContext.Provider>
  );
}
/**
 * @param {JSX.key} key
 * @param {JSX.Element | string} message
 * @param {undefined | boolean} you
 */
const createMessage = (key,message,you) =>{
  return {key:key,message:message,you:you}
}
export default ChatFixed;
export {createMessage}