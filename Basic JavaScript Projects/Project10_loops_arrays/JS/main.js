function Call_Loop() {      //While loop counts down from 5 to 1
    let i = 5;
    let loopText = document.getElementById("loop");

    while (i > 0) {
        loopText.innerHTML += "Counting down: " + i + "<br>";
        i--;
    }

    document.getElementById("length").innerHTML = loopText.innerText.length;    //Displays the length of the string in id loopText
}

function for_Loop() {       //For loop adds each instrument to final_List from last to first
    let instrument_List = ["Viola", "Cello", "Saxophone", "Theremin", "Vessel flute", "Uileann pipes", "Erhu", "Lute", "Sheng"];
    let final_List = "";
    let counter;
    for (counter = instrument_List.length - 1; counter >= 0; counter--) {
        final_List += instrument_List[counter] + "<br>";
    }
    document.getElementById("instruments").innerHTML = final_List;      //Displays the final list of instruments
}

function array_Function() {     //Displays specific values from the Christmas array
    let Christmas = ["bauble", "tree", "decoration", "Santa"];
    let xmasText = document.getElementById("Array");
    xmasText.innerHTML = "Time to put up the Christmas " + Christmas[1] + " for " + Christmas[3];
}

const Animal = {type: "cow", name: "Daisy", colour: "brown"};   //Creates an object constant

function constant_function() {      //Displays info about the Animal object
    document.getElementById("Constant").innerHTML = Animal.name + " is a " + Animal.colour + " " + Animal.type;
}

function constant_update() {        //Adds a property and modifies a property value of the Animal object
    Animal.colour = "black and white";
    Animal.sex = "female";
    document.getElementById("Constant").innerHTML = Animal.name + " is now a " + Animal.colour + " " + Animal.sex + " " + Animal.type;
}

function allCaps(x) {       //Returns the string input in all caps
    return x.toUpperCase();
}

document.getElementById("return").innerHTML = allCaps("Mico");      //Displays "MICO" in the browser

let Perry = {firstName: "Peregrine",        //Creates an object with properties and a method
    lastName: "Galanodel",
    class: "Wizard",
    level: 5,
    levelUp: function() {
        if (this.level < 20) {
            this.level++;
        }
        document.getElementById("Perry").innerHTML = `${Perry.firstName} ${Perry.lastName} is a level ${Perry.level} ${Perry.class}.`;
    }           //Displays Perry's info in the browser each time they level up
};

document.getElementById("Perry").innerHTML = `${Perry.firstName} ${Perry.lastName} is a level ${Perry.level} ${Perry.class}.`;
        //Displays Perry's info when the webpage loads

for (i=0; i<10; i++) {      //For loop utilising continue and break statements
    if (i%3 === 0) {continue;}
    document.getElementById("count").innerHTML += i + "<br>";
    if (i === 10) {break;}
}