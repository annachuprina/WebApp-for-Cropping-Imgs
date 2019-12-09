import {combineReducers} from 'redux'
import {uploadImgReducer} from './uploadimg'
import {setCropReducer} from './setcrop'
import {setPixelCropReducer} from './setpixelcrop'
import {downloadImgLeftReducer} from './downloadLeftImg'
import {downloadImgRightReducer} from './downloadRightImg'

const reducer = combineReducers({
    uploadImg: uploadImgReducer,
    setCrop: setCropReducer,
    setPixelCrop: setPixelCropReducer,
    downloadImgLeft: downloadImgLeftReducer,
    downloadImgRight: downloadImgRightReducer,
})

export {reducer}