import styled from 'styled-components';

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
  overflow-y: scroll;
  height: 100px;
  & > :first-child{
    flex-grow: 1;
  }
  & div {
    overflow-wrap: break-word;
  }

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d6dade;
    border-radius: 5px;
  }
`;
export {DivText};
