let activePlayer = "X"; //Keeps track of whose turn it is
let selectedSquares = []; //Stores an array of moves. Used to determine win coniditions.

function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some() method checks each element of the selectedSquares
    //array to see if it already contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber) //Retrieves the HTML element id that was clicked
        if (activePlayer === "X") {
            select.style.backgroundImage = "url('./images/furret.png')";
        } else {
            select.style.backgroundImage = "url('./images/sentret.jpg')";
        }
        //squareNumber and activePlayer are concatenated together and added to the array:
        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions();

        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }
        
        audio("./media/placePop.wav");

        if (activePlayer === "O") {
            disableClick(); //Disables clicking during the computer's turn
            setTimeout(function () {computersTurn();}, 1000); //Waits 1 second before
        }                           //the computer places an image and enables click

        return true;    //Required for computersTurn() function to work
    }

    function computersTurn() {
        let success = false;    //Needed for while loop
        let pickASquare;    //Stores a random number 0-8
        while (!success) {  //Allows while loop to keep trying if a square is selected already
            pickASquare = String(Math.floor(Math.random()*9));  //Picks a random number 0-8
            if (placeXOrO(pickASquare)) {   //If the random number returns true, the square hasn't been selected yet
                placeXOrO(pickASquare);     //Calls the function
                success = true;     //Changes the boolean and ends the loop
            }
        }
    }
}

function checkWinConditions() {
    if (arrayIncludes("0X", "1X", "2X")) {drawLine(50, 100, 558, 100)}
    else if (arrayIncludes("3X", "4X", "5X")) {drawLine(50, 304, 558, 304)}
    else if (arrayIncludes("6X", "7X", "8X")) {drawLine(50, 508, 558, 508)}
    else if (arrayIncludes("0X", "3X", "6X")) {drawLine(100, 50, 100, 558)}
    else if (arrayIncludes("1X", "4X", "7X")) {drawLine(304, 50, 304, 558)}
    else if (arrayIncludes("2X", "5X", "8X")) {drawLine(508, 50, 508, 558)}
    else if (arrayIncludes("6X", "4X", "2X")) {drawLine(100, 508, 510, 90)}
    else if (arrayIncludes("0X", "4X", "8X")) {drawLine(100, 100, 520, 520)}
    else if (arrayIncludes("0O", "1O", "2O")) {drawLine(50, 100, 558, 100)}
    else if (arrayIncludes("3O", "4O", "5O")) {drawLine(50, 304, 558, 304)}
    else if (arrayIncludes("6O", "7O", "8O")) {drawLine(50, 508, 558, 508)}
    else if (arrayIncludes("0O", "3O", "6O")) {drawLine(100, 50, 100, 558)}
    else if (arrayIncludes("1O", "4O", "7O")) {drawLine(304, 50, 304, 558)}
    else if (arrayIncludes("2O", "5O", "8O")) {drawLine(508, 50, 508, 558)}
    else if (arrayIncludes("6O", "4O", "2O")) {drawLine(100, 508, 510, 90)}
    else if (arrayIncludes("0O", "4O", "8O")) {drawLine(100, 100, 520, 520)}
    else if (selectedSquares.length >= 9) {
        audio("./media/tieGame.wav");
        setTimeout(function () {resetGame();}, 500);    //Sets a 0.5 second delay before resetGame() is called
    }

    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

function disableClick() {   //Makes the body temporarily unclickable
    document.getElementById("body").style.pointerEvents = "none";
    setTimeout(function () {document.getElementById("body").style.pointerEvents = "auto";}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);    //Creates a new audio object and passes the .mp3 file path as a parameter
    audio.play();
}

function drawLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext("2d");  //Gives access to methods & properties to use on canvas
    let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2, x = x1, y = y1;

    function animateLineDrawing() {     //Interacts with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);    //Creates a loop
        c.clearRect(0, 0, 608, 608);    //Clears content from the last loop iteration
        c.beginPath();  //Starts a new path
        c.moveTo(x1, y1);   //Moves to a starting point for the line
        c.lineTo(x, y);     //Indicates the end point of the line
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 255, 33, .8)";     //Sets the colour of the line
        c.stroke();     //Draws everything laid out above

        if (x1 <= x2 && y1 <= y2) { //Checks whether we've reached the end point
            if (x < x2) {x += 10;}  //Adds 10 to the previous x end point
            if (y < y2) {y += 10;}  //Adds 10 to the previous y end point
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10}
            if (y > y2) {y -= 10}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);     //Starts the animation loop
        c.clearRect(0, 0, 608, 608);    //Clears the canvas
        cancelAnimationFrame(animationLoop);
    }

    disableClick();     //Disables clicking

    audio("./media/winSparkle.wav");

    animateLineDrawing();   //Calls the main animation loop

    setTimeout(function () {clear(); resetGame();}, 1000);  //Sets delay of 1 second, then clears canvas and resets the game
}

function resetGame() {  //Resets the game in the event of a tie or a win
    for (let i = 0; i < 9; i++) {   //Iterates through each HTML square element
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}