const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const slidesNumber = 6; // number of original slides
const slideWidth = slides[0].getBoundingClientRect().width + 30;

let position = 0;
const speed = 0.4; // pixels per frame

function animate() {
  position += speed;

  // Reset after scrolling through the first set of slides
  if (position >= slideWidth * slidesNumber) {
    position = 0;
  }

  track.style.transform = `translateX(-${position}px)`;
  requestAnimationFrame(animate);
}

animate();
