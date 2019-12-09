import {UPLOAD_IMG, 
        SET_CROP, 
        SET_PIXEL_CROP, 
        RESET_CROP, 
        RESET_PIXEL, 
        RESET_IMG, 
        DOWNLOAD_LIMG, 
        RESET_LDOWNLOAD,
        DOWNLOAD_RIMG, 
        RESET_RDOWNLOAD} from '../common'

export const uloadimg = (src, base64, size, type, crop, page) => ({
    type: UPLOAD_IMG,
    payload: {
        src: src,
        base64: base64,
        size: size,
        type: type,
        crop: crop,
        page: page
    }
})

export const setcrop =(height, unit, width, x, y, aspect) => ({
    type: SET_CROP,
    payload: {
        height: height,
        unit: unit,
        width: width,
        x: x,
        y: y,
        aspect: aspect,
    }
})
export const setpixelcrop = (height, width, x, y) => ({
    type: SET_PIXEL_CROP,
    payload: {
        height: height,
        width: width,
        x: x,
        y: y,
    }
})

export const resetcrop = () => ({
    type: RESET_CROP
})
export const resetpixel = () => ({
    type: RESET_PIXEL
})
export const resetimg = () => ({
    type: RESET_IMG
})
export const resetleftdownload = () => ({
    type: RESET_LDOWNLOAD
})

export const downloadleftimg = (src, pixelWidth, pixelHeight, x, y, base64) => ({
    type: DOWNLOAD_LIMG,
    payload: {
        src: src,
        width: pixelWidth,
        height: pixelHeight,
        x: x,
        y: y,
        base64: base64,
    }
})
export const resetrightdownload = () => ({
    type: RESET_RDOWNLOAD
})

export const downloadrightimg = (src, pixelWidth, pixelHeight, x, y, base64) => ({
    type: DOWNLOAD_RIMG,
    payload: {
        src: src,
        width: pixelWidth,
        height: pixelHeight,
        x: x,
        y: y,
        base64: base64,
    }
})
