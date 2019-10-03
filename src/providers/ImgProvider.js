import React from "react"
import UploadImg from "../components/upload_img"

const ImgContext = React.createContext()
export const ImgConsumer = ImgContext.Consumer
export class ImgProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {        
          src:"",
          type:"",
          updateImg: updatedImg => this.updateImg(updatedImg)
        };
    }
    updateImg = updatedImg => {
        this.setState(prevState => ({
          ...prevState,
          ...updatedImg
        }))
      } 
    render(){
        const { children } = this.props;
        return(
            <ImgContext.Provider value={this.state}>
                <UploadImg/>
                {children}
            </ImgContext.Provider>
        );
    }
}
export default ImgProvider