import {SET_CROP, RESET_CROP} from "../common"
import produce from 'immer'

const initialState = {
    entities: {},
}

export const setCropReducer = (cropState = initialState, action) =>
  produce(cropState, draft => {
    switch (action.type) {
        case SET_CROP: {
            draft.loaded = true
            draft.entities = action.payload
            break
        }
        case RESET_CROP: {
            draft.loaded = false
            draft.entities = undefined
            break
        }   
        default: 
            return cropState
    }
})