
// doesnt matter starts here...
// source: w3schools , function: image slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = x.length;} 
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-white");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("w3-white");
}

// doesnt matter ends here.....

console.log("entered page1");

var currentAboutImage = 1;

$("#buttonPage1").hide();

$("#page1").on("swipeleft",function() {
	
	console.log("swiped");
	
		
	if(currentAboutImage < 3) currentDiv(currentAboutImage+1);
	
		

	
	if(currentAboutImage == 2) {
		
		$("#buttonPage1").fadeIn(500);
	}
	
	currentAboutImage++;
	
});