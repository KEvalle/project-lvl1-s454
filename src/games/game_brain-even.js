import {
  welcome, acquaintance, descriptionEven, check,
} from '..';

export default () => {
  const countQuestion = 3;
  welcome();
  descriptionEven();
  const name = acquaintance();
  check(countQuestion, name, 'brain-even');
};
