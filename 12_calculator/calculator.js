const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length < 1) {
    return 0;
  }
	return array.reduce((a, b) => a += b);
};

const multiply = function(array) {
  return array.reduce((a, b) => a *= b);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {

	return multiply([...Array(a + 1).keys()].slice(1).concat([1]));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
