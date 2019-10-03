// eslint-disable-next-line
import React from "react";
import Button from 'react-button-component';

const CustomizedButton = Button.extend`
  width: 250px;
  height: 100px;
  background: #060606;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  font-family: SF Pro Text;
  position:absolute;
  margin-top: 320px;
`

export default CustomizedButton;