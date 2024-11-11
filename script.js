'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   when there is no input
  if (!guess) {
    displayMessage(
      '⛔ No number! Please select a number from 1 to 20. (¬_¬" )'
    );

    //   when the player inputs a number lower than 0
  } else if (guess < 0) {
    displayMessage(
      'Your number is lower than 1. Please select a number from 1 to 20. (¬_¬" )'
    );
    //   when the player wins
  } else if (guess === secretNumber) {
    displayMessage('╰(*°▽°*)╯ Correct Number!!!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // highscore functionality
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //  when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Lost the game (┬┬﹏┬┬)');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//  again functionalty
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
