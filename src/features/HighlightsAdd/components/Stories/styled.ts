import styled, { keyframes } from "styled-components"
import { colors } from "config/constants"

const wave = keyframes`
 0% {  background-position: -468px 0 }
 100% { background-position: 468px 0 }
`

const deleting = keyframes`
 0% {background: #fafafa }
 50% {width: 100px; background: red; }
 100% {background: #fff; width: 0px }
`

export const StoriesTitle = styled.div`
    grid-column: span 12;
`
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
type StoryProps = {
  src?: string
  isLoading?: boolean
  deleting?: boolean
}
const chooseAnimation = (props: StoryProps): { name: any, duration: string } => {
  if (props.deleting) { return { name: deleting, duration: '1s' } }
  if (props.isLoading) { return { name: wave, duration: '10s' } }
}
export const Story = styled.button<StoryProps>`
   position: relative;
   height: 200px;
   width: 100px;
   background-color: #ccc;
   border-radius: 8px;
   margin-right: 15px;
   margin-bottom: 15px;
   border: none;
   cursor: pointer;

   animation-fill-mode: forwards;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
   background-position: 0 0;
   animation-duration: ${props => chooseAnimation(props)?.duration} ;
   background: ${props => props.isLoading ? 'linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%)' : `url(${props.src})`};
   animation-name: ${props => chooseAnimation(props)?.name};

   background-size: cover;
`
export const DeleteStory = styled.span`
  position: absolute;
  right: -11px;
  top: -11px;
  background-color: #FB7272;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  &:before{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 2px;
    background: #000;
  }
`
export const AddButton = styled(Story)`
   background: #fff;
   border: 1px dashed #000;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   img{
     margin-bottom: 10px;
   }
`
