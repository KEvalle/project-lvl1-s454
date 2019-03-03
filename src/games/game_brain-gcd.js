import {
  gameProcess,
} from '..';
import { getRandomNumber } from '../utils';

const calcNumberOne = () => getRandomNumber(1, 99);
const calcNumberTwo = () => getRandomNumber(1, 99);
const getQuestion = () => () => `${calcNumberOne()} ${calcNumberTwo()}`;
const calculateNOD = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return calculateNOD(m, k);
  } return `${Math.abs(n)}`;
};
const getTrueAnswer = () => (question) => {
  let n = '';
  let n1 = '';

  for (let counter = 0; counter < question.length; counter += 1) {
    if (parseInt(question[counter], 10)) {
      n += (question[counter]);
    } else {
      n1 = n;
      n = '';
    }
  }
  return calculateNOD(+n1, +n);
};

export default () => {
  gameProcess('Find the greatest common divisor of given numbers.', getQuestion(), getTrueAnswer());
};
