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