import React from 'react';
import '../pages/App.css';
import eyepair from '../assets/1.jpg';
import { Link } from 'react-router-dom';
import CustomizedButton from '../components/button';
import Icon from "../components/icon";
//import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
//import Header from '../pages/header';
//import LeftEyePage from '../pages/LeftEyePage';
//import RightEyePage from '../pages/RightEyePage';
//import ImgProvider from "../providers/ImgProvider"
export default () => (
  <div className = "container">
    <Icon></Icon>
    <img src={eyepair} className="eyepair" alt="eyepair"/>
    <div className="left_part"><Link to='./LeftEyePage'><CustomizedButton  style={{ "left": "80px"}} onСlick="{LeftEyePage}">MAKE LEFT EYE</CustomizedButton></Link></div>
    <div className="right_part"> <Link to='./RightEyePage'><CustomizedButton style={{'right':'80px'}} onСlick="{RightEyePage}">MAKE RIGHT EYE</CustomizedButton></Link></div>
  </div>
);


