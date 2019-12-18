import React from "react"
import BackgroundImg from "../components/BackgroundImg"
import Icon from "../components/Icon"
import BackgroundColor from "../components/BackgroundColor"
import right_part from "../assets/right_page.jpg"
import EyeChooseInput from '../components/EyeChooseInput'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import {selectImgIsLoaded} from '../store/selectors'
import ResizeZone from "./ResizeZone"
import TakePhoto from "../components/TakePhoto"


function RightEyePage(props) {
    const {loaded} = props
    return (loaded !== undefined) ? (
            <ResizeZone color="white"/>
        ) : (
        <div>
            <BackgroundColor  page="LeftEyePage" color="white"/>
            <Icon color="black"/>
            <BackgroundImg img={right_part} page="RightEyePage"/>
            <EyeChooseInput  txt="UPLOAD IMAGE" value="UPLOAD IMAGE" page="RightEyePage" color="black" />
            <TakePhoto txt="TAKE PHOTO" value="TAKE PHOTO" page="RightEyePage"/>
     </div>
    )  
}
RightEyePage.propTypes = {
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
export default connect( mapStateToProps )(RightEyePage)