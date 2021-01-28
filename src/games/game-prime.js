import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const question = generateRandomNum(1, 10);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestionAndAnswer);
