import readlineSync from 'readline-sync';
import welcomeToGame from '../helloToGame.js';

function egcd(a, b) {
  let c = a;
  let d = b;
  if (c === 0) return d;
  while (d !== 0) {
    if (c > d) c -= d;
    else d -= c;
  }
  return c;
}

export default function gameGcd() {
  const name = welcomeToGame();
  console.log('Find the greatest common divisor of given numbers.');
  const numAnswer = 3;
  const [min, max] = [15, 5];

  for (let i = 0; i < numAnswer; i += 1) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    const question = `${num1} ${num2}`;
    console.log('Question:', question);
    const ansStr = readlineSync.question('Your answer: ');
    const e = egcd(num1, num2);
    const answer = Number(ansStr);
    if (answer !== e) {
      console.log(`'${answer}' ${"is wrong answer ';'(. Correct answer was,"} '${e}'.`);
      console.log(`${'Let\'s try again,'} ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations,'} ${name}!`);
}
