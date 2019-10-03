import React from "react";
import Button from "../components/button"
import "../pages/App.css"
import { ImgConsumer } from "../providers/ImgProvider"

class UploadImg extends React.Component{
  constructor(props) {
    super(props);
    this.state = {        
      src:"",
      type:"",
    };
  }
  
  handleOnChange = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const localImageUrl =  window.URL.createObjectURL(files[0]);
    //this.props.onFileLoaded(localImageUrl);
    this.setState({
      src: localImageUrl,
      type: files.type,
    })
    const updatedImg = { ...this.state } 
    this.props.updateImg(updatedImg)
    console.log(this.state.type)
  }
  componentWillReceiveProps(nextProps, prevProps) {
    if(prevProps !== nextProps) {
      this.setState({
        src: nextProps.src, 
        type: nextProps.type
      })
    }
  }
  render(){
    return(
      <React.Fragment>
        <Button id = "choose_file_but"><input type = "file" accept=".jpg, .jpeg, .png" name="userfile" onChange={this.handleOnChange}></input></Button>
        {this.state.src}
      </React.Fragment>
    )
  }
}
const ConnectedImgUpdate = props => (
  <ImgConsumer>
    {({src, type, updateImg }) => (
      <UploadImg
        {...props}
        src={src}
        type={type}
        updateImg={updateImg}
      />
    )}
  </ImgConsumer>
)
export default ConnectedImgUpdate
