const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
});

backBtn.addEventListener("click", () => {
  current--;
  if (current < 0) current = slides.length - 1;
  showSlide(current);
});

