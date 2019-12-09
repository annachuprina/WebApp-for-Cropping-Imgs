import React, {Component} from 'react'
import {connect} from "react-redux"
import styled from "styled-components"
import {selectImgEntities, 
        selectPixelCrop,
        selectDownloadRight,
        selectImgSrc} from "../store/selectors"
import {downloadBase64File, 
        image64toCanvasRef, 
        extractImageFileExtensionFromBase64} from '../utils'
import {resetpixel, 
        resetcrop, 
        resetimg, 
        downloadrightimg,} from "../store/actions"
import CustomizedButton from "./EyeChooseBut"
import {NavLink, Route} from "react-router-dom"
import RightEyePage from '../pages/RightEyePage';

import EyeDownloadResetBut from './EyeDownloadResetBut'
import TextArea from "./TextArea"

const CanvasRight = styled.canvas`
    float:right;
    top: 25%;
    left: 0px;
    max-width: 80%;
    position: absolute;
    height: auto;
    overflow:hidden;
    opacity: this.state.opacity;
`
class DownloadRightEye extends Component {
    constructor(props){
        super(props)
        this.imagePreviewCanvasRight = React.createRef()
        this.handleDownloadClickRight = this.handleDownloadClickRight.bind(this)
        this.state = { 
            width: null,
            hieght: null,
        };
    }
    
    componentDidMount() {
        const canvasRight = this.imagePreviewCanvasRight.current

        if ( this.props.entities.page === "RightEyePage"){
            this.props.dispatch(downloadrightimg(this.props.entities.src, this.props.pixelCrop.width, this.props.pixelCrop.height, this.props.pixelCrop.x, this.props.pixelCrop.y, this.props.entities.base64 ))
            image64toCanvasRef(canvasRight, this.props.entities.src, this.props.pixelCrop) 
        }
        if (this.props.downloadRight && this.props.entities.page === "LeftEyePage") {
            image64toCanvasRef(canvasRight, this.props.downloadRight.src, this.props.downloadRight)
        }
        
        this.setState({
            width: canvasRight.width,
            height: canvasRight.height,
        })
    }
    componentWillUnmount() {
        this.props.dispatch(resetcrop())
        this.props.dispatch(resetpixel())
        this.props.dispatch(resetimg())
    }
    handleDownloadClickRight = (event, props) => {
        event.preventDefault()
        if (this.props.downloadRight !== undefined) {
            const canvasRight = this.imagePreviewCanvasRight.current
            const imgSrcExt = extractImageFileExtensionFromBase64(this.props.downloadRight.base64)
            const imageData64 = canvasRight.toDataURL('image/' + imgSrcExt)
            const myFilename = "download." + imgSrcExt
            downloadBase64File(imageData64, myFilename)
            //this.props.dispatch(downloadrightimg(this.props.entities.src, this.props.pixelCrop.width, this.props.pixelCrop.height, this.props.pixelCrop.x, this.props.pixelCrop.y, this.props.entities.base64 )) 

            image64toCanvasRef(canvasRight, this.props.downloadRight.src, this.props.downloadRight)
        }
    }
    render(){
        return (this.props.downloadRight !== undefined && this.props.downloadRight.src) ? (
            <div> 
                <CanvasRight ref={this.imagePreviewCanvasRight} mouseEnter={this.mouseEnter}/>
                <EyeDownloadResetBut onClick={this.handleDownloadClickRight} value="DOWNLOAD" page="RightEyePage" />
                <NavLink to={`/RightEyePage`}>
                    <EyeDownloadResetBut value="RESET" page="RightEyePage"/>
                </NavLink>
                <TextArea page="RightEyePage" width={this.state.width} height={this.state.height}/>
            </div>
            ) : (
            <div> 
                <CanvasRight ref={this.imagePreviewCanvasRight}/>
                <NavLink to={`/RightEyePage`}>
                    <CustomizedButton value="MAKE RIGHT EYE"  as="button" type="button" page="RightEyePage"/>
                </NavLink>
                <Route 
                path='/RightEyePage'
                exact 
                render = { (props) => {
                    return <RightEyePage />}}  
                />
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        src: selectImgSrc(store) || undefined,
        entities: selectImgEntities(store)  || undefined,
        pixelCrop: selectPixelCrop(store)  || undefined,
        downloadRight: selectDownloadRight(store) || undefined,
    }
}
export default connect(mapStateToProps)(DownloadRightEye)