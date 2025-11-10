function Ride_Function() {      //Creates a function to determine whether or not the user
    var Height, can_Ride;       //is tall enough to ride
    Height = document.getElementById("Height").value;
    can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = can_Ride + " to ride.";
}

function canVote() {        //Creates a function to determine whether or not the
    var age, voter;         //user is old enough to vote
    age = document.getElementById("Age").value;
    voter = (age >= 18) ? "You may vote.":"You are too young to vote.";
    document.getElementById("Vote").innerHTML = voter;
}

function Vehicle(Make, Model, Year, Colour) {   //Constructor function for vehicle objects
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //Creates a new Vehicle object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {     //Displays info for Erik's vehicle in the browser
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Colour + "-coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

var Louis = new Vehicle("Opel", "Zafira", 2017, "Blue");    //Creates a new Vehicle object

function LouisCar() {       //Displays info for Louis's vehicle in the browser
    document.getElementById("New_and_This").innerHTML = "Louis's " + Louis.Vehicle_Year + " " + Louis.Vehicle_Make + " " + Louis.Vehicle_Model + " is " + Louis.Vehicle_Colour;
}

function PlayerCharacter(Name, Species, Class, Level) {     //Constructor function
    this.Name = Name;                                       //for D&D character objects
    this.Species = Species;
    this.Class = Class;
    this.Level = Level;
}

var Perry = new PlayerCharacter("Peregrine Galanodel", "Air Genasi", "Wizard", 4);  //Creates a new PlayerCharacter object
var Nom = new PlayerCharacter("Nom", "Firbolg", "Ranger", 3);
var Lesta = new PlayerCharacter("Celesta Aradora", "Fire Genasi", "Druid", 2);

function ranger() {     //Displays info for Nom PlayerCharacter object in the browser
    document.getElementById("Ranger_Name").innerHTML = "The " + Nom.Class + "'s name is " + Nom.Name;
}


function Level() {      //Creates a function
    document.getElementById("Nested_Function").innerHTML = "Current level: " + level_Up();
    function level_Up() {
        var current_Level = 5;
        function level_6() {current_Level += 1;}    //Nested function to level up to level 6
        level_6();
        return current_Level;
    }
}