/**
 * Returns the sum of all numbers in array
 * @param {number[]} numbers - An array with number
 */
export function sumNumbersArray(numbers) {
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}

/**
 *
 * @param {number[][]} table - The table consists in an array containing the rows of the table. All rows must have the same length
 * @param {number} row - Number of the row you want to sum. Set it to 0 if you want to sum a specific column
 * @param {number} col - Number of the column you want to sum. Set it to 0 if you want to sum a specific row
 * @returns {number} - The sum of the numbers in the specified row or column
 */
export function sumRowOrColumn(table, row, col = 0) {
  const maxRow = table.length;
  const maxCol = table[0].length;

  // Check that user specifies a row or a column, not both or neither
  if ((!row && !col) || (row && col))
    throw new Error('You must specify only a row or a col to sum');
  // Check that table is correct -> all rows have the same length
  if (table.some((row) => row.length !== maxCol))
    throw new Error('Table rows must have the same length');
  // Check that specified row or column number is smaller than length of the table
  if (row > maxRow || col > maxCol)
    throw new Error(
      `row must be smaller than ${maxRow + 1} and col must be smaller than ${
        maxCol + 1
      }`
    );

  if (row) return sumNumbersArray(table[row - 1]);
  const column = table.map((rowArray) => rowArray[col - 1]);
  return sumNumbersArray(column);
}
