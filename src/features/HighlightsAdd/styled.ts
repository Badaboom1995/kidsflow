import styled from "styled-components"

export const Wrapper = styled.div``
export const StoriesTitle = styled.div`
    grid-column: span 12;
`
export const Stories = styled.div`
  display: flex;
  flex-wrap: wrap;
`
type StoryProps = {
  src?: string
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
   background-image: url(${props => props.src});
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
export const AddStory = styled(Story)`
   background-color: #fff;
   border: 1px dashed #000;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   img{
     margin-bottom: 10px;
   }
`

