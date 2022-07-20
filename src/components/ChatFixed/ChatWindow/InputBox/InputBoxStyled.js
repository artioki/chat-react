import styled from "styled-components";

const ContainerInputBox = styled.div`
  display: flex;
  
  width: 100%;
  min-height: 48px;
  
  box-shadow: 0 0 1px 1px #D6DADE;
  border-radius: 2px;
  background: #FFFFFF;
  
`;

const Textarea =  styled.textarea`
  box-sizing: border-box;
  overflow: hidden;
  flex-grow: 1;
  border: none;
  margin: 15px 0;
  padding: 2px;
  resize: none;
  height: 20px;
  font-size: 14px;
  outline: none;

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
export {ContainerInputBox,Textarea,Button}