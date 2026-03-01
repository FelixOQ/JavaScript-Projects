const Calculator = {    //Creates an object to keep track of values
    Display_Value: '0',     //Displays 0 on the calculator screen
    First_Operand: null,    //Will hold the first operand for any expressions
    Wait_Second_Operand: false,     //Checks whether or not the second operand has been input
    operator: null      //Will hold the operator
}

function Input_Digit(digit) {   //Modifies values each time a button is clicked
    const {Display_Value, Wait_Second_Operand} = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;   //Sets Display_Value to the key that was clicked
        Calculator.Wait_Second_Operand = false;
    } else {    //Overwrites Display_Value if the current value is 0, otherwise adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {   //Handles decimal points
    if (Calculator.Wait_Second_Operand === true) return;    //Ensures that accidentally clicking the decimal point doesn't cause errors
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;    //Add a decimal point if not already present
    }
}

function Handle_Operator(Next_Operator) {   //Handles operators
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);   //When an operator key is pressed, converts the current number displayed
                                //on the screen (in string form) to number form, and then stores the result in Value_of_Input
    if (operator && Calculator.Wait_Second_Operand) {   //If an operator already exists and Wait_Second_Operand is true,
        Calculator.operator = Next_Operator;            //updates Calculator.operator and exits the function.
        return;
    }
    if (First_Operand == null) {    //If First_Operand value doesn't already exist, stores the value of the
        Calculator.First_Operand = Value_of_Input;  //display (in number form) in Calculator.First_Operand
    } else if (operator) {  //Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);  //The function that 
                            //matches the operator in the Perform_Calculation object is executed
        result = Number(result).toFixed(9);     //Adds a fixed amount of digits after the decimal
        result = (result * 1).toString();       //Removes any trailing 0s
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {     //Updates calculator screen with the contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

//Section for monitoring button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const {target} = event; //Target variable is an object that represents the element that was clicked
    if (!target.matches('button')) {    //If the element that was clicked is not a button, exit the function
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})