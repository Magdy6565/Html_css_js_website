let slideIndex = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");
  
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

showSlide(slideIndex);
