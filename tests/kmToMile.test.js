import { kmToMile } from '../utils';

test('should return miles for 0km -> 0 miles', () => {
  const miles = 0 * 0.621371;
  expect(kmToMile(0)).toBe(miles);
});
test('should return miles for 150km -> 93.20565 miles', () => {
  const miles = 150 * 0.621371;
  expect(kmToMile(150)).toBe(miles);
});
