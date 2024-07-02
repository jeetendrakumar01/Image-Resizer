document.getElementById('upload').addEventListener('change', handleImageUpload);
document.getElementById('resize-btn').addEventListener('click', resizeImage);

let originalImage = new Image();

function handleImageUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function(e) {
    originalImage.src = e.target.result;
    originalImage.onload = function() {
      document.getElementById('width').value = originalImage.width;
      document.getElementById('height').value = originalImage.height;
    }
  }

  reader.readAsDataURL(file);
}

function resizeImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const width = parseInt(document.getElementById('width').value);
  const height = parseInt(document.getElementById('height').value);
  
  canvas.width = width;
  canvas.height = height;
  
  ctx.drawImage(originalImage, 0, 0, width, height);
  
  const resizedImageURL = canvas.toDataURL('image/png');
  const downloadLink = document.getElementById('download-btn');
  downloadLink.href = resizedImageURL;
}
