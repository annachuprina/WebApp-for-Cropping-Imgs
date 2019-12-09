import React, {Component} from "react";
import Button from 'react-button-component';

const CustomizedButton = Button.extend`
  background: ${props => props.page==="LeftEyePage" ? "black" : "white"};;
  border: ${props => props.page==="LeftEyePage" ? "2px solid white" : "2px solid black"};
  border-radius: 15px;
  color: ${props => props.page==="LeftEyePage" ? "white" : "black"};;
  text-Align:center;
  font-family: SF Pro Text;

  @media (max-device-width: 768px) {
    width: 80vw;
    height: 100px;
    position:  absolute;
    margin: 50% 10%; 
    font-size: 15px;
  }
  @media (min-width: 770px) {
    width: 5vw;
    height: 3vh;
    position: absolute;
    left:  ${props => props.page==="LeftEyePage" ? "2%" : "85%"};
    top: ${props => props.value==="DOWNLOAD" ? "25%" : "35%"};
    font-size: 14px;
  }
`
class EyeDownloadBut extends Component{
  render(){
    return(
      <div className = " center-block">
        <div className="d-none d-lg-block">
          <CustomizedButton
          {...this.props}
            type={this.props.type} 
            value={this.props.value}
            page={this.props.page}>
              {this.props.value}
            </CustomizedButton>
        </div>
        <div className="d-lg-none">
          <CustomizedButton
          {...this.props} 
            type={this.props.type}
            value={this.props.value}
            page={this.props.page}>
              {this.props.value}
          </CustomizedButton>
        </div>
      </div>
    )
  }
}
export default EyeDownloadBut;