import React from "react";
import Button from "../components/button"
import "../pages/App.css"
import { ImgConsumer } from "../providers/ImgProvider"

class UploadImg extends React.Component{
  /*constructor(props) {
    super(props);
    this.state = {        
      src:"",
      type:"",
    };    
    this.onChange = this.onChange.bind(this)
  }*/

  
  onChange = (event) => {
    event.preventDefault();
    const { files } = event.target;
    if (files[0]){
      const localImageUrl =  window.URL.createObjectURL(files[0]);
      //this.props.onFileLoaded(localImageUrl);
      this.setState({
        src: localImageUrl,
        type: files[0].type,
      })
      window.location.assign('http://localhost:3000/CropPage/')
    }
  }
  
  componentWillReceiveProps(nextProps, prevProps) {
    if(prevProps !== nextProps) {
      this.setState({
        src: nextProps.src, 
        type: nextProps.type
      })
    }
  }
  constructor(props) {//!!!!!!!!!?????????????????
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }
  render(){   
    return(
      <React.Fragment>
        <Button id = "choose_file_but"><input type = "file" accept=".jpg, .jpeg, .png" onChange={this.onChange}></input></Button>
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
