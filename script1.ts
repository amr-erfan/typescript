let sum: sumType = (a, b, c) => {
  if (c !== undefined) return a + b + c;
  return a + b;
};

let multiply: multiplyType = (a, b, c) => {
  if (c !== undefined) return a * b * c;
  return a * b;
};

type sumType = (a: number, b: number, c?: number) => number;
type multiplyType = (a: number, b: number, c?: number) => number;

let messageLog = (message: any): any => {
  return message;
};
console.log(messageLog(sum(2, 3, 2)));
console.log(messageLog(multiply(2, 3, 2)));
