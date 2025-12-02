//Countdown timer----------

function countdown() {
    var seconds = document.getElementById("seconds").value;
    var timer = document.getElementById("timer");

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);      //Sets a delay of 1 second
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}



//Slideshow----------

let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);    //Moves to the next slide
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);     //Jumps to the slide corresponding to the dot clicked
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {    //Loops back around to the first slide if "next" is clicked while viewing the last slide
        slideIndex = 1;
    }
    if (n < 1) {    //Loops back around to the last slide if "previous" is clicked while viewing the first slide
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {   //Sets slides to not be displayed
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {     //Sets dots to inactive appearance
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";   //Makes the current slide be displayed
    dots[slideIndex-1].className += " active";  //Sets the dot corresponding to the current slide to active appearance
}