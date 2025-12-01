function combine() {    //Function that concatenates several strings into one
    let part1 = "Hu is a ";
    let part2 = "gender neutral pronoun ";
    let part3 = "that can be used by anyone ";
    let part4 = "regardless of their ";
    let part5 = "gender identity.";
    let allParts = part1.concat(part2, part3, part4, part5);
    document.getElementById("words").innerHTML = allParts;
}

function sliced() {     //Function that extracts a section of a string
    let full = document.getElementById("slicer");
    let ninja = document.getElementById("sliced");
    ninja.innerHTML = full.innerHTML.slice(7, 12);
}

function upFunc() {     //Transforms a string to uppercase
    let text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = text.toUpperCase();
}

function stringify() {
    let x = 43;
    let y = 7;
    let z = y.toString();   //Converts number 7 to string "7"
    document.getElementById("adding").innerHTML = x + z;    //Type coercion leads to output of "437" instead of 50
}

function numLength() {      //Formats a number to a specific length
    let x = "47.6890342";
    let y = Number(x);
    document.getElementById("precise").innerHTML = y.toPrecision(4);
}

function fixIt() {      //Converts a numeric value to a string value, rounded to the nearest integer (0 decimals)
    let x = 7.838;
    document.getElementById("fix").innerHTML = x.toFixed();
}

function primValue() {      //Returns the primitive value of a string
    let words = "Apple pie and sugar";
    document.getElementById("value").innerHTML = words.valueOf();
}