var slideIndex = 0;
			
showSlides();

function showSlides(){
	var slides = document.getElementsByClassName("myslides");
	var dots = document.getElementsByClassName("dot");
	var i;
	
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	
	slideIndex++;
	
	if(slideIndex > slides.length){slideIndex = 1;}
	
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active","");
	}
	
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	
	setTimeout(showSlides,2000);
}
			
			