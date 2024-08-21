// JavaScript includes annotations to facilitate code readability.

// --------------------------------- BODY ---------------------------------

// Retrieved the DOM element representing the images.
const imgWeb = document.querySelector(".img-software-web");
const imgApp = document.querySelector(".img-software-app");

// Initialised a variable to store the starting scroll position.
let previousScrollPosition = 0;

// Added a scroll event listener to the window.
window.addEventListener("scroll", function () {
  // Retrieved the scroll position of the window.
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

  // Calculated the slide effect for the "img-software-app" based on the scroll position.
  const maxSlideDistance = 100; // Defined the maximum slide distance.
  const maxScrollHeight = documentHeight - viewportHeight; // Calculated the maximum scrollable height.
  const scrollPercent = currentScrollPosition / maxScrollHeight; // Calculated the scroll percentage.
  const slideDistance = scrollPercent * maxSlideDistance; // Calculated the slide distance.

  // Applied the slide transformation to the "img-software-app".
  imgApp.style.transform = `translateX(-${slideDistance}px)`; // Applied the slide transformation.
  // Updated the previous scroll position for reference in the next scroll event.
  previousScrollPosition = currentScrollPosition;
});

// --------------------------------- COOKIE ---------------------------------

// ----------- OPEN / CLOSE FUNCTION -----------

// Defined a function to close a popup.
function popupClose(id) {
  // Retrieved the DOM element representing the popup.
  const popup = document.querySelector(id);
  if (popup) {
    // Applied a transition effect to the popup.
    popup.style.transition = "opacity 1s ease-out";
    // Set the opacity of the popup to 0.
    popup.style.opacity = 0;
    // Set a timeout to close the popup immediately.
    setTimeout(function () {
      popup.style.display = "none";
    }, 0);
  }
}

// Defined a function to open a popup.
function popupOpen(id) {
  // Retrieved the DOM element representing the popup.
  const popup = document.querySelector(id);
  if (popup) {
    // Applied a transition effect to the popup.
    popup.style.transition = "opacity 1s ease-out";
    // Set the opacity of the popup to 100.
    popup.style.opacity = 100;
    // Set a timeout to open the popup immediately.
    setTimeout(function () {
      popup.style.display = "block";
    }, 0);
  }
}

// ----------- OPEN / CLOSE APPLIED -----------

// Ensures the DOM content is fully loaded before executing JavaScript.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieved the DOM elements representing the buttons.
  // let cookieBar = document.getElementById(".cookie-bar");
  // let cookieSetting = document.getElementById(".cookie-setting");
  let btnSettings = document.getElementById("btn-settings");
  let btnDeny = document.getElementById("btn-deny");
  let btnAccept = document.getElementById("btn-accept");
  let btnClose = document.getElementById("google-close");
  let btnArrow = document.getElementById("google-chevron_left");
  let btnSave = document.getElementById("btn-save");

  // Added event listeners to each button to trigger the close function.
  if (btnSettings) {
    btnSettings.addEventListener("click", function () {
      // Synchronised.
      popupClose(".cookie-bar");
      popupOpen(".cookie-setting");
    });
  }
  if (btnDeny) {
    btnDeny.addEventListener("click", function () {
      popupClose(".cookie-bar");
    });
  }
  if (btnAccept) {
    btnAccept.addEventListener("click", function () {
      popupClose(".cookie-bar");
    });
  }
  if (btnClose) {
    btnClose.addEventListener("click", function () {
      popupClose(".cookie-bar");
    });
  }
  if (btnArrow) {
    btnArrow.addEventListener("click", function () {
      // Synchronised.
      popupClose(".cookie-setting");
      popupOpen(".cookie-bar"); // FIX: css alters when clicked
    });
  }
  if (btnSave) {
    btnSave.addEventListener("click", function () {
      popupClose(".cookie-setting");
    });
  }
});

// ----------- DROP DOWN -----------

document.addEventListener("DOMContentLoaded", function () {
  let arrDown = document.querySelector("#google-keyboard_arrow_down");
  let arrPosition = 0;

  if (arrDown) {
    arrDown.addEventListener("click", function () {
      // Retrieved the DOM elements representing the sections.
      let cookieTable = document.querySelector(".cookie-section-4");
      let cookiePrivado = document.querySelector(".cookie-section-5");

      if (cookieTable && cookiePrivado) {
        if (cookieTable && cookiePrivado) {
          const checkHidden =
            cookieTable.style.display === "none" ||
            cookieTable.style.display === "";

          cookieTable.style.display = checkHidden ? "block" : "none";
          cookiePrivado.style.display = checkHidden ? "block" : "none";
        }
      }

      arrDown.addEventListener("click", function () {
        arrPosition = (arrPosition + 180) % 360; // Incremented the angle by 180 degrees.
        arrDown.style.transform = `rotate(${arrPosition}deg)`;
      });
    });
  }
}); // FIX: table overlaps
