import {
  gameProcess,
} from '..';
import { getRandomNumber } from '../utils';

const calcNumberOne = () => getRandomNumber(1, 99);
const calcNumberTwo = () => getRandomNumber(1, 99);
const isOperator = () => {
  const randomNumber = Math.random();
  const part = 1 / 3;
  if (randomNumber <= part) {
    return '+';
  } if (randomNumber <= part * 2) {
    return '-';
  } return '*';
};
const calcOperator = () => isOperator();
const getQuestion = () => () => `${calcNumberOne()}${calcOperator()}${calcNumberTwo()}`;
const calculateNumbers = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return `${(numberOne + numberTwo)}`;
    case '-':
      return `${(numberOne - numberTwo)}`;
    case '*':
      return `${(numberOne * numberTwo)}`;
    default:
      break;
  }
};
const getTrueAnswer = () => (question) => {
  let n = '';
  let n1 = '';
  let operator;

  for (let counter = 0; counter < question.length; counter += 1) {
    if (parseInt(question[counter], 10)) {
      n += (question[counter]);
    } else {
      operator = question[counter];
      n1 = n;
      n = '';
    }
  }
  return calculateNumbers(+n1, +n, operator);
};
export default () => {
  gameProcess('What is the result of the expression?', getQuestion(), getTrueAnswer());
};
