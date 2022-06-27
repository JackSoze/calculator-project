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
            return;
        ('syntax error')
    }
}

//function to populate the display and store clicked number
let operationNumbers = [];
let numberStore = [];
let currentAnswer = [];

function conversion ([numbers]) {//clicked numbers pushed to numberstore as an array
    let temp = numbers.join('')//...then converted into one number         //...then pushed into the operationNumbers array
    return parseFloat(temp);
}

//function to get number, initiate operations and display number
function getNumberOnScreen() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', function(e){
    const display = document.querySelector('.operation');
    const content = document.createElement('div');
    content.classList.add('remove')
    content.textContent = (`${e.target.outerText}`)
    display.appendChild(content)
    numberStore.push((parseFloat(`${e.target.outerText}`)))//pushed to numberStore as single digit arrays
}))
}

function getNumberOnKeyboard(e) {
    const isNumber = isFinite(e.key) 

    if (e.key == '.' ) { // to push . without parsing it
    const display = document.querySelector('.operation');
    const content = document.createElement('div');
    content.classList.add('remove');
    
    let thisContent = (`${e.key}`)
    content.textContent = (`${thisContent}`)
    display.appendChild(content)
    numberStore.push(((`${e.key}`)))
    } else if (!isNumber) { //if input isnt a number then return
        return;
    } else {// push the number after parsing it
    const display = document.querySelector('.operation');
    const content = document.createElement('div');
    content.classList.add('remove');
    
    let thisContent = parseFloat(`${e.key}`)
    content.textContent = (`${thisContent}`)
    display.appendChild(content)
    numberStore.push((parseFloat(`${e.key}`)))
    }
    
     
}

function doOperationFromKeyboard(e) { //todo: optimize here by creating a single function that can be used as callback
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
    operationNumbers.push(`${e.key}`)
    firstOperand.textContent = operationNumbers[0];
    display.appendChild(firstOperand);

    content.textContent = (`${e.key}`)
    display.appendChild(content);
    


}
//function to run the equals operator
function doEqualsOperatorScreen() { //this runs the equals button
    const equals = document.querySelector('.equals');
    equals.addEventListener('click',function(e) {
    getEquals();
})
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
function doEqualsOperatorScreen() { //this runs the equals button
    const equals = document.querySelector('.equals');
    equals.addEventListener('click',function(e) {
    getEquals();
})
} 

function doEqualsKeyboardKey (e) {
    getEquals();
  
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
        content.textContent = `${operationNumbers}`
        currentAnswer.push(`${operationNumbers}`)
    } else {
        let roundedAnswer = Math.round((operate(operationNumbers)+ Number.EPSILON)*100) / 100;
        content.textContent = `${roundedAnswer}`;
    }
    // content.textContent = `${operate(operationNumbers)}`;
    currentAnswer.push(parseFloat(`${operate(operationNumbers)}`));
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

function clearEverythingEsc (e) {
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
}

function backSpace() {
    const eraser = document.querySelector('.eraser');
    eraser.addEventListener('click', function(e) {
        numberStore.pop();
        const operations = document.querySelector('.operation');
        operations.removeChild(operations.lastChild);
    })
}


function calculator() {
    getNumberOnScreen();
    operators();
    doEqualsOperatorScreen();
    clearEverything();
    backSpace();
}

calculator();

window.addEventListener('keydown',function(e) {
  if (e.key == '/'||e.key == '*'||e.key == '+'||e.key == '-') {
    doOperationFromKeyboard (e);
  } else if (e.key == '=' || e.key == 'Enter') {
    doEqualsKeyboardKey (e);
  } else if (e.key == 'Escape') {
    clearEverythingEsc(e);
  }else if (e.key != '=') {
    getNumberOnKeyboard(e);
  } 
  })
