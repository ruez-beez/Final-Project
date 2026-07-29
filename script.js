
// const slides = document.querySelectorAll(".slide")
// var counter = 0;
// slides.forEach(
//   (slide, index) =>{
//     slide.style.left = `${index * 100}%`
//   }
// )
// const goPrev = () =>
// {
//   counter--
//   slideImage()
// } 

// const goNext = () =>
// {
//   counter++
//   slideImage()
// }


// const slideImage = () =>
// {
//   slides.forEach(
//   (slide) => {
    
//     slide.style.transform = `translateX(-${counter * 100}%)`

//   }
//   )
// }

//Planet slider
document.addEventListener("DOMContentLoaded", () => {

const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; // Track the current slide index

// Function to update the slider position
function updateSliderPosition() {
  const offset = currentIndex * -100; // Calculate the offset for sliding
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

// Event listener for the Next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
  updateSliderPosition();
});

// Event listener for the Previous button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the last slide
  updateSliderPosition();
});

});


//auto slides
document.addEventListener("DOMContentLoaded", () => {
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 15000); 
} 

});


// FAQ dropdown

document.addEventListener("DOMContentLoaded", () => {

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

});


