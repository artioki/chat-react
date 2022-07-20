import styled from "styled-components";

const ContainerWrapper = styled.div`
  margin-left: auto;
  & button{
    border: none;
    position:${(props => props.mobile?'absolute':'relative')};
    ${(props => props.mobile && props.visible?'top:15px;right:15px;':'bottom:15px;right:15px;')}
    padding: 0;
    width: 58px;
    height: 58px;
    background: #0848C0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    border-radius: 29px;
      & svg{
          position: fixed;
          width: 58px;
          margin-top:-14px;
          display: block;
      }
  }
`



export {ContainerWrapper}