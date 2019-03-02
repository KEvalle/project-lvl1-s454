import {
  welcome, acquaintance, description, check,
} from '..';

const isEven = question => question % 2 === 0;
const getQuestion = () => () => Math.floor(Math.random() * 100);
const getTrueAnswer = () => question => ((isEven(question)) ? 'yes' : 'no');
export default () => {
  welcome();
  description("Answer 'yes' if number even otherwise answer 'no'.");
  const name = acquaintance();
  check(getQuestion(), getTrueAnswer(), name);
};
