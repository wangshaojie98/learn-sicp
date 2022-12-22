// 1.22 树形递归
function fib(n) {
  return fibIter(1, 0, n)
}

function fibIter(a, b, count) {
  return count === 0 ? b : fibIter(a + b, a, count - 1)
}

// 换零钱方式统计
const coins = [1, 5, 10, 25, 50]
function countChange(amount, countOfKind = 5) {
  if (amount === 0) return 1;

  if (amount < 0 || countOfKind === 0) {
    return 0
  }

  return countChange(amount, countOfKind - 1) + countChange(amount - coins[countOfKind - 1], countOfKind)
}

console.log('countChange', countChange(100)); // 292

/**
 * 1.11
 * 函数 f 由如下的规则定义：如果n＜3，那么 f(n)＝n；如果n≥3，那么 f(n)＝f(n－1)＋2f(n－2)＋3f(n－3)。
 * 请写一个采用递归计算过程计算 f 的过程。再写一个采用迭代计算过程计算 f 的过程。
 */
function fn1_1(n) {
  if (n < 3) return n;

  return fn1_1(n - 1) + fn1_1(n - 2) * 2 + fn1_1(n - 3) * 3;
}

function fn1_1OfIter(n) {
  if (n < 3) return n;

  let x = 4;
  let y = 11;
  let z = 25;

  for (let i = 3; i < n; i++) {
    const s = x * 3 + y * 2 + z;
    x = y;
    y = z;
    z = s;
  }

  return x;
}

console.log('fn1_1: ', fn1_1(4));
console.log('fn1_1OfIter: ', fn1_1OfIter(4));

/**
 * 练习1.12 帕斯卡三角形，给出行和列求出在帕斯卡三角形的值
 * 三角形边界上的数都是1，内部的每个数是位于它上面的两个数之和35。请写一个过程，它采用递归计算过程计算出帕斯卡三角形
 */
// 假定row = 1， indx = 1是第一行第一列
function pascalTriangle(row, index) {
  if (index === 1 || row === index) return 1;
  
  if (index > row) throw new RangeError("下标不能大于行数")

  return pascalTriangle(row - 1, index - 1) + pascalTriangle(row - 1, index)
}

console.log('pascalTriangle', pascalTriangle(5, 3));