export const selectImgSrc = store => store.uploadImg.src

export const selectImgEntities = store => store.uploadImg

export const selectImgIsLoaded = store => store.uploadImg.loaded

export const selectCrop = store => store.setCrop.entities

export const selectCanvasRef = store => store.setCrop.entities.canvasRef

export const selectPixelCrop = store => store.setPixelCrop.entities

export const selectEntities = store => store.setCrop.entities

export const selectDownloadLeft = store => store.downloadImgLeft

export const selectDownloadRight = store => store.downloadImgRight