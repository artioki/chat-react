import styled from "styled-components";


const StyledMessage = styled.div`
  display: flex;
  flex-direction: ${(props)=>props.you?'row-reverse':' row' };
  margin: 10px;
  
  & .message{
    display: inline-block;
    
    padding: 6px 12px;
    
    border-radius: 8px;
    box-shadow: 0 0 1px 1px #D6DADE;
    background-color: #F3F5F7;
    
  }
  & .grow{
    flex-grow: 1;
    min-width: 50px;
  }
  
`
export {StyledMessage}