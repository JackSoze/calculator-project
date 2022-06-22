//create arithmetic fuctions
function sum ([...theArgs]) {
    let theArgsSum = theArgs.reduce((number, total) =>
    {return total + number}
    , 0)
    return theArgsSum;
}

const add = function(a,b) {
    return (a+b);
  };

function subtract (a,b) {
    return a - b;
}

function multiply ([...theArgs]) {
    let answer = 1;
  for (const element of theArgs) {
    answer = element * answer;
  }
  return answer;
}

function multiplySingles (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

//operate function
function operate ([a, operator, b]) {
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        case '*':
            return multiplySingles(a,b);
            break;
        default:
            console.log('syntax error')
    }
}

//function to populate the display and store clicked number
let operationNumbers = [];
let numberStore = [];
let currentAnswer = [];

function conversion ([numbers]) {//clicked numbers pushed to numberstore as an array
    let temp = numbers.join('')//...then converted into one number         //...then pushed into the operationNumbers array
    return parseInt(temp);
}

//function to get number, initiate operations and display number
function getNumber() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', function(e){
    const display = document.querySelector('.operation');
    const content = document.createElement('div');
    content.classList.add('remove')
    content.textContent = (`${e.target.outerText}`)
    display.appendChild(content)
    numberStore.push((parseInt(`${e.target.outerText}`)))//pushed to numberStore as single digit arrays
}))
}
//function to populate and store the symbols
function operators () {
    const controls = document.querySelectorAll('.control');
    controls.forEach(controller => controller.addEventListener('click', function(e){
   
    const display = document.querySelector('.operation');
    const firstOperand = document.createElement('div');

    const content = document.createElement('div');
    content.classList.add('remove')

    let useAsEquals = function () { //use operator as equals on stringed calcs
        if (operationNumbers.length == '2') {
            getEquals();
        }
        return; 
    };
    
    useAsEquals(); 
   
    let determineCurrent = function() { //fixes the current value to either 
        if (conversion([numberStore]) == undefined) { //..the joined numbers 
            return numberStore[0];                    //..from numberstore or 
        } else {                                      //..the current answer from an operation
            return conversion([numberStore]);
        }

    } 
    current = determineCurrent();

    let element = document.querySelector(".operation");// clear operation display
    while (element.firstChild) {
     element.removeChild(element.firstChild);
    }

    operationNumbers.push(current);//converted to multidigits and pushed to opnumbers
    numberStore = [];//resets the number store array to 0
    
    currentAnswer = [];
    operationNumbers.push(`${e.target.outerText}`)
    firstOperand.textContent = operationNumbers[0];
    display.appendChild(firstOperand);

    content.textContent = (`${e.target.outerText}`)
    display.appendChild(content);

}))
}
//function to run the equals operator
function doEqualsOperator() { //this runs the equals button
    const equals = document.querySelector('.equals');
    equals.addEventListener('click',function(e) {
    getEquals();
})
} 

function getEquals() {//this does the equals operation and allows us to use operators to run  equals
    let element = document.querySelector(".results");
    while (element.firstChild) {
     element.removeChild(element.firstChild);
    }

    let current = conversion([numberStore]);
    operationNumbers.push(current);
    numberStore = [];
    const answer = document.querySelector('.results');
    const content = document.createElement('div');
    
    if (`${operate(operationNumbers)}` == 'undefined') {
        content.textContent = 'syntax error'
    } else {
        let roundedAnswer = Math.round((operate(operationNumbers)+ Number.EPSILON) * 100) / 100;
        content.textContent = `${roundedAnswer}`;
        console.log(roundedAnswer)
    }
    // content.textContent = `${operate(operationNumbers)}`;
    currentAnswer.push(parseInt(`${operate(operationNumbers)}`));
    numberStore.push(currentAnswer[0]);
    answer.appendChild(content);
    operationNumbers = [];
}
//function to clear everything
function clearEverything () {
    const clearEverything = document.querySelector('.clear');
    clearEverything.addEventListener('click', function(e) {
    operationNumbers = [];
    numberStore = [];
    currentAnswer = [];

    let element = document.querySelector(".operation");// clear operation display
    while (element.firstChild) {
     element.removeChild(element.firstChild);
    }

    let element2 = document.querySelector(".results");// clear results display
    while (element2.firstChild) {
     element2.removeChild(element2.firstChild);
    }
})
}

function calculator() {
    getNumber();
    operators();
    doEqualsOperator();
    clearEverything();
}

calculator();

