import styled from "styled-components";

const ContainerInputBox = styled.div`
  display: flex;
  
  width: 100%;
  min-height: 48px;
  
  box-shadow: 0 0 1px 1px #D6DADE;
  border-radius: 2px;
  background: #FFFFFF;
`;
const Form = styled.form`
  width: 100%;
  height: 48px;
`;
const Textarea =  styled.textarea`
  &::placeholder {
    
  }
  box-sizing: border-box;
  flex-grow: 1;
  border: none;
  margin: 15px 0;
  padding: 0;
  resize: none;
  outline: none;
  font-family: 'PT Sans',sans-serif;
  font-style: normal;
  font-weight: 400;
  
  font-size: 14px;
  line-height: 16px;
  min-height: 18px;
  max-height: ${(props => `${3*18}px`)};
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Button = styled.button`
  display: block;
  border: none;
  padding: 0;
  margin:auto 10px 15px 10px;
  bottom: 0;
  width: 18px;
  height: 18px;
  background-color: #fff;
  &:hover path,&:visited path{
    fill:#0848C0;
  }
`;
export {ContainerInputBox,Form,Textarea,Button}