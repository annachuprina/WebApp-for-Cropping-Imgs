import React, {Component} from 'react'
import {connect} from "react-redux"
import styled from "styled-components"
import {selectImgEntities, 
        selectPixelCrop, 
        selectDownloadLeft,
        selectImgSrc} from "../store/selectors"
import {downloadBase64File, 
        image64toCanvasRef, 
        extractImageFileExtensionFromBase64} from '../utils'
import {resetpixel, 
        resetcrop, 
        resetimg,
        downloadleftimg} from "../store/actions"
import EyeDownloadResetBut from './EyeDownloadResetBut'
import CustomizedButton from "./EyeChooseBut"
import {NavLink, Route} from "react-router-dom"
import LeftEyePage from '../pages/LeftEyePage';
import TextArea from "./TextArea"

const CanvasLeft = styled.canvas`
    float:left;
    top: 25%;
    right: 0px;
    max-width: 80%;
    position: absolute;
    height: auto;
    overflow:hidden;
`
class DownloadLeftEye extends Component {
    constructor(props){
        super(props)
        this.imagePreviewCanvasLeft = React.createRef()
        this.handleDownloadClickLeft = this.handleDownloadClickLeft.bind(this);
        this.state = { 
            width: null,
            hieght: null,
        };
    }
    
    componentDidMount() {
        const canvasLeft = this.imagePreviewCanvasLeft.current
        if (this.props.entities.page === "LeftEyePage"){
            alert(this.props.entities.page +" "+this.props.entities.src)
            this.props.dispatch(downloadleftimg(this.props.entities.src, this.props.pixelCrop.width, this.props.pixelCrop.height, this.props.pixelCrop.x, this.props.pixelCrop.y, this.props.entities.base64 )) 
            image64toCanvasRef(canvasLeft, this.props.entities.src, this.props.pixelCrop)
        } 
        if (this.props.downloadLeft !== undefined && this.props.entities.page === "RightEyePage") {
            alert(this.props.entities.page +" "+this.props.entities.src)
            image64toCanvasRef(canvasLeft, this.props.downloadLeft.src, this.props.downloadLeft)

        }
       
        this.setState({
            width: canvasLeft.width,
            height: canvasLeft.height,
        })
    }
    componentWillUnmount() {
        this.props.dispatch(resetcrop())
        this.props.dispatch(resetpixel())
        this.props.dispatch(resetimg())
    }
    handleDownloadClickLeft = (event, props) => {
        event.preventDefault()
        if (this.props.downloadLeft !== undefined) {
            const canvasLeft = this.imagePreviewCanvasLeft.current
            const imgSrcExt = extractImageFileExtensionFromBase64(this.props.downloadLeft.base64)
            const imageData64 = canvasLeft.toDataURL('image/' + imgSrcExt)
            const myFilename = "download." + imgSrcExt
            downloadBase64File(imageData64, myFilename)
            if (this.props.entities.page === "LeftEyePage") {
                this.props.dispatch(downloadleftimg(this.props.entities.src, this.props.pixelCrop.width, this.props.pixelCrop.height, this.props.pixelCrop.x, this.props.pixelCrop.y, this.props.entities.base64 )) 
            }
            image64toCanvasRef(canvasLeft, this.props.downloadLeft.src, this.props.downloadLeft)
        }
    }
    render(){
        return (this.props.downloadLeft !== undefined && this.props.downloadLeft.src) ? (
        <div> 
            <CanvasLeft id="imagePreviewCanvasLeft" ref={this.imagePreviewCanvasLeft}/>
            <EyeDownloadResetBut onClick={this.handleDownloadClickLeft} value="DOWNLOAD" page="LeftEyePage"/>
            <NavLink to={`/LeftEyePage`}>
                <EyeDownloadResetBut value="RESET" page="LeftEyePage"/>
            </NavLink>
            <TextArea page="LeftEyePage" width={this.state.width} height={this.state.height}/>
        </div>
        ) : (
        <div> 
            <CanvasLeft ref={this.imagePreviewCanvasLeft}/>
            <NavLink to={`/LeftEyePage`}>
                <CustomizedButton value="MAKE LEFT EYE"  as="button" type="button" page="LeftEyePage"/>
            </NavLink>
            <Route 
            path='/LeftEyePage'
            exact 
            render = { (props) => {
                return <LeftEyePage />}}  
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
        downloadLeft: selectDownloadLeft(store) || undefined,
    }
}
export default connect(mapStateToProps)(DownloadLeftEye)