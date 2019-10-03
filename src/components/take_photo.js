import React from "react";
import {Link} from "react-router-dom";
import Button from "../components/button";

class TakePhoto extends React.Component{
    render(){
        return(
            <div>
                <Link to='./TakePh'><Button id = "left_part_but3">TAKE PHOTO</Button></Link>
            </div>
        );
    }
};
export default TakePhoto;