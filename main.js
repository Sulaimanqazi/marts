const html = document.documentElement;
const canvas = document.querySelector('.hero-lightpass');
const context = canvas.getContext('2d');

const currentFrame = index => (
  `https://sulaimaneastus2.blob.core.windows.net/homepage/${index.toString().padStart(4, '0')}.png`

)

const frameCount = 75;
canvas.height = 1080;
canvas.width = 1920;
const img = new Image();
img.src = currentFrame(1);
img.onload = function(){
  context.drawImage(img, 0, 0)
}

const updateImage = index => {
  img.src = currentFrame(index)
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () =>{
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))

  requestAnimationFrame( () => updateImage(frameIndex + 1))

})

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);

  }
};

preloadImages();

