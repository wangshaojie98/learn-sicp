function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

/**
 * 1.2.1 线性的递归和迭代
 * 对于任何一个n，在计算过程中的每一步，在我们需要保存轨迹里，所有的东西就是变量product、counter和max-count的当前值。
 * 我们称这种过程为一个迭代计算过程。一般来说，迭代计算过程就是那种其状态可以用固定数目的状态变量描述的计算过程；而与此同时，
 * 又存在着一套固定的规则，描述了计算过程在从一个状态到下一状态转换时，这些变量的更新方式；还有一个（可能有的）结束检测，
 * 它描述这一计算过程应该终止的条件。在计算n!时，所需的计算步骤随着n线性增长，这种过程称为线性迭代过程。
 */
// 线性迭代计算过程
function factorialInner(product, counter, maxCount) {
  return maxCount >= counter 
    ? factorialInner(product * counter, counter + 1, maxCount) : product;
}

function factorial(n) {
  return factorialInner(1, 1, n)
}

console.log('1.2.1-', factorial(3));
console.log('1.2.1-', factorial(5));


// 练习1.9 下面几个过程各定义了一种加起两个正整数的方法，它们都基于过程inc（它将参数增加1）和dec（它将参数减少1）。
function plus(a, b) {
  return a === 0 ? b : inc(plus(dec(a), b)); 
}
function plus(a, b) {
  return a === 0 ? b : plus(dec(a), inc(b));
}
// 请用代换模型展示这两个过程在求值（＋4 5）时所产生的计算过程。这些计算过程是递归的或者迭代的吗？
// 第一种
/**
 * plus(4, 5)
 * 4 === 0 ? 5 : inc(plus(dec(4), 5))
 * inc(plus(dec(4), 5))
 * inc(plus(3, 5))
 * inc(plus(3, 5))
 * inc(inc(plus(2, 5)))
 * inc(inc(inc(plus(1, 5))))
 * inc(inc(inc(inc(plus(0, 5))))
 * inc(inc(inc(inc(0 === 0 ? 5 : inc(plus(-1, 5)))))
 * inc(inc(inc(inc(5))))
 * inc(inc(inc(6)))
 * inc(inc(7))
 * inc(8)
 * 9
 */
// 第二种
/**
 * plus(4, 5)
 * 4 === 0 ? 5 : plus(dec(4), inc(5))
 * plus(dec(4), inc(5))
 * plus(3, 6)
 * 3 === 0 ? 6 : plus(dec(3), inc(6))
 * plus(2, 7)
 * 2 === 0 ? 7 : plus(dec(2), inc(7))
 * plus(1, 8)
 * 1 === 0 ? 8 : plus(dec(1), inc(8))
 * plus(0, 9)
 * 0 === 0 ? 9: plus(dec(0), inc(9))
 * 9
 */


/**
 * 练习1.10
 */
function A(x, y) {
  if (y === 0) {
    return 0;
  }

  if (x === 0) {
    return 2 * y;
  }

  if (y === 1) {
    return 2;
  }

  return A(x - 1, A(x, y - 1))
}
A(1, 10)
console.log('A(1, 10): ', A(1, 10));
/**
 * A(1, 10)
 * A(0, A(1, 9))
 * A(0, A(0, A(1, 8)))
 * A(0, A(0, A(0, A(1, 7))))
 * A(0, A(0, A(0, A(1, A(1, 6)))))
 * A(0, A(0, A(0, A(0, A(0, A(1, 6))))))
 * A(0, A(0, A(0, 8)))
 */
A(2, 4)
A(3, 3)


