import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const isEvenNumber = (num) => (num % 2 === 0);

const generateQuestionAndAnswer = () => {
  const question = generateRandomNum(1, 10);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startEngine('Answer "yes" if the number is even, otherwise answer "no".', generateQuestionAndAnswer);
