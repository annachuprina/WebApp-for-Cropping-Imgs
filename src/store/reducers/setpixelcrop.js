import {SET_PIXEL_CROP, RESET_PIXEL} from "../common"
import produce from 'immer'

const initialState = {
    entities: {},
}

export const setPixelCropReducer = (pixelCropState = initialState, action) =>
  produce(pixelCropState, draft => {
    switch (action.type) {
        case SET_PIXEL_CROP: {
            draft.loaded = true
            draft.entities = action.payload
            break
        }
        case RESET_PIXEL: {
            draft.loaded = false
            draft.entities = undefined
            break
        }   
        default: 
            return pixelCropState
    }
})