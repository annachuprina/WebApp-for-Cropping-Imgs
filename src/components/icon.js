import React from "react";
import {Link} from "react-router-dom";
import iconimg from "../assets/eye2.png";

class icon extends React.Component{
    render() {
        return (
            <div>
                <Link to='/'><img src={iconimg} className="icon" alt="logo" /></Link>
            </div>
        )
    };
}

export default icon;