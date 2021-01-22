import readlineSync from 'readline-sync';
import welcomeToGame from '../cli.js';

export default function launchGameEven() {
  const name = welcomeToGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEvenNumber = (num) => (num % 2 === 0);
  const [min, max] = [1, 5];

  const numAnswer = 3;
  for (let i = 0; i < numAnswer; i += 1) {
    const question = Math.floor(Math.random() * (max - min + 1)) + min;
    const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`${'Let\'s try again,'} ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations,'} ${name}!`);
}
