import React, {Component}  from "react";
import {Link} from "react-router-dom";
import IconImg from "../assets/eye2.svg";

class Icon extends Component{

    render() {    
        const StyledIcon = {
            width:"50px" ,
            height: "50px",
            top: "20px",
            left: "25px",
            position: "absolute",
            fill:"black"
        }
        return (
            <div>
                <Link to='/'><img style={StyledIcon} src={IconImg} className="icon" alt="logo" />
                <svg
                    style={StyledIcon}
                    color={this.props.color}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                ></svg>
                <path d={Icon} fill={this.props.color} />
                </Link>
            </div>
        )
    };
}

export default Icon;