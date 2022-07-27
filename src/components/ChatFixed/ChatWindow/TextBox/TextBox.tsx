import React,{FC}from 'react';
import {DivText} from './TextBoxStyled';

interface ChatWindowInterface{
    children:React.ReactNode;
}
const TextBox:FC<ChatWindowInterface> = ({children}) => {
  return (
    <DivText >
      <div/>
      {children}
    </DivText>
  );
};

export default TextBox;
