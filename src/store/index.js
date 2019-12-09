import {createStore, applyMiddleware} from "redux"
import {uploadImgMiddle} from "./middlewares/uploadImgMiddle"
import {reducer} from './reducers'

const enchancer = applyMiddleware(uploadImgMiddle)

const store = createStore(reducer , enchancer);

window.store = store

export {store}
