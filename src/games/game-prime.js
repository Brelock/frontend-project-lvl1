import readlineSync from 'readline-sync';
import welcomeToGame from '../helloToGame.js';

export default function gamePrime() {
  const name = welcomeToGame();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const isEvenNumber = (num) => {
    let i = 2;
    if (num < 2) {
      return false;
    }
    while (i <= num / 2) {
      if (num % i === 0) {
        return false;
      }
      i += 1;
    }
    return true;
  };
  const [min, max] = [1, 10];

  const numAnswer = 3;
  for (let i = 0; i < numAnswer; i += 1) {
    const question = Math.floor(Math.random() * (max - min + 1)) + min;
    const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' ${"is wrong answer ';'(. Correct answer was,"} '${correctAnswer}'.`);
      console.log(`${'Let\'s try again,'} ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations,'} ${name}!`);
}
