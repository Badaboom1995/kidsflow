import styled from "styled-components"
import { colors } from "config/constants"
import arrow from 'assets/arrow.svg';

export const Wrapper = styled.div`
    width: 700px;
    padding: 30px;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid ${colors.border};
`
export const Body = styled.div`
     padding: 20px 0;
`
export const Fields = styled.div``
export const BackButton = styled.button`
    width: 17px;
    display: inline-block;
    height: 14px;
    background-image: url(${arrow});
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-right: 10px;
`
type AddPhotoProps = {
    src?: string
}
export const AddPhoto = styled.label<AddPhotoProps>`
    display: block;
    position: relative;
    width: 100%;
    height: 480px;
    background-color: ${colors.border};
    border: 1px dashed #51535D;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    input {
        display: none;
    }
`
export const Sign = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     text-align: center;
     font-size: 14px;
     img{
         width: 28px;
         margin-bottom: 6px;
     }
`
