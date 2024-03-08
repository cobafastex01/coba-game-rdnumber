const readlineSync = require('readline-sync');

const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
console.log('Guess the number between 1 and 100.');

let guess;
do {
  guess = readlineSync.question('Enter your guess: ');
  guess = parseInt(guess, 10);

  if (!Number.isInteger(guess)) {
    console.log('Please enter a valid number.');
  } else if (guess < randomNumber) {
    console.log('Too low!');
  } else if (guess > randomNumber) {
    console.log('Too high!');
  } else {
    console.log(`Congratulations! You guessed the number: ${randomNumber}`);
  }
} while (guess !== randomNumber);
