import React from 'react'
import styled from 'styled-components';

const CustomColor = styled.div`
    position: absolute;
    overflow: hidden;
    min-height: 100vh;
    margin-left:0;
    top:0;
    background-color: ${props => props.color==="black" ? "black": "white"};
    background-position: left;
    width: ${props => props.page==="main" || props.page==="preview" ? 50:100}%;
`;
function BackgroundColor(props){
    return (
        <CustomColor page={props.page} color={props.color}/>
    )
}
export default BackgroundColor
