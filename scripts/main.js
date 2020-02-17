// Define functions for basic mathmatical operations
let add = function(a, b) {
	return a + b;
};

let subtract = function(a, b) {
	return a - b;
};

let divide = function(a, b) {
	return a / b;
};

let multiply = function(a, b) {
	return a * b;
};

let isInt = function(a) {
    return a % 1 == 0;
};

let operate = function(num1, num2, operatorFN) {
    return operatorFN(num1, num2);
};

let clearInput = function() {
    document.getElementById("calculator-input").value = 0;
    document.getElementById("calculator-input-history").value = '';
    firstNum = undefined;
    secondNum = undefined;
    operatorInput = undefined;
};

function displayNumValue(input) {
    document.getElementById("calculator-input").value = input;
};

function displayHistory(input) {
    let historyDisplay = document.getElementById("calculator-input-history").value;
    historyDisplay += input;
    document.getElementById("calculator-input-history").value = historyDisplay;
};

function storeNumValue(input) {
    displayHistory(input);
    if (firstNum == undefined) {
        firstNum = input;
        displayNumValue(firstNum);
    } else if (operatorInput == undefined) {
        firstNum += input;
        displayNumValue(firstNum);
    } else if (secondNum == undefined) {
        secondNum = input;
        displayNumValue(secondNum);
    } else {
        secondNum += input;
        displayNumValue(secondNum);
    }
};

function calculateResult() {
    let newResult = 0;
    if (secondNum == 0 && operatorInput == divide) {
        alert("Dividing by zero is forbidden...");
    }
    if (firstNum != undefined && secondNum != undefined && operatorInput != undefined) {
        // Can replace all this with the code below:
        // displayNumValue(operate(+firstNum, +secondNum, operatorInput));
        newResult = operate(+firstNum, +secondNum, operatorInput);
        if (isInt(newResult) == true) {
            displayNumValue(newResult);
        } else {
            newResult = parseFloat(newResult).toFixed(2);
            displayNumValue(newResult);
        }
        // Until here
        firstNum = undefined;
        secondNum = undefined;
        operatorInput = undefined;
    }
};

// Enable functionaility below
let firstNum = undefined;
let secondNum = undefined;
let operatorInput = undefined;

document.getElementById("key-0").addEventListener("click", function() {storeNumValue("0")});
document.getElementById("key-1").addEventListener("click", function() {storeNumValue("1")});
document.getElementById("key-2").addEventListener("click", function() {storeNumValue("2")});
document.getElementById("key-3").addEventListener("click", function() {storeNumValue("3")});
document.getElementById("key-4").addEventListener("click", function() {storeNumValue("4")});
document.getElementById("key-5").addEventListener("click", function() {storeNumValue("5")});
document.getElementById("key-6").addEventListener("click", function() {storeNumValue("6")});
document.getElementById("key-7").addEventListener("click", function() {storeNumValue("7")});
document.getElementById("key-8").addEventListener("click", function() {storeNumValue("8")});
document.getElementById("key-9").addEventListener("click", function() {storeNumValue("9")});

document.getElementById("key-/").addEventListener("click", function() {
    if (firstNum != undefined && secondNum != undefined && operatorInput != undefined) {
        calculateResult();
        firstNum = document.getElementById("calculator-input").value;
    }
    displayHistory(' / ');
    operatorInput = divide;
});

document.getElementById("key-*").addEventListener("click", function() {
    if (firstNum != undefined && secondNum != undefined && operatorInput != undefined) {
        calculateResult();
        firstNum = document.getElementById("calculator-input").value;
    }
    displayHistory(' * ');
    operatorInput = multiply;
});

document.getElementById("key--").addEventListener("click", function() {
    if (firstNum != undefined && secondNum != undefined && operatorInput != undefined) {
        calculateResult();
        firstNum = document.getElementById("calculator-input").value;
    }
    displayHistory(' - ');
    operatorInput = subtract;
});

document.getElementById("key-+").addEventListener("click", function() {
    if (firstNum != undefined && secondNum != undefined && operatorInput != undefined) {
        calculateResult();
        firstNum = document.getElementById("calculator-input").value;
    }
    displayHistory(' + ');
    operatorInput = add;
});

document.getElementById("key-CLEAR").addEventListener("click", function() {clearInput()});
document.getElementById("key-=").addEventListener("click", function() {calculateResult()});


// EXTRA OPERATOR FUNCTIONS
// function multiply(multArray) {
// 	let multResult = multArray[0]; 
// 	for (let i = 1; i < multArray.length; i++) {
// 		multResult *= multArray[i];
// 	}
// 	return multResult;
// };

// function sum(sumArray) {
// 	return sumArray.reduce((a, b) => a + b, 0);
// };
	
// function power(a, b) {
// 	return a ** b;
// };

// function factorial(input) {
// 	let sum = 0;

// 	if (input == 0 || input == 1) {
// 		return 1;
// 	} else {
// 		sum = 1;
// 		while (input > 0) {
// 			sum *= input;
// 			input--;
// 		}
// 	}
// 	return sum;
// };