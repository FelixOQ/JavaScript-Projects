function hereThere() {  //Declares a function named hereThere()
    var here = "Is it here", there = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; or way over there?";    //Declares the variables "here" and "there" and assigns string values to each
    document.getElementById("HereThere").innerHTML = here + there;  //Changes the inner HTML content to the concatenated values of the variables "here" and "there"
}

function orBoth() { //Declares a function named orBoth()
    document.getElementById("Neither").innerHTML += ", or maybe both!";     //Adds (concatenates) a string value to the content of the HTML element with id value "Neither"
    document.getElementById("Both").innerHTML += " Not!";   //Adds a string value to the content of the HTML element with id value "Both"
}