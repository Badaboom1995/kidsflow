import styled from "styled-components"
import { colors } from "config/constants"
import minus from 'assets/minus.svg';
import { darken, lighten } from "polished";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    background-color: ${colors.back};
    border: 1px solid ${colors.border};
    padding: 18px;
    margin-bottom: 8px;
    border-radius: 8px;
`
export const Cell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22.5%;
    text-align: center;
    &:nth-child(5){
        width: 5%;
    }
    &:first-child, &:last-child{
        width: 5%;
        min-width: 50px;
    }
`
export const Photo = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 4px;
`
export const RemoveButton = styled.button`
    width: 22px;
    height: 22px;
    border: none;
    outline: none;
    background-color: transparent;
    background-image: url(${minus});
    background-size: contain;
    cursor: pointer;
`
export const Field = styled.p`
    
`

