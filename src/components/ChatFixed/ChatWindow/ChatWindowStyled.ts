import styled from 'styled-components';

interface DivWindowChatInterface{
    mobile:boolean;
    visible:boolean;
}

const DivWindowChat = styled.div<DivWindowChatInterface>`
  flex-grow: 1;
  display: ${(props => props.visible?'flex':'none')};
  flex-direction: column-reverse;
  box-sizing: border-box;
  
  border-radius: ${(props => props.mobile?'0':'4px')};
  border-top:5px solid #0848C0 ;
  box-shadow: 0 8px 16px rgba(51, 51, 51, 0.2);
  background-color: #fff;
  
  padding:8px 16px 16px 16px;
  max-height: ${(props => props.mobile?'100%':'740px')};

`;
export {DivWindowChat};

