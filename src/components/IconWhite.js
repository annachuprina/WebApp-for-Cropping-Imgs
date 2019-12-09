import React, {Component}  from "react";
import {Link} from "react-router-dom";
import IconImgWhite from "../assets/eye.png";

class Icon extends Component{

    render() {    
        const StyledIcon = {
            width:"50px" ,
            height: "50px",
            top: "20px",
            left: "25px",
            position: "absolute",
        }
        return (
            <div>
                <Link to='/'><img style={StyledIcon} src={IconImgWhite} className="icon" alt="logo" /></Link>
            </div>
        )
    };
}

export default Icon;