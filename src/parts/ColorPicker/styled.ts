import styled from "styled-components"
export const Wrapper = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        padding-left: 0;
    }
`
type TCircle = {
    color: string
}
export const Circle = styled.div<TCircle>`
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: ${({ color }) => color ? color : '#ccc'};
    border-radius: 50%;
    cursor: pointer;
`
export const Picker = styled.div`
    position: absolute;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    top: 50px;
    left: -10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`

