//create arithmetic fuctions
function sum ([...theArgs]) {
    let theArgsSum = theArgs.reduce((number, total) =>
    {return total + number}
    , 0)
    return theArgsSum;
}

function subtract ([a,b]) {
    return a - b;
}

function multiply ([...theArgs]) {
    let answer = 1;
  for (const element of theArgs) {
    answer = element * answer;
  }
  return answer;
}

function divide ([a,b]) {
    return a/b;
}