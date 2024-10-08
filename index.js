const buttons = document.querySelectorAll('button');
const resultDisplay = document.querySelector('.result');
let calculation = '';

const isValidInput = (input) => {
  return /^[0-9+\-*/.]+$/.test(input);
};

const calcFunc = function () {
  if (this.id === '=') {
    try {
      if (isValidInput(calculation)) {
        let result = eval(calculation);
        calculation = result.toString();
      }
    } catch (error) {
      calculation = 'Error';
    }
  } else if (this.id === 'clear') {
    calculation = '';
    resultDisplay.textContent = '';
  } else if (this.id === 'backspace') {
    calculation = calculation.slice(0, -1);
  } else {
    calculation += this.id;
  }
  console.log(calculation);
  resultDisplay.textContent = calculation;
};

buttons.forEach((button) => {
  button.addEventListener('click', calcFunc);
});
