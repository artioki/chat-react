import styled from "styled-components";

interface StyledMessageInterface{
    you:boolean;
}
const StyledMessage = styled.div<StyledMessageInterface>`
  display: flex;
  flex-direction: ${(props)=>props.you?' row' : 'row-reverse'};
  margin: 10px;
  
  & .message{
    display: inline-block;
    
    padding: 6px 12px;
    
    border-radius: 8px;
    box-shadow: 0 0 1px 1px ${(props)=>props.you?'rgba(8, 72, 192, 0.30)' : '#D6DADE'};
    background-color: ${(props)=>props.you?'rgba(8, 72, 192, 0.22)' : '#F3F5F7'};

    
  }
  & .grow{
    flex-grow: 1;
    min-width: 50px;
  }
`

const StyledBotMessage = styled.div`
  font-family: 'Lato', sans-serif;
  margin:0 10px 18px 10px;

  p{
    margin: 0;
    padding: 0;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  h1{
    font-family: 'Lato',sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 37px;
  }
  button {
    background-color: #FFFFFF;
    color: #0848C0;
    &:visited,&:hover{
      background-color: #DEE3E9;
    }
    box-sizing: border-box;
    border: 1px solid #DEE3E9;
    box-shadow: 0 2px 4px rgba(44, 48, 52, 0.15);
    border-radius: 8px;
    padding: 15px 15px;
    
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    width: 100%;
    margin-bottom: 8px;
  }
`
export {StyledBotMessage,StyledMessage}