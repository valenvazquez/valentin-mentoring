export function numberOfVowels(str) {
  const nonVowelRegex = /[^aeiou]/gi;
  return str.replace(nonVowelRegex, '').length;
}

export function numberOfVowelsPro(str) {
  const nonVowelRegex = /[^aeiou]/gi;
  const vowels = str.replace(nonVowelRegex, '').toLowerCase();
  const result = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (const vowel of vowels) {
    result[vowel]++;
  }
  return result;
}
