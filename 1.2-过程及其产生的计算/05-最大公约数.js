// 欧几里得算法求最大公约数
function greatestCommonDivisor(a, b) {
  return b === 0 ? a : greatestCommonDivisor(b, a % b)
}
console.log('greatestCommonDivisor: ', greatestCommonDivisor(206, 40));
/**
 * 正则序
 * gcd(206, 40)
 * 40 === 0 ? 206 : gcd(40, 206 % 40)
 * gcd(40, 206 % 40)
 * 206 % 40 === 0 ? 40 : gcd(206 % 40, 40)
 * 6 === 0 ? 40 : gcd(206 % 40, 40)
 * gcd(206 % 40, 40)
 * ....
 */
/**
 * 应用序
 * gcd(206, 40)
 * 40 === 0 ? 206 : gcd(40, 206 % 40)
 * gcd(40, 6)
 * 6 === 0 ? 40 : gcd(6, 40 % 6)
 * gcd(6, 4)
 * 4 === 0 ? 6 : gcd(4, 6 % 4)
 * gcd(4, 2)
 * 2 === 0 ? 4 : gcd(2, 4 % 2)
 * gcd(2, 0)
 * 0 === 0 ? 2 : gcd(0, 2 % 0)
 * 2
 */