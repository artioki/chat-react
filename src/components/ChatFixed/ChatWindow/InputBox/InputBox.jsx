import React, {useCallback, useRef, useState} from 'react';
import {ContainerInputBox, Textarea,Button} from "./InputBoxStyled";
import * as PropTypes from "prop-types";
import Picker from "emoji-picker-react";


Picker.propTypes = {
  onEmojiClick: PropTypes.any,
  pickerStyle: PropTypes.shape({
    top: PropTypes.string,
    display: PropTypes.any,
    width: PropTypes.string,
    height: PropTypes.string
  })
};

function InputBox({clabackInput}) {
  const [isText, setIsText] = useState(false);
  const refInput = useRef(null);
  const [chosenEmoji, setChosenEmoji] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    refInput.current.value += emojiObject.emoji;
    resize()
  };

  const resize = () => {
    let getElement = refInput.current
    let istext = Boolean(getElement.value)
    if(istext !== isText){
      setIsText(istext);
    }
    getElement.style.height = "21px";
    getElement.style.height = getElement.scrollHeight+"px"
  }
  const ClickHandler = useCallback(
    () => {
      clabackInput(refInput);
      refInput.current.value = "";
      setIsText(false)
      refInput.current.style.height = "20px";
    },
    [clabackInput,refInput],
  );
  return (
    <ContainerInputBox onInput={resize} rows="1" >
      <Button onClick={()=>setChosenEmoji(state => !state)}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5ZM9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="#9EA4AC"/>
          <path d="M13.4441 11.2297C12.6606 12.7452 11.1507 13.5001 8.99998 13.5001C6.84925 13.5001 5.3394 12.7452 4.55584 11.2297C4.42901 10.9845 4.52504 10.6828 4.77034 10.556C5.01563 10.4291 5.3173 10.5252 5.44412 10.7705C6.03938 11.9217 7.19619 12.5001 8.99998 12.5001C10.8038 12.5001 11.9606 11.9217 12.5558 10.7705C12.6827 10.5252 12.9843 10.4291 13.2296 10.556C13.4749 10.6828 13.571 10.9845 13.4441 11.2297Z" fill="#9EA4AC"/>
          <path d="M7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z" fill="#9EA4AC"/>
          <path d="M11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8Z" fill="#9EA4AC"/>
        </svg>
        <Picker disableSearchBar={true}  pickerStyle={{top:'-330px',display:chosenEmoji?'flex':'none',width:'300px',height:'300px'}} onEmojiClick={onEmojiClick} />
      </Button>
      <Textarea ref={refInput} placeholder={'Введите сообщение...'}>
      </Textarea>
      {isText
        ?
        <Button onClick={ClickHandler}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9861 8.06126C15.5068 9.4038 0.330127 16.8054 0.121044 15.928C-0.320484 14.075 0.517936 10.2426 1.47202 9.58692C2.14386 9.12522 5.86055 8.4263 9.36581 7.99986C5.86123 7.57339 2.14605 6.87468 1.47436 6.41308C0.520271 5.75741 -0.31815 1.92503 0.123378 0.0720454C0.335815 -0.819501 16 6.83582 16 7.99862C16 8.02056 15.9953 8.04143 15.9861 8.06126Z" fill="#0848C0"/>
          </svg>
        </Button>
        :null}
    </ContainerInputBox>
  );
}

export default InputBox;