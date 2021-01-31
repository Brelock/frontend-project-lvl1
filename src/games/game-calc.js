import startEngine from '../index.js';
import generateRandomNum from '../utilsRandom.js';

const description = 'What is the result of the expression?';

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
  const randomOperation = operations[generateRandomNum(0, operations.length - 1)];
  const firstOperand = generateRandomNum(1, 10);
  const secondOperand = generateRandomNum(1, 10);
  const question = `${firstOperand} ${randomOperation} ${secondOperand}`;
  const answer = getAnswer(randomOperation, firstOperand, secondOperand).toString();
  return [question, answer];
};

export default () => startEngine(description, generateQuestionAndAnswer);
