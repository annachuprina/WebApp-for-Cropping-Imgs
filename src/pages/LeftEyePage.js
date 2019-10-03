import React from "react";
import "../pages/App.css";
import left_part from "../assets/left_part.jpg";
import Icon from "../components/icon";
import TakePhoto from "../components/take_photo"
import UploadImg from "../components/upload_img";
//import {connect} from "react-redux"
//import { createStore } from "redux";
//import counter from "../reducers/reducers";
import ImgProvider from "../providers/ImgProvider"
const LeftEyePage = () => (
<ImgProvider>
    <React.Fragment>
        <div className = "container left_part" id = "full_page">
            <img src={left_part} className="eyepair" alt="eyepair" id="left_part_img" />
            <UploadImg ></UploadImg>
            <TakePhoto></TakePhoto>
            <Icon></Icon>
        </div>
    </React.Fragment>
</ImgProvider>
);
export default LeftEyePage