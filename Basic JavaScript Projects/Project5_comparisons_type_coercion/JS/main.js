var hi = "Hey there!"       //Creates a variable named hi with value "Hey there!"

document.write(typeof hi);      //Writes the data type of the variable hi directly into the HTML document

document.write("<br>" + "7" + 6 + "<br>");      //Writes "76" directly into the HTML document

document.write("Calculation result: " + 0/0);   //Writes "Calculation result: NaN" directly into the HTML document

document.write("<br>" + isNaN("pumpkin"));      //Writes true directly into the HTML document, because "pumpkin" is not a number

document.write("<br>" + isNaN(43));         //Writes false directly into the HTML document, because 43 is a number

function infinity() {       //Declares a function
    document.getElementById("infinity").innerHTML = 38E444 + "<br>" + -7E333;   //Displays Infinity and -Infinity
};

document.write("<br>" + (6>63) + " " + (8<78));     //Writes false true directly into the HTML document

console.log(5*7);       //Displays 35 in the console

console.log(isNaN("Harry") && 4<3.2);       //Displays true in the console, because "Harry" is not a number and 4 is greater than 3.2

console.log((3*4) == 12);       //Displays true in the console, because 3*4 is equal to 12

console.log(8 == 4);            //Displays false in the console, because 8 is not equal to 4

function compare() {
    document.getElementById("triple").innerHTML =
        (5+10 === 15) + "<br>" +
        (17 === "Larry") + "<br>" +
        (4 === "4") + "<br>" +
        ("who" === "dunnit");
}           //Displays various results of === operations

function both() {
    document.getElementById("both").innerHTML =
        ((4 === 7-3) && (4 == "4")) + "<br>" +
        ((5 === "5") && (2+3 == 5));
}           //Displays differing results of AND operations

function one() {
    document.getElementById("one").innerHTML =
        ((5+10 === 15) || (5+10 === "15")) + "<br>" +
        ((!isNaN("phew")) || (7>8));
}           //Displays differing results of OR operations

function not() {
    document.getElementById("not").innerHTML =
        !(4 === "4") + "<br>" +
        !(typeof("who") === typeof("dunnit"));
}           //Displays differing results of NOT operations