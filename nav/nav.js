// JavaScript includes annotations to facilitate code readability.

// --------------------------------- BODY ---------------------------------

// ----------- CAROUSEL -----------

// Retrieved the DOM element representing the carousel track container.
const track = document.querySelector(".carousel-track");

// Converted the track's slides into an array.
const slides = Array.from(track.children);

// Defined the number of original slides in the carousel.
const slidesNumber = 6;

// Retrieved the width of the first slide.
const slideWidth = slides[0].getBoundingClientRect().width;

// Initialised a variable to store the current horizontal position of the track.
let position = 0;

// Defined the speed of the animation in pixels per frame.
const speed = 0.4;

// ----------- ANIMATION -----------

// Defined a recursive function to animate the horizontal scrolling of the carousel.
function animate() {
  // Incremented the current position by the defined speed to simulate continuous movement.
  position += speed;

  // Ascertained whether the track has scrolled past the first set of slides.
  // Reset the position to zero to create an infinite loop effect.
  if (position >= slideWidth * slidesNumber) {
    position = 0;
  }

  // Applied a CSS transform to the track to move it horizontally based on the current position.
  track.style.transform = `translateX(-${position}px)`;

  // Requested the next animation frame to continue the smooth animation loop.
  requestAnimationFrame(animate);
}

// Invoked the animation function to start the carousel movement.
animate();
