import React, { Component } from 'react';
import eyepair from '../assets/1.jpg';
import {connect} from "react-redux"
import Icon from "../components/Icon";
import EyeChooseBut from '../components/EyeChooseBut';
import BackgroundImg from "../components/BackgroundImg"
import BackgroundColor from "../components/BackgroundColor"
import {NavLink, Route} from "react-router-dom"
import LeftEyePage from './LeftEyePage';
import RightEyePage from './RightEyePage';
import {icon_white} from "../assets/eye.png"
import {resetpixel, resetcrop, resetimg, resetleftdownload, resetrightdownload} from "../store/actions"


class Header extends Component {
  componentDidMount() {
    this.props.dispatch(resetcrop())
    this.props.dispatch(resetpixel())
    this.props.dispatch(resetimg())
    this.props.dispatch(resetleftdownload())
    this.props.dispatch(resetrightdownload())
  }
  render() {
    return (  
      <div>
        <BackgroundColor page="main" color="black"/>
        <BackgroundImg img={eyepair} page="main"/>
        <Icon img={icon_white}/>
        <NavLink to={`/LeftEyePage`}>
          <EyeChooseBut link="./LeftEyePage" value = "MAKE LEFT EYE" as="button" type="button" page="LeftEyePage"></EyeChooseBut>
        </NavLink>
        <NavLink to={`/RightEyePage`}>
          <EyeChooseBut link="./RightEyePage" value = "MAKE RIGHT EYE" as="button" type="button" page="RightEyePage"></EyeChooseBut>   
        </NavLink>
        <Route 
          path='/LeftEyePage'
          exact 
          render = { (props) => {
            return <LeftEyePage />}}  
        />
        <Route 
          path='/RightEyePage'
          exact 
          render = { (props) => {
            return <RightEyePage />}}  
        />
      </div>
    );
  }
}
export default connect(null, null)(Header)


