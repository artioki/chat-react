import React, {useState} from 'react';
import {useMediaQuery} from "@mui/material";
import {ChatFixedStyled} from "./ChatFixedStyled";
import ChatWrapper from "./ChatWrapper/ChatWrapper";
import ChatWindow from "./ChatWindow/ChatWindow";

const ThemeMobile = React.createContext();

function ChatContainer() {
  const [visible, setVisible] = useState(false);
  const mobile = useMediaQuery('(max-width:600px)');
  return (
    <ThemeMobile.Provider value={mobile}>
      <ChatFixedStyled mobile={mobile}>
        <ChatWindow visible={visible}>

        </ChatWindow>
        <ChatWrapper visible={visible} setVisible={setVisible}>

        </ChatWrapper>
      </ChatFixedStyled>
    </ThemeMobile.Provider>
  );
}

export default ChatContainer;
export {ThemeMobile}