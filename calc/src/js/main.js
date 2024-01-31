const age = document.querySelector('.age');
const calc = document.querySelector('.calc');
const main = document.querySelector('.main');

const btnCalcAge = document.querySelector('.btn-calcAge');
const calculator = document.querySelector('.btn-calculator');

// age.classList.add('hidden');
// calc.classList.add('hidden');

function openCalcAge() {
  console.log('open calc age');

  age.classList.remove('hidden');
  calc.classList.add('hidden');
  main.classList.add('hidden');
}

function openCalculator() {
  console.log('open calculator');

  age.classList.add('hidden');
  calc.classList.remove('hidden');
  main.classList.add('hidden');
}

btnCalcAge.addEventListener('click', openCalcAge);
calculator.addEventListener('click', openCalculator);
