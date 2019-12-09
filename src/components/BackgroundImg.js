import React from 'react'
import styled from 'styled-components';

const CustomImg = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    transition: opacity 0.3s linear;
    background-size: ${props => props.page==="main" ? "80vh":
    props.page==="LeftEyePage" && props.large? "50vw":
    props.page==="LeftEyePage" && props.small? "100vh":"100vh"};
    opacity: 0.8;
    overflow: hidden;

    background-position: ${props => props.page==="main" ? "center":
    props.page==="LeftEyePage"? "left": 
    props.page==="RightEyePage"? "right":"auto"};
`;

function  BackgroundImg(props){
    return (
    <div className = "center-block">
        <div className="d-none d-lg-block">
            <CustomImg large img={props.img} page={props.page} alt=""></CustomImg>
        </div>
        <div className="d-lg-none">
            <CustomImg small img={props.img} page={props.page} alt=""></CustomImg>
        </div>
    </div>
    )
}
export default BackgroundImg
