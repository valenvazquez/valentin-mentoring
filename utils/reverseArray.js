export function reverseArray(items) {
  // Array.reverse is destructive thats why we need to make a copy
  const itemsCopy = [...items];
  return itemsCopy.reverse();
}
