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
  const randomOperation = operations[randomValue(0, 2)];
  const firstOperand = randomValue(1, 10);
  const secondOperand = randomValue(1, 10);
  const gameQuestion = `${firstOperand} ${randomOperation} ${secondOperand}`;
  const correctAnswerNum = getAnswer(randomOperation, firstOperand, secondOperand);
  const correctAnswer = correctAnswerNum.toString();
  return ([gameQuestion, correctAnswer]);
};

export default () => startEngine(gameDescription, generateQuestionAndAnswer);
