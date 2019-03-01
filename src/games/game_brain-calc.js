import {
  welcome, acquaintance, descriptionCalc, check,
} from '..';

export default () => {
  const countQuestion = 3;
  welcome();
  descriptionCalc();
  const name = acquaintance();
  check(countQuestion, name, 'brain-calc');
};
