import React, { Component } from 'react'
import styled from "styled-components"
import {connect} from "react-redux"
import {selectCrop} from "../store/selectors"

const CustomInput = styled.input `
  opacity: 0;
  visibility: hidden;
  position: absolute;
`


const CustomLable = styled.label`
    background: ${props => props.page==="LeftEyePage" ? "black" : "white"};;
    border: ${props => props.page==="LeftEyePage" ? "4px solid white" : "4px solid black"};
    border-radius: 15px;
    color: ${props => props.page==="LeftEyePage" ? "white" : "black"};;
    text-Align:center;
    @media (min-width: 770px) {
        width: 20vw;
        height: 10vh;
        position: fixed;
        top: ${props => props.value==="HEIGHT" ? "20%":"34%"};
        left: 70%;
        font-size: 20px;
    }
    @media (max-device-width: 768px) {
        visibility: hidden;
        display: none;
    }
`;

class SizeInput extends Component { 
    onChange = (event) => {
        event.preventDefault();
        console.log(this.props.max);
        console.log(event.target.value);
    }
    render() { 
    return (
        <div>
            <CustomInput id='ImageInput' type="text" onChange={this.onChange} accept="image/*" page={this.props.page}/>
            <CustomLable htmlFor='ImageInput'  value={this.props.value} page={this.props.page} onChange={this.onChange}  >
                    {this.props.size}
            </CustomLable>
        </div>
    )
    }
}
const mapStateToProps = (store) => {
    return {
       crop: selectCrop(store)  || undefined,
    }
  }
  export default connect(mapStateToProps)(SizeInput)

// Вывод размеров в input, задание кастомных размеров
