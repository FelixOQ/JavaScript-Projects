var Character = {               //Defines a variable named Character
    Name: "Peregrine",          //with the dictionary key values Name,
    Species: "Air genasi",      //Species,
    Age: 22,                    //Age,
    Class: "Wizard",            //Class,
    Level: 4                    //and Level.
}

function Perry() {              //Declares a function
    delete Character.Class;     //Deletes the Class property from the Character dictionary
    document.getElementById("Dictionary").innerHTML = Character.Class;      //Displays the value of the Class property in the
}                                                                           //Character dictionary (will return "undefined" here)