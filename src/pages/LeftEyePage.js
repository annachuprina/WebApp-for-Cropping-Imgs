import React from "react"
import BackgroundImg from "../components/BackgroundImg"
import Icon from "../components/Icon"
import BackgroundColor from "../components/BackgroundColor"
import left_part from "../assets/left_part.jpg"
import EyeChooseInput from '../components/EyeChooseInput'
import TakePhoto from '../components/TakePhoto'
import PropTypes from 'prop-types'
import {selectImgIsLoaded} from '../store/selectors'
import ResizeZone from "./ResizeZone"
import {connect} from "react-redux"


function LeftEyePage(props) {
    const {loaded} = props
    
    return (loaded !== undefined) ? (
            <ResizeZone color="black" page="LeftEyePage"/>
        ) : (
        <div>
            <BackgroundColor  page="LeftEyePage" color="black"/>
            <BackgroundImg img={left_part} page="LeftEyePage"/>
            <Icon color="black"/>
            <EyeChooseInput  txt="UPLOAD IMAGE" value="UPLOAD IMAGE" page="LeftEyePage" />
            <TakePhoto txt="TAKE PHOTO" value="TAKE PHOTO" page="LeftEyePage"/>
        </div>
    )  
}
LeftEyePage.propTypes = {
    img: PropTypes.shape({
        crop: PropTypes.bool,
        size: PropTypes.number,
        src: PropTypes.string,
        type: PropTypes.string,
    }),
};
const mapStateToProps = (store) => {
    return {
       loaded: selectImgIsLoaded(store) || undefined,
    }
}
export default connect( mapStateToProps )(LeftEyePage)