import startEngine from '../index.js';
import randomValue from '../utilsRandom.js';

const gameDescription = 'What is the result of the expression?';

const getAnswer = (operation, firstOperand, secondOperand) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

const generateQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[randomValue(0, operations.length)];
  console.log(randomOperation);
  const firstOperand = randomValue(1, 10);
  const secondOperand = randomValue(1, 10);
  const gameQuestion = `${firstOperand} ${randomOperation} ${secondOperand}`;
  const correctAnswer = getAnswer(randomOperation, firstOperand, secondOperand);
  return ([gameQuestion, correctAnswer.toString()]);
};

export default () => startEngine(gameDescription, generateQuestionAndAnswer);
