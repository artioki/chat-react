import React from 'react';
import {DivText} from "./TextBoxStyled";
function TextBox({children}) {
  return (
    <DivText >
      {children}
    </DivText>
  );
}

export default TextBox;