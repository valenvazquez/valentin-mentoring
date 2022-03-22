import { removeNegativeNumbers } from '../utils';

test('should return an empty array when empty array is provided', () => {
  const result = removeNegativeNumbers([]);
  expect(result).toEqual([]);
});
test('should return an empty array when all numbers are negative', () => {
  const result = removeNegativeNumbers([-1, -2, -0.5, -100, -32]);
  expect(result).toEqual([]);
});
test('should return the same array when all numbers are positive', () => {
  const result = removeNegativeNumbers([1, 2, 3, 4, 100, 76]);
  expect(result).toEqual([1, 2, 3, 4, 100, 76]);
});
test('should return the corresponding array when its called with [-1, 2, 0, -3, 10]', () => {
  const result = removeNegativeNumbers([-1, 2, 0, -3, 10]);
  expect(result).toEqual([2, 0, 10]);
});
test('should not modify original array', () => {
  const original = [-1, -2, -3, 0];
  removeNegativeNumbers(original);
  expect(original).toEqual([-1, -2, -3, 0]);
});
