let displayValue =''; //store current value
// Function to append (attach ) a value to the display
function appendToDisplay(value){
    displayValue +=value;
    document.getElementById('display').value = displayValue
}

// Function to clear display
function clearDisplay(){
    displayValue = '';
    document.getElementById('display').value = '';
}

// Function to calculate and display the result
function calculateResult(){
    try{
        // Use eval() to calculate the expression in the displayValue
        const result = eval(displayValue);

        // Update displayValue with the result
        displayValue = result;
        document.getElementById('display').value = result;
    }catch(error){
        //handle errors, such as dividing by zero;
        displayValue = "Error" 
        document.getElemtById('display').value= 'Error';
       }
}