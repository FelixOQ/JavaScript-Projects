function getReceipt() {
    //Initialises a string to pass from function
    //to function and grow into a full receipt
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 9;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 15;
    } else if (selectedSize === "Jumbo Pizza") {
        sizeTotal = 18;
    } else if (selectedSize === undefined) {
        document.getElementById("showText").innerHTML = "You must choose a size!";
        return;     //If no size is selected, exit the function
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = €" + sizeTotal.toFixed(2));
    console.log("size text1: " + text1);
    console.log("subtotal: €" + runningTotal.toFixed(2));
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + " - " + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {     //First main topping is free, then
        toppingTotal = (toppingCount - 1);  //€1.00 per topping
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "€" + toppingTotal.toFixed(2));
    console.log("topping text1: " + text1);
    console.log("subtotal: €" + runningTotal.toFixed(2));
    getVeggies(runningTotal, text1);
}

function getVeggies(runningTotal, text1) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("veg");
    for (var v = 0; v < vegArray.length; v++) {
        if (vegArray[v].checked) {
            selectedVeg.push(vegArray[v].value);
            console.log("selected topping item: (" + vegArray[v].value + ")");
            text1 = text1 + " - " + vegArray[v].value + "<br>";
        }
    }
    var vegCount = selectedVeg.length;
    if (vegCount > 2) {     //First 2 vegetable toppings are free,
        vegTotal = (vegCount - 2) / 2;  //then €0.50 per topping
    } else {
        vegTotal = 0;
    }
    runningTotal = (runningTotal + vegTotal);
    console.log("total selected veg toppings: " + vegCount);
    console.log(vegCount + " veggie - 2 free veggies = " + "€" + vegTotal.toFixed(2));
    console.log("veggies text1: " + text1);
    console.log("Purchase Total: €" + runningTotal.toFixed(2));
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>€" + runningTotal.toFixed(2) + "</strong></h3>";
}