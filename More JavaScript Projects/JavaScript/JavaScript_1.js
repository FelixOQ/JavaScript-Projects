function crafting() {
    let craftTool = "You will need ";
    switch(document.getElementById("craft").value) {
        case "Knitting":
            craftTool += "a pair of needles and some yarn.";
            break;
        case "Crochet":
            craftTool += "a hook and some yarn.";
            break;
        case "Sewing":
            craftTool += "a needle and thread."
            break;
        default:
            craftTool = "Please choose one of the following: Knitting, Crochet, or Sewing.";
    }
    document.getElementById("tools").innerHTML = craftTool;
}

function Pets() {
    let pets = document.getElementsByClassName("pets");
    pets[0].innerHTML += " in a hat";
    pets[1].innerHTML += " on a log";
    pets[2].innerHTML += " with a moose";
}

var canvas = document.getElementById("graphic");
var ctx = canvas.getContext("2d");

var grd = ctx.createLinearGradient(120, 0, 340, 0);
grd.addColorStop(0, "aliceblue");
grd.addColorStop(1, "darkslateblue");

ctx.beginPath();
ctx.arc(250, 125, 110, 0, 2*Math.PI);
ctx.fillStyle = grd;
ctx.fill();
ctx.strokeStyle = "darkmagenta";
ctx.lineWidth = 11;
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 65, 0, 2*Math.PI);
ctx.strokeStyle = "seagreen";
ctx.lineWidth = 25;
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 125, 25, 0, 2*Math.PI);
ctx.strokeStyle = "cornflowerblue";
ctx.lineWidth = 10;
ctx.stroke();