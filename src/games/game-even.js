import startEngine from '../index.js';
import randomValue from '../utilsRandom.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => (num % 2 === 0);

const generateQuestionAndAnswer = () => {
  const question = randomValue(1, 10);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startEngine(gameDescription, generateQuestionAndAnswer);
