import {
  welcome, acquaintance, description, check,
} from '..';

const calcNumberOne = () => Math.floor(Math.random() * 100);
const calcNumberTwo = () => Math.floor(Math.random() * 100);
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
  if (operator === '+') return `${(numberOne + numberTwo)}`;
  if (operator === '-') return `${(numberOne - numberTwo)}`;
  if (operator === '*') return `${(numberOne * numberTwo)}`;
  return false;
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
  welcome();
  description('What is the result of the expression?');
  const name = acquaintance();
  check(getQuestion(), getTrueAnswer(), name);
};
