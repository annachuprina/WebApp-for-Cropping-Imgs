import React, {Component} from "react";
import Button from 'react-button-component';

const CustomizedButton = Button.extend`
  background: ${props => props.page==="LeftEyePage" ? "black" : "white"};;
  border: ${props => props.page==="LeftEyePage" ? "4px solid white" : "4px solid black"};
  border-radius: 15px;
  color: ${props => props.page==="LeftEyePage" ? "white" : "black"};;
  text-Align:center;
  font-family: SF Pro Text;

  @media (max-device-width: 768px) {
    width: 80vw;
    height: 100px;
    position:  absolute;
    margin: ${props => props.value==="PREVIEW" || props.value==="DOWNLOAD" ? "50% 10%": "10px 10%"}; 
    top: ${props => props.value === "MAKE RIGHT EYE" ? 65: props.value === "MAKE LEFT EYE" ? 15: 40}%;
    font-size: 15px;
  }
  @media (min-width: 770px) {
    width: 20vw;
    height: 20vh;
    position:  ${props => props.value==="PREVIEW" ? "fixed": "absolute"};
    margin: ${props => props.value==="PREVIEW" ? "15% 60%" : "auto"}; 
    top: 40%;
    left: ${props => props.value === "MAKE RIGHT EYE" ? "auto" : 10}%;
    right: ${props => props.value === "MAKE RIGHT EYE" ? 10 : "auto"}%;
    font-size: 20px;
  }
`
class EyeChooseBut extends Component{
  render(){
    return(
      <div>
          <CustomizedButton
            type={this.props.type} 
            value={this.props.value} 
            page={this.props.page}>
              {this.props.value}
            </CustomizedButton>
      </div>
    )
  }
}
export default EyeChooseBut;