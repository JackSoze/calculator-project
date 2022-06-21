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
            console.log('jack')
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



const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', function(e){
    const display = document.querySelector('.operation');
    const content = document.createElement('div');
    content.classList.add('remove')
    content.textContent = (`${e.target.outerText}`)
    display.appendChild(content)
    numberStore.push((parseInt(`${e.target.outerText}`)))//pushed to numberStore as single digit arrays
}))
//function to populate and store the symbols
const controls = document.querySelectorAll('.control');
controls.forEach(controller => controller.addEventListener('click', function(e){
   

    const display = document.querySelector('.operation');

    const returnToDisplay = document.createElement('div');

    const content = document.createElement('div');

    content.classList.add('remove')
   
    
    let currentsaa = function() {
        if (conversion([numberStore]) == undefined) {
            return numberStore[0];
        } else {
            return conversion([numberStore]);
        }

    } //TODO: simplify this here
    current = currentsaa();

    let element = document.querySelector(".operation");
    while (element.firstChild) {
     element.removeChild(element.firstChild);
    }
    
    operationNumbers.push(current);//converted to multidigits and pushed to opnumbers
    numberStore = [];//resets the number store array0
    
    currentAnswer = [];
    operationNumbers.push(`${e.target.outerText}`)
    returnToDisplay.textContent = operationNumbers[0];
    display.appendChild(returnToDisplay)


    content.textContent = (`${e.target.outerText}`)
    display.appendChild(content);
}))
//function to run the equals operator
const equals = document.querySelector('.equals');
equals.addEventListener('click',function(e) {
    let current = conversion([numberStore]);
    operationNumbers.push(current);
    numberStore = [];
    const answer = document.querySelector('.results');
    const content = document.createElement('div');
    content.textContent = `${operate(operationNumbers)}`;
    currentAnswer.push(parseInt(`${operate(operationNumbers)}`));
    numberStore.push(currentAnswer[0]);
    answer.appendChild(content);
    operationNumbers = [];
    
})

