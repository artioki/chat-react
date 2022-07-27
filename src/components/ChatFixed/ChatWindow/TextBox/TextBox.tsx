import React from 'react';
import {DivText} from './TextBoxStyled';
function TextBox({children}) {
  return (
    <DivText >
      <div/>
      {children}
    </DivText>
  );
}

export default TextBox;
