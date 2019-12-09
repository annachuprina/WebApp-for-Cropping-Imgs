import {UPLOAD_IMG, RESET_IMG} from "../common"

const initialState = {  
    loaded: false,      
    src: undefined,
    base64: undefined,
    size: undefined,
    type: undefined,
    crop: false,
    page: undefined
}

export const uploadImgReducer = (imgState = initialState, action) =>{
    switch (action.type) {
        case UPLOAD_IMG:
          return {
            ...imgState,
            loaded: true,
            src: action.payload.src,
            base64: action.payload.base64,
            size: action.payload.size,
            type: action.payload.type,
            crop: action.payload.crop,
            page: action.payload.page
          };
          
        case RESET_IMG: {
            return {
                ...imgState,
                loaded:false,
                src: undefined,
                base64:undefined,
                size: undefined,
                type: undefined,
                crop: undefined,
                page: undefined
            };
        } 
    
        default:
          return imgState;
      }
}