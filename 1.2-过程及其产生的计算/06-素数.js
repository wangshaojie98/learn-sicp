function square(a) {
  return a ** 2;
}

function smallest_divisor(n) {
  return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
  return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
  return b % a === 0;
}
console.log('smallest_divisor(15): ', smallest_divisor(20));