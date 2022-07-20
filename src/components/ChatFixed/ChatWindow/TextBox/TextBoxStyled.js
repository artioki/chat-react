import styled from "styled-components";

const DivText = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  overflow-y: scroll;
  height: 100px;
  & div{
    overflow-wrap:break-word;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(26, 24, 47, 0.15);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #1A182F;
    border-radius: 5px;
  }
`;
export {DivText}