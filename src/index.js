import readlineSync from 'readline-sync';
import welcomeToGame from './cli.js';

const roundsCount = 3;

export default (descriptionGame, getQuestionAndCorrectAnswer) => {
  const name = welcomeToGame();
  console.log(descriptionGame);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!'`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
