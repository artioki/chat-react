import React, {useContext, useState} from 'react';
import {ThemeMobile} from "../ChatFixed";
import {DivWindowChat} from "./ChatWindowStyled";
import TextBox from "./TextBox/TextBox";
import InputBox from "./InputBox/InputBox";
import ChatMessage from "./ChatMessage/ChatMessage";

function ChatWindow({visible=false}) {
  const [messeges, setState] = useState(
    [{key:1,message:"Бродит, говорят, по зоне ходячая " +
        "аномалия — непьющий и некурящий сталкер. Приманивается на запах молочка или " +
        "манной каши. Способ дистанционного обнаружения — на расстоянии 200 метров от объекта " +
        "счетчик Гейгера зашкаливает.",you:false}]);
  const mobile = useContext(ThemeMobile);
  const writeMesage = (element)=>{
    setState(
      [...messeges,{message:element.current.value,you:true}]
    )
  }

  return (
    <DivWindowChat mobile={mobile} visible={visible}>
      <InputBox clabackInput={writeMesage}>

      </InputBox>
      <TextBox >
        {messeges.map((elem)=>{
          return <ChatMessage {...elem}></ChatMessage>
        })}
      </TextBox>
    </DivWindowChat>
  );
}

export default ChatWindow;