import React, {useState } from 'react';
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import styled from "styled-components"
import Icon from "../components/Icon"
import SizeInput from "../components/SizeInput"
import EyeChooseBut from '../components/EyeChooseBut';
import {connect, useDispatch} from "react-redux"
import {selectImgEntities, 
        selectCrop, 
        selectPixelCrop} from "../store/selectors"
import {setcrop, setpixelcrop} from "../store/actions"
import Preview from "./Preview"
import {Route, NavLink} from "react-router-dom"

const MainDiv = styled.div`
  position: absolute;
  margin:0;
  width: 100%;
  min-height: 100%;
  height: auto;
  overflow: hidden; 
  background-color: ${props => props.color==="black" ? "black": "white"};
`
const CustDiv = styled.div`
  height: 100%;
  width: 50%;
  @media (max-device-width: 768px) {
    margin: 30% 10%;
    width: 80%;
  }
  @media (min-width: 770px) {
    margin: 150px 10%;
    width: 50%;
  }
`


function ResizeZone(props) {
  const dispatch = useDispatch()  
  const {crop} = props
  const [height, setHeight] = useState("HEIGHT");
  const [width, setWidth] = useState('WIDTH"');
  const onChange = (event, pixelCrop) => {
    dispatch(setcrop(event.height, "px", event.width, event.x, event.y, null))
    pixelCrop.height === 0 && pixelCrop.width === 0 ? dispatch(setpixelcrop(100, 100, pixelCrop.x, pixelCrop.y)) : dispatch(setpixelcrop(pixelCrop.height, pixelCrop.width, pixelCrop.x, pixelCrop.y))
    const image = new Image()
    if (pixelCrop.height !== 0 && pixelCrop.width !== 0){
      image.src = props.entities.base64
      setHeight(image.height * pixelCrop.height / 100)
      setWidth(image.width * pixelCrop.width / 100)
    }
  }
  return  (
    <MainDiv color={props.color}  >
      <Icon/>
      <CustDiv> 
        <ReactCrop src={props.entities.src} 
          crop={crop}
          onChange= {onChange}/>
      </CustDiv>
      
      <SizeInput size={height} value="HEIGHT"  page={props.page}/>
      <SizeInput size={width} value="WIDTH" page={props.page}/>
      <NavLink to={`/Preview`}>
        <EyeChooseBut value="PREVIEW" page={props.page}/>
      </NavLink> 
      <Route 
        path='/Preview'
        exact 
        render = { () => {
          return <Preview/>}}  
      />
    </MainDiv>
  )
}

const mapStateToProps = (store) => {
  console.log(selectCrop(store))
  return {
     entities: selectImgEntities(store)  || undefined,
     crop: selectCrop(store)  || undefined,
     pixelCrop: selectPixelCrop(store)  || undefined,
  }
}
export default connect(mapStateToProps)(ResizeZone)