import { isDivisibleByTen } from '../utils/index.js';

test('should return true if number is 0', () => {
  const result = isDivisibleByTen(0);
  expect(result).toBe(true);
});
test('should return true if number is 10', () => {
  const result = isDivisibleByTen(10);
  expect(result).toBe(true);
});
test('should return true if number is -100', () => {
  const result = isDivisibleByTen(-100);
  expect(result).toBe(true);
});
test('should return false if number is 15', () => {
  const result = isDivisibleByTen(15);
  expect(result).toBe(false);
});
