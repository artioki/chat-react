import styled,{keyframes,css} from "styled-components";
interface ContainerWrapperInterface{
    mobile:boolean;
    visible:boolean;
}
const swingFrames = keyframes`
  0% {
    transform: translateY(15px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
const rotateFrames = keyframes`
  0% {
    transform: rotate( 90deg );
  }
  100% {
    transform: rotate( 0deg );
  }
`

const ContainerWrapper = styled.div<ContainerWrapperInterface>`
  margin-left: auto;
  & button{
    border: none;
    position:${(props => props.mobile?'absolute':'relative')};
    ${(props => props.mobile?'width: 40px;height: 40px;':'width: 58px;height: 58px;')}
    ${(props => props.mobile
      ? props.visible
        ?'top:15px;right:15px;'
        :'bottom:15px;right:15px;' 
      :'')}
    padding: 0;
    width: 58px;
    height: 58px;
    background:  ${(props => props.mobile?'rgba(51, 51, 51, 0.4)':'#0848C0')};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    border-radius: 29px;
    &:hover svg{
      &.animationSwing{
        animation: ${rotateFrames} 0.6s ease-out;
      }
      &.animationRotate{
        animation: ${swingFrames} 0.6s ease-out;
      }
    }
    
  }
`

const opacityFrames = keyframes`
  0% {
    opacity:0;
  }
  50% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;
const OpacityForwardsFrames = keyframes`
  0%{
    opacity:0;
    transform: translateY(15px);
  }
  100% {
    opacity:1;
    transform: translateY(0px);
  }
`;
interface animationInterface{
    time:string|number;
    delay:string|number;
}
const animationOpacity = (props:any) =>
  css`
    ${opacityFrames} ${props.time?props.time+'s':1+'s'} linear ${props.delay?props.delay+'s':1+'s'};
  `
const animationOpacityForwards = (props:any) =>
  css`
    ${OpacityForwardsFrames} ${props.time?props.time+'s':1+'s'} linear ${props.delay?props.delay+'s':1+'s'};
  `
const Svg = styled.svg<animationInterface>`
  position: fixed;
  width: 58px;
  margin-top:-14px;
  display: block;
  &.animationOpacity{
    opacity:0;
    animation: ${animationOpacity};
    animation-fill-mode: forwards;
  }
  &.animationOpacityForwards{
    animation: ${animationOpacityForwards};
    animation-fill-mode: forwards;
  }
`

export {ContainerWrapper,Svg}