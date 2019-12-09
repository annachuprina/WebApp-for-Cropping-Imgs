import {DOWNLOAD_RIMG} from "../common"

const initialState = {  
    src: undefined,
    width: undefined ,
    height: undefined,
    x: undefined,
    y: undefined,
    base64: undefined,
}

export const downloadImgRightReducer = (downloadState = initialState, action) =>{
    switch (action.type) {
        case DOWNLOAD_RIMG:
          return {
            ...downloadState,
            src:  action.payload.src,
            width:  action.payload.width,
            height:  action.payload.height,
            x:  action.payload.x,
            y:  action.payload.y,
            base64:  action.payload.base64,
          };
        default:
          return downloadState;
      }
}