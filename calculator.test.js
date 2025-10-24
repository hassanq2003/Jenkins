// calculator.test.js

const { add, subtract, multiply, divide, modulus } = require('./calculator');

test('adds two numbers', () => {
  expect(add(5, 3)).toBe(8);
});

test('subtracts two numbers', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiplies two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides two numbers', () => {
  expect(divide(8, 2)).toBe(4);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});

// Bonus test
test('returns modulus of two numbers', () => {
  expect(modulus(10, 3)).toBe(1);
});
