// ACTION:
// Verify.
// Efficiency.

// --------------------------------- BODY ---------------------------------

// Retrieved the DOM element representing the images.
const imgWeb = document.querySelector(".img-software-web");
const imgApp = document.querySelector(".img-software-app");

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
  const imgWebRect = imgWeb.getBoundingClientRect(); // Retrieved the position and dimensions of the element.
  const imgWebTop = imgWebRect.top; // Calculated the distance from the top of the viewport to the element.
  const imgWebHeight = imgWebRect.height; // Retrieved the height of the element.
  const imgWebVisibleHeight = Math.min(
    viewportHeight,
    imgWebHeight + imgWebTop
  ); // Calculated the visible height within the viewport.
  const imgWebRelativePosition = viewportHeight - imgWebTop; // Calculated the position relative to the viewport.
  const imgWebVisibilityPercent = Math.min(
    Math.max(imgWebRelativePosition / imgWebVisibleHeight, 0),
    1
  ); // Calculated the percentage of visibility.
  const imgWebTiltAngle = 20 - 20 * imgWebVisibilityPercent; // Calculated the tilt angle based on visibility.

  imgWeb.style.transform = `perspective(600px) rotateX(${imgWebTiltAngle}deg)`; // Applied the tilt transformation.

  // Calculated the slide effect for the "image-software-application" based on the scroll position.
  const maxSlideDistance = 100; // Defined the maximum slide distance.
  const maxScrollHeight = documentHeight - viewportHeight; // Calculated the maximum scrollable height.
  const scrollPercent = currentScrollPosition / maxScrollHeight; // Calculated the scroll percentage.
  const slideDistance = scrollPercent * maxSlideDistance; // Calculated the slide distance.

  // Applied the slide transformation to the "image-software-application".
  imgApp.style.transform = `translateX(-${slideDistance}px)`; // Applied the slide transformation.
  // Updated the previous scroll position for reference in the next scroll event.
  previousScrollPosition = currentScrollPosition;
});

//
//
//

// --------------------------------- COOKIE ---------------------------------

// Defined a function to close a popup.
function popupClose(id) {
  // Retrieved the DOM element representing the popup.
  const popup = document.querySelector(id);
  if (popup) {
    // Applied a transition effect to the popup.
    popup.style.transition = "opacity 1s ease-out";
    // Set the opacity of the popup to 0.
    popup.style.opacity = 0;
    // Set a timeout to hide the popup immediately.
    setTimeout(function () {
      popup.style.display = "none";
    }, 0);
  }
}

// Ensures the DOM content is fully loaded before executing JavaScript.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieved the DOM elements representing the buttons.
  let btnClose = document.getElementById("google-close");
  let btnDeny = document.getElementById("btn-deny");
  let btnAccept = document.getElementById("btn-accept");
  // let btnSave = document.getElementById("btn-save");

  // Added event listeners to each button to trigger the close function.
  if (btnClose) {
    btnClose.addEventListener("click", function () {
      popupClose(".cookie");
    });
  }
  if (btnDeny) {
    btnDeny.addEventListener("click", function () {
      popupClose(".cookie");
    });
  }
  if (btnAccept) {
    btnAccept.addEventListener("click", function () {
      popupClose(".cookie");
    });
  }
  // if (btnSave) {
  //   btnSave.addEventListener("click", function () {
  //     popupClose(".cookie");
  //   });
  // }
  // cookie-bar and cookie-settings open / close simultaneously
});

//
//
//
//
//
//
//
//

document.addEventListener("DOMContentLoaded", function () {
  let arrDown = document.querySelector("#google-keyboard_arrow_down");

  if (arrDown) {
    arrDown.addEventListener("click", function () {
      //
    });
  }
});
