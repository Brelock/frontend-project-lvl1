import startEngine from '../index.js';
import rundomValue from '../utilsRundom.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => (num % 2 === 0);

const generateQuestionAndAnswer = () => {
  const question = rundomValue(1, 10);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startEngine(descriptionGame, generateQuestionAndAnswer);
