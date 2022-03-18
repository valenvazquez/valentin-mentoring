/**
 *
 * @param {number[]} numbers Array of numbers. Can be positive, negative or decimals.
 * @returns A new array with same elements of `numbers` but sorted from lowest to highest
 */
export function sortArrayAsc(numbers) {
  const numbersCopy = [...numbers];
  return numbersCopy.sort((a, b) => a - b);
}
