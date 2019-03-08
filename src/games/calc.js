import { gameProcess } from '..';
import { getRandomNumber } from '../utils';

const calcNumberOne = () => getRandomNumber(1, 99);
const calcNumberTwo = () => getRandomNumber(1, 99);
const getOperator = () => {
  const part = getRandomNumber(1, 3);
  switch (part) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return 'error';
  }
};
const calcOperator = () => getOperator();
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
      return 'error';
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
