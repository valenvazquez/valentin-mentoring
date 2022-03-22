import { removeSpaces } from '../utils';

test('should return the same word if it does not have spaces', () => {
  const result = removeSpaces('hello');
  expect(result).toBe('hello');
});
test('should return helloworld', () => {
  const result = removeSpaces('   h  e l lo wor    ld   ');
  expect(result).toBe('helloworld');
});
