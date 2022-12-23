function expt(b, n) {
  return n === 0 ? 1 : expt(b, n - 1) * b;
}

function exptIter(b, n, product = 1) {
  return n === 0 ? product : exptIter(b, n - 1, product * b);
}

function fastExpt(b, n) {
  if (n === 0) return 1;
  if (n === 1) return b;

  if (n % 2 === 0) {
    return fastExpt(b, n / 2) * fastExpt(b, n / 2);
  } else {
    return fastExpt(b, n - 1) * b;
  }
}

console.log("fastExpt: ", fastExpt(2, 6));

function square(num) {
  return num ** 2;
}

function isEven(num) {
  return num % 2 === 0;
}

// 练习1.16 使用迭代方式改造fastExpt
function fastExptIter(b, n) {
  if (n === 0) return 1;

  if (isEven(n)) {
    let product = 1;
    for (let i = 1; i < n; i *= 2) {
      product = product * square(b);
    }

    return product;
  } else {
    return fastExptIter(b, n - 1) * b;
  }
}
console.log("fastExptIter: ", fastExptIter(2, 7));

// 1.1.7 利用加法求幂
function double(x) {
  return x + x;
}

function halve(x) {
  return x / 2;
}

function fast_times(a, b) {
  return b === 1
    ? a
    : a === 0 || b === 0
    ? 0
    : isEven(b)
    ? double(fast_times(a, halve(b)))
    : a + fast_times(a, b - 1);
}

console.log("fast_times: ", fast_times(5, 3));
