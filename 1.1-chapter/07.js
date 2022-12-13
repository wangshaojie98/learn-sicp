function sqrtInner(guess, search) {
  return isGoodEnough(guess, search) ? guess : sqrtInner(improve(guess, search), search);
}

function isGoodEnough(guess, search) {
  const boolean = Math.abs((Math.pow(guess, 2)) - search) < 0.001
  return boolean
}

function improve(guess, search) {
  const quotient = search / guess;
  return (quotient + guess) / 2;
}

function conditional(predicate, thenClause, elseClause) {
  return predicate ? thenClause : elseClause;
}

// function sqrtInner(guess, search) {
//   return conditional(isGoodEnough(guess, search), guess, sqrtInner(improve(guess, search), search))
// }
// conditional 需要参数计算完成，才能求值，而sqrtInner需要一个终止条件才能停止递归，所以两者冲突会导致无限循环。
function sqrt(x) {
  return sqrtInner(1, x)
}

console.log(sqrt(0.001));
console.log(sqrt(2));
// console.log(sqrt(9));
// console.log(sqrt(100 + 37));
// console.log(sqrt(sqrt(2) + sqrt(3)));
// console.log(Math.pow(sqrt(1000), 2));


// 练习1.7 对于确定很小的数的平方根而言，在计算平方根中使用的检测good-enough?是很不好的。
// 还有，在现实的计算机里，算术运算总是以一定的有限精度进行的。这也会使我们的检测不适合非常
// 大的数的计算。请解释上述论断，用例子说明对很小和很大的数，这种检测都可能失败。实现good-enough?
// 的另一种策略是监视猜测值在从一次迭代到下一次的变化情况，
// 当改变值相对于猜测值的比率很小时就结束。
// 请设计一个采用这种终止测试方式的平方根过程。对于很大和很小的数，这一方式都能工作吗？

function isGoodEnough(guess, search) {
  return (Math.abs(guess - improve(guess, search)) / improve(guess, search)) < 0.01
}

// 练习1.8 求立方根的牛顿法基于如下事实，如果y是x的立方根的一个近似值，那么下式将给出一个更好的近似值：
// ((x / (y^3)) + (2 * y)) / 3

// 分析：y就是猜测值，x是参数，上面的公式是improve函数的逻辑

function cubeRoot(search) {
  return cubeRootInner(1, search)
}

function cubeRootInner(guess, search) {
  return isGoodEnoughByCubeRoot(guess, search) ? guess : cubeRootInner(improveByCubeRoot(guess, search), search);
}

function isGoodEnoughByCubeRoot(guess, search) {
  return Math.abs(Math.pow(guess, 3) - search) < 0.01;
}

function improveByCubeRoot(guess, search) {
  return ((search / (guess * guess)) + (2 * guess)) / 3
}

console.log('cubeRoot', cubeRoot(27));