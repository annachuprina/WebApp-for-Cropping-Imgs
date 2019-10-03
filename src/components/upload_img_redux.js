import React from "react"
import Button from "./components/Button"
import CropPage from "./pages/CropPage"

class UploadImg extends React.Component{
    render(){
        return(
            <div className="previewComponent">
              <Button id = "choose_file_but"><input type = "file" onChange={(e)=>this.handleImageChange(e)} id="ImgSrc"></input></Button>
              <Button id = "upload_but" onClick={(e)=>this.handleSubmit(e)}></Button>
              <CropPage imgsrc = {this.state.imagePreviewUrl}></CropPage>
          </div>
        );
    }
}
export default UploadImg