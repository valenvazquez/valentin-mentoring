import { numberOfVowels, numberOfVowelsPro } from '../utils';

describe('numberOfVowels', () => {
  test('should return 0 for empty string', () => {
    const str = '';
    expect(numberOfVowels(str)).toBe(0);
  });
  test('should return 5 for AAAAA', () => {
    const str = 'AAAAA';
    expect(numberOfVowels(str)).toBe(5);
  });
  test("should return 10 for 'Aakk mEe Iji OhouyU'", () => {
    const str = 'Aakk mEe Iji OhouyU';
    expect(numberOfVowels(str)).toBe(10);
  });
});

describe('numberOfVowelsPro', () => {
  test('value of each vocal key should be 0 for an empty string ', () => {
    const str = '';
    expect(numberOfVowelsPro(str)).toEqual({ a: 0, e: 0, i: 0, o: 0, u: 0 });
  });
  test("should return correct object for 'Aakk mEe Iji OhouyU'", () => {
    const str = 'Aakk mEe Ij OhouyUa';
    expect(numberOfVowelsPro(str)).toEqual({ a: 3, e: 2, i: 1, o: 2, u: 2 });
  });
});
