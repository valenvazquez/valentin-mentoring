export function printMultiplicationTables() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const tables = {};
  numbers.forEach((num1, index) => {
    if (!tables[num1]) tables[num1] = {};
    numbers.slice(index).forEach((num2) => {
      const result = num1 * num2;
      if (!tables[num2]) tables[num2] = {};
      tables[num1][num2] = result;
      tables[num2][num1] = result;
    });

    console.table(tables);
  });
}
