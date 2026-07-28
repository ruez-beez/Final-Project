
const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
  (slide, index) =>{
    slide.style.left = `${index * 100}%`
  }
)
const goPrev = () =>
{
  counter--
  slideImage()
} 

const goNext = () =>
{
  counter++
  slideImage()
}


const slideImage = () =>
{
  slides.forEach(
  (slide) => {
    
    slide.style.transform = `translateX(-${counter * 100}%)`

  }
  )
}


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
  setTimeout(showSlides, 10000); 
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


