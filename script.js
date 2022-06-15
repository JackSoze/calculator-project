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
function operate (a, operator, b) {
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
let operationNumbers = []
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', function(e){
    console.log((e.target.outerText))
    const display = document.querySelector('.operation');
    const content = document.createElement('div');
    content.textContent = (`${e.target.outerText}`)
    display.appendChild(content)
    operationNumbers.push(parseInt(`${e.target.outerText}`))
}))
//function to populate and store the symbols
// const numbers = document.querySelectorAll('.number');
// numbers.forEach(number => number.addEventListener('click', function(e){
//     console.log((e.target.outerText))
//     const display = document.querySelector('.operation');
//     const content = document.createElement('div');
//     content.textContent = (`${e.target.outerText}`)
//     display.appendChild(content)
//     operationNumbers.push(`${e.target.outerText}`)

//function to run the equals operator
const equals = document.querySelector('.equals');
equals.addEventListener('click',function(e) {
    console.log(operate([operationNumbers]));
})