// ACTION:
// Verify.
// Efficiency.

// --------------------------------- BODY ---------------------------------

// Retrieved the DOM element representing the "image-software-website".
const websiteImage = document.querySelector(".img-software-web");
// Retrieved the DOM element representing the "image-software-application".
const applicationImage = document.querySelector(".img-software-app");

// Initialised a variable to store the previous scroll position.
let previousScrollPosition = 0;

// Added a scroll event listener to the window.
window.addEventListener("scroll", function () {
  // Retrieved the current scroll position of the window.
  const currentScrollPosition = window.scrollY;
  // Retrieved the height of the viewport.
  const viewportHeight = window.innerHeight;
  // Retrieved the total height of the document.
  const documentHeight = document.documentElement.scrollHeight;

  // Calculated the tilt effect for the "image-software-website" based on its position relative to the viewport.
  const websiteImageRect = websiteImage.getBoundingClientRect(); // Retrieved the position and dimensions of the element.
  const websiteImageTop = websiteImageRect.top; // Calculated the distance from the top of the viewport to the element.
  const websiteImageHeight = websiteImageRect.height; // Retrieved the height of the element.
  const websiteImageVisibleHeight = Math.min(
    viewportHeight,
    websiteImageHeight + websiteImageTop
  ); // Calculated the visible height within the viewport.
  const websiteImageRelativePosition = viewportHeight - websiteImageTop; // Calculated the position relative to the viewport.
  const websiteImageVisibilityPercent = Math.min(
    Math.max(websiteImageRelativePosition / websiteImageVisibleHeight, 0),
    1
  ); // Calculated the percentage of visibility.
  const websiteImageTiltAngle = 20 - 20 * websiteImageVisibilityPercent; // Calculated the tilt angle based on visibility.

  websiteImage.style.transform = `perspective(600px) rotateX(${websiteImageTiltAngle}deg)`; // Applied the tilt transformation.

  // Calculated the slide effect for the "image-software-application" based on the scroll position.
  const maxSlideDistance = 100; // Defined the maximum slide distance.
  const maxScrollHeight = documentHeight - viewportHeight; // Calculated the maximum scrollable height.
  const scrollPercent = currentScrollPosition / maxScrollHeight; // Calculated the scroll percentage.
  const slideDistance = scrollPercent * maxSlideDistance; // Calculated the slide distance.

  // Applied the slide transformation to the "image-software-application".
  applicationImage.style.transform = `translateX(-${slideDistance}px)`; // Applied the slide transformation.
  // Updated the previous scroll position for reference in the next scroll event.
  previousScrollPosition = currentScrollPosition;
});
