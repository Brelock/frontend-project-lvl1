import readlineSync from 'readline-sync';
import welcomeToGame from '../helloToGame.js';

export default function gameProgression() {
  const name = welcomeToGame();
  console.log('What number is missing in the progression?');
  const numAnswer = 3;
  const [min, max] = [1, 5];
  const [rmin, rmax] = [0, 9];
  const defaultLengthArray = 10;
  for (let i = 0; i < numAnswer; i += 1) {
    const arr = [];
    const stepNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const nullNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const rundomNumberHide = Math.floor(Math.random() * (rmax - rmin + 1)) + rmin;
    for (let j = nullNumber; arr.length < defaultLengthArray; j += stepNumber) {
      arr.push(j);
    }

    let numRundomElement;

    for (let iter = 0; iter < arr.length; iter += 1) {
      if (rundomNumberHide === iter) {
        numRundomElement = arr[iter];
      }
    }
    arr.forEach((item, e) => {
      if (item === numRundomElement) {
        arr[e] = '..';
      }
    });
    const streetNumbers = arr.join(' ');
    console.log('Question:', streetNumbers);
    const anStr = readlineSync.question('Your answer: ');
    const answer = Number(anStr);
    if (answer !== numRundomElement) {
      console.log(`'${answer}' ${"is wrong answer ';'(. Correct answer was,"} '${numRundomElement}'.`);
      console.log(`${'Let\'s try again,'} ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations,'} ${name}!`);
}
