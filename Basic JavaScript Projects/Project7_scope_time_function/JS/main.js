var X = "Mary Sue";     //Assign a global variable

function Mary() {       //Set the content of the HTML element with id "Mary" to the
    document.getElementById("Mary").innerHTML = X;      //value of X ("Mary Sue")
}

function white() {
    var Y = "...white as snow"      //Assign a local variable
    document.getElementById("white").innerHTML = Y;
}

function black() {      //Function with an intentional error
    document.getElementById("black").innerHTML = Y;
    console.log(Y);     //Debug the error in the console
}

function nightOwl() {
    const currentTime = new Date();     //Assign a date object with the current date & time
    if (currentTime.getHours() >= 22 || currentTime.getHours() <= 3) {
        document.getElementById("studying").innerHTML = "You're a night owl.";
    }       //Display "You're a night owl." if the user is studying
}           //between the hours of 10:00pm and 03:00am


let clicks = 0;

function clicky() {
    clicks ++;      //Increment the clicks variable
    if (clicks > 5) {       //Display "STOP CLICKING!!!" after five clicks
        document.getElementById("clicking").innerHTML = "STOP CLICKING!!!";
    }
}


function ducks() {
    let howManyDucks = document.getElementById("duckQuantity").value;
    let ducksHere = document.getElementById("ducks");
    if (isNaN(howManyDucks)) {          //If the value entered is not a number
        ducksHere.innerHTML = "Please enter a number.";
    }
    else if (howManyDucks % 1 != 0) {   //If the number of ducks is not an integer
        ducksHere.innerHTML = "You monster! Put them back together!";
    }
    else if (howManyDucks > 7) {        //If there are more than 7 ducks
        ducksHere.innerHTML = "Too many ducks!";
    }
    else if (howManyDucks >= 5) {       //If there are 5 to 7 ducks, inclusive
        ducksHere.innerHTML = "Just enough ducks. :)"
    }
    else {                              //If there are fewer than 5 ducks
        ducksHere.innerHTML = "Not enough ducks.";
    }
}