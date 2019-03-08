export const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const cons = (x, y) => f => f(x, y);
export const car = pair => pair(x => x);
export const cdr = pair => pair((x, y) => y);
