import {
  gameProcess,
} from '..';
import { getRandomNumber } from '../utils';

const isEven = question => question % 2 === 0;
const getQuestion = () => () => getRandomNumber(1, 99);
const getTrueAnswer = () => question => ((isEven(question)) ? 'yes' : 'no');
export default () => {
  gameProcess("Answer 'yes' if number even otherwise answer 'no'.", getQuestion(), getTrueAnswer());
};
