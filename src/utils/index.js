// A few JavaScript Functions for Images and Files
// Thank for Author: Justin Mitchel
// Source: https://kirr.co/ndywes

// Download a Base64-encoded file
export function downloadBase64File (base64Data, filename) {
  var element = document.createElement('a')
  element.setAttribute('href', base64Data)
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

// Extract an Base64 Image's File Extension
export function extractImageFileExtensionFromBase64 (base64Data) {
  return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'))
}

// Base64 Image to Canvas with a Crop
export function image64toCanvasRef (canvasRef, image64, pixelCrop) {
  const canvas = canvasRef
  const ctx = canvas.getContext('2d')
  const image = new Image()
  image.src = image64
  canvas.width = pixelCrop.width * image.width / 100 
  canvas.height = pixelCrop.height * image.height / 100
   image.onload = function () {
    ctx.drawImage(
      image,
      pixelCrop.x * image.width / 100,
      pixelCrop.y * image.height / 100,
      pixelCrop.width * image.width / 100,
      pixelCrop.height * image.height / 100,
      0,
      0,
      pixelCrop.width * image.width / 100,
      pixelCrop.height * image.height / 100

    )
  }
}