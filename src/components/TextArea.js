import React, { Component } from 'react'
import styled from "styled-components"


const Text = styled.div`
    
    color: ${props => props.page==="LeftEyePage" ? "white" : "black"};;
    text-Align:center;
    @media (max-device-width: 768px) {
        width: 80vw;
        height: 100px;
        position:  absolute;
        margin: 50% 10%; 
        font-size: 12px;
      }
      @media (min-width: 770px) {
        width: 6vw;
        height: 4vh;
        position: absolute;
        left:  ${props => props.page==="LeftEyePage" ? "2%" : "85%"};
        top: 45%;
        font-size: 12px;
      }
`
class TextArea extends Component { 
    onChange = (event) => {
        event.preventDefault();
        if(event.target.value > this.props.max){
            document.getElementById(this.props.value).value = this.props.max;
            this.props.parentCallback(this.props.max , this.props.value);
        }
        else{
            this.props.parentCallback(event.target.value , this.props.value);
        }
    }
    render() { 
    return (
        <Text page={this.props.page} text={this.props.text} {...this.props}>
            <p>HEIGHT: {this.props.height}</p>
            <p>WIDTH: {this.props.width}</p>
        </Text>
    )
    }
}
export default TextArea

// Вывод размеров в input, задание кастомных размеров
