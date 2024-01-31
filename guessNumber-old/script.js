'use strict';

const again = document.querySelector('.again');
const check = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

check.addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  console.log(`guess: ${guess}`);
  console.log(`rnd: ${secretNumber}`);
  document.querySelector('.score').value = score - 1;

  console.log(document.querySelector('.score').value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess == secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.query
      guess > secretNumber
        ? displayMessage('📈 Too high!')
        : displayMessage(' 📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
