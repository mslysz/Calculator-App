const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
let calculation = '';

const calcFunc = function () {
  if (this.id === '=') {
    let result = eval(calculation);
    calculation = result;
  } else {
    calculation += this.id;
  }
  console.log(calculation);
  result.textContent = calculation;
};

buttons.forEach((button) => {
  button.addEventListener('click', calcFunc);
});
