function sumIntegers(a, b) {
  return a > b
    ? 0
    : a + sumIntegers(a + 1, b)
}

console.log('sumIntegers', sumIntegers(7, 10));
/**
 * sumIntegers(7, 10)
 * 7 + sumIntegers(8, 10)
 * 7 + 8 + sumIntegers(9, 10)
 */

function cube(a) {
  return a ** 3;
}

function sumCube(a, b) {
  return a > b
    ? 0
    : cube(a) + sumCube(a + 1, b);
}
console.log('sumIntegers', sumCube(7, 8));

function piSum(a, b) {
  return a > b
    ? 0
    : (1 / (a * (a + 2)))+ piSum(a + 4, b);
}
