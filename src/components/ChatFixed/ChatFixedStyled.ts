import styled from 'styled-components';

interface ChatFixedStyledInterface{
    mobile:boolean;
}

const ChatFixedStyled = styled.div`
  & *{
    font-family:'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
  
  position:fixed;
  display: flex;
  right: 0;
  bottom: 0;
  justify-content:flex-end;
  flex-direction: column;
  margin:${((props:ChatFixedStyledInterface) => props.mobile?'0':'15px')};
  height:${((props:ChatFixedStyledInterface) => props.mobile?'100%':'calc(100vh - 30px)')};
  width:${((props:ChatFixedStyledInterface) => props.mobile?'100%':'380px')};
  & > * + *{
    margin-top: ${((props:ChatFixedStyledInterface) => props.mobile?'0':'15px')};
  }
`;



export { ChatFixedStyled };
