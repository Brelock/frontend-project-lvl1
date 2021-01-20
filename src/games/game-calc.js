import readlineSync from 'readline-sync';
import welcomeToGame from '../helloToGame.js';

export default function brainCalc() {
  const name = welcomeToGame();
  console.log('What is the result of the expression?');

  const numAnswer = 3;

  const [min, max] = [1, 5];
  const operant = ['+', '-', '*'];

  for (let i = 0; i < numAnswer; i += 1) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const operation = operant[Math.floor(Math.random() * operant.length)];

    const operationValue = {
      '+': num1 + num2,
      '-': num1 - num2,
      '*': num1 * num2,
    };

    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = String(operationValue[operation]);

    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' ${"is wrong answer ';'(. Correct answer was,"} '${correctAnswer}'.`);
      console.log(`${'Let\'s try again,'}, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations,'}, ${name}!`);
}
