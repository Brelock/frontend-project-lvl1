import startEngine from '../index.js';
import rundomValue from '../utilsRundom.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateQuestionAndAnswer = () => {
  const question = rundomValue(1, 10);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startEngine(descriptionGame, generateQuestionAndAnswer);
