import styled, { keyframes } from "styled-components"
import { colors } from "config/constants"

const shake = keyframes`
    0% {
        transform: translate(2px, 0);
    }
    50% {
        transform: translate(-2px, 0);
    }
    100% {
        transform: translate(2px, 0);
    }
`

export const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`
export const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    width: 300px;
    margin-bottom: 30px;
    animation: ${shake} 1s ease-in infinite;
`
export const Sign = styled.span`
    text-align: center;
    font-size: 24px;
    color: ${colors.gray}
`

