var slides = document.querySelectorAll(".slide");
// var dots = document.querySelectorAll(".dot");
var index = 0;

console.log("slider active")
function prevSlide(){
  index+=Number(-1);
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(){
  index+=Number(-1);
  console.log("next slide")
  changeSlide();
}

changeSlide();

function changeSlide(){
    
  if(index>slides.length-1){
    index=0;}
  
  if(index<0){
    index=slides.length-1;}
  
  
  
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      
      // dots[i].classList.remove("active");
      
      
    }
    
    slides[index].style.display = "block";
    // dots[index].classList.add("active");

  

}

setInterval(nextSlide,2000)
