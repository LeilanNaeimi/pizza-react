const calcBtn = document.querySelector('.btn-calc');
const btnback = document.querySelector('.btn-back');

const calc = document.querySelector('.calc');
const age = document.querySelector('.age');
const main = document.querySelector('.main');

// age.classList.remove('hidden');
// main.classList.add('hidden');
// calc.classList.add('hidden');

function backToMain() {
  console.log('back to main');
  // age.classList.add('hidden');
  // main.classList.remove('hidden');
}

btnback.addEventListener('click', backToMain);

const calcAge = () => {
  let dob = document.getElementById('dob').value;
  let [month, day, year] = dob.split('/');

  console.log('calc');

  const nowYear = new Date().getFullYear();
  const age = nowYear - year;
  if (!dob) return;
  console.log(dob > nowYear ? 'Enter bod' : `your age is ${age} years old`);
  document.querySelector('#result').innerHTML = `your age is ${age} years old`;
};

calcBtn.addEventListener('click', calcAge);
