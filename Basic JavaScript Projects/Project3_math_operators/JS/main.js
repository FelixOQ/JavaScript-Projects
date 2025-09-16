function addThis() {    //Declares a function
    var result = 3 + 7;   //Assigns the value of the expression "3 + 7" to the variable "result"
    document.getElementById("Math").innerHTML = result;     //Displays the value of "result" in the HTML document
}

function subThis() {    //Declares a function
    var result = 17 - 8;    //Assigns the value of the expression "17 - 8" to the variable "result"
    document.getElementById("Sub").innerHTML = result;      //Displays the value of "result" in the HTML document
}

function multThis() {   //Declares a function
    var result = 4 * 2;     //Assigns the value of the expression "4 * 2" to the variable "result"
    document.getElementById("Mult").innerHTML = result;     //Displays the value of "result" in the HTML document
}

function divThis() {    //Declares a function
    var result = 21 / 3;    //Assigns the value of the expression "21 / 3" to the variable "result"
    document.getElementById("Div").innerHTML = result;      //Displays the value of "result" in the HTML document
}

function computeThis() {    //Declares a function
    var result = (4 + 8) / 3 * 3 - 6;   //Assigns the value of the expression "(4 + 8) / 3 * 3 - 6" to the variable "result"
    document.getElementById("Compute").innerHTML = result;  //Displays the value of "result" in the HTML document
}

function modThis() {    //Declares a function
    var result = 29 % 6;    //Assigns the value of the expression "29 % 6" to the variable "result"
    document.getElementById("Mod").innerHTML = result;      //Displays the value of "result" in the HTML document
}

function negThis() {    //Declares a function
    var result = 4;     //Assigns the value "4" to the variable "result"
    document.getElementById("Neg").innerHTML = -result;     //Displays the negative of the value of "result" in the HTML document
}

function incThis() {    //Declares a function
    var result = 2;     //Assigns the value "2" to the variable "result"
    result++;           //Increments the value of the variable "result" by 1
    document.getElementById("Inc").innerHTML = result;      //Displays the value of "result" in the HTML document
}

function decThis() {    //Declares a function
    var result = 3;     //Assigns the value "3" to the variable "result"
    result--;           //Decrements the value of the variable "result" by 1
    document.getElementById("Dec").innerHTML = result;      //Displays the value of "result" in the HTML document
}

function randThis() {   //Declares a function
    var result = Math.random();     //Assigns the value of the Math object method "random()" to the variable "result"
    document.getElementById("Rand").innerHTML = result;     //Displays the value of "result" in the HTML document
}

function signThis() {   //Declares a function
    var result = -33;   //Assigns the value "-33" to the variable "result"
    document.getElementById("Sign").innerHTML = Math.sign(-result);     //Displays the value of the opposite sign (negative or positive) of "result" in the HTML document
}