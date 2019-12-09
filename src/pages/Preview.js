import React, {Component} from 'react'
import {connect} from "react-redux"
import styled from "styled-components"
import {selectImgEntities, 
        selectPixelCrop, 
        selectDownloadLeft,
        selectDownloadRight} from "../store/selectors"
import {resetpixel, 
        resetcrop, 
        resetimg,} from "../store/actions"
import BackgroundColor from "../components/BackgroundColor"
import Icon from "../components/Icon";
import DownloadLeftEye from '../components/DownloadLeftEye'
import DownloadRightEye from '../components/DownloadRightEye'

const Left = styled.div `
    height: 100vh;
    width: 50%;
    top: 0px;
    left: 0px;
    position: absolute;
`
const Right = styled.div `
    width: 50%;
    height: 100vh;
    top: 0px;
    right: 0px;
    position: absolute;
    
`
class Preview extends Component {
    
    componentWillUnmount() {
        this.props.dispatch(resetcrop())
        this.props.dispatch(resetpixel())
        this.props.dispatch(resetimg())
    }
    render(){
        return (
        <div>
            <BackgroundColor page="main" color="black"/>
            <Left>
                <Icon  color="white"/>
                <DownloadLeftEye/>
            </Left>
            <Right> 
                <DownloadRightEye/>
            </Right>
        </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
       entities: selectImgEntities(store)  || undefined,
       pixelCrop: selectPixelCrop(store)  || undefined,
       downloadLeft: selectDownloadLeft(store) || undefined,
       downloadRight: selectDownloadRight(store) || undefined,
    }
}
export default connect(mapStateToProps)(Preview)