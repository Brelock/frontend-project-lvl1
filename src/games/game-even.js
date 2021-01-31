import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => (num % 2 === 0);

const generateQuestionAndAnswer = () => {
  const question = generateRandomNum(1, 10);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startEngine(description, generateQuestionAndAnswer);
