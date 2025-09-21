const section = document.querySelector(".section-2");
const slides = Array.from(section.querySelectorAll(".achievement"));
const prevBtn = document.getElementById("google-keyboard_arrow_left");
const nextBtn = document.getElementById("google-keyboard_arrow_right");

const track = document.createElement("div");
track.style.display = "flex";
track.style.transition = "transform 0.5s ease-in-out";
track.style.willChange = "transform";

slides.forEach((slide) => track.appendChild(slide));
section.insertBefore(track, nextBtn);

const slideWidth = slides[0].getBoundingClientRect().width + 20;
let index = 0;

const maxIndex = slides.length - 3;

function updateCarousel() {
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});
