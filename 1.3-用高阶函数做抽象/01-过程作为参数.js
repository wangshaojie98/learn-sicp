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
console.log('sumCube', sumCube(7, 8));

function piSum(a, b) {
  return a > b
    ? 0
    : (1 / (a * (a + 2)))+ piSum(a + 4, b);
}

function sum(term, a,  next, b) {
  return a > b
    ? 0
    : term(a) + sum(term, next(a), next, b)
}



function inc(num) {
  return num + 1;
}

function sumCube1(a, b) {
  return sum(cube, a, inc, b)
}
console.log('sumCube1', sumCube1(1, 10));

function identity(x) {
  return x;
}

function sumIntegers1(a, b) {
  return sum(identity, a, inc, b)
}
console.log('sumIntegers1', sumIntegers1(1, 10));

function piSum1(a, b) {
  function piTerm(x) {
    return 1 / (x * (x + 2))
  }

  function piNext(x) {
    return x + 4;
  }

  return sum(piTerm, a, piNext, b)
}

console.log('piSum1', piSum1(1, 1000) * 8);

// 练习1.30
function sumIter(term, a, next, b) {
  function iter(result, a) {
    return a > b
      ? result
      : iter(result + term(a), next(a))
  }

  return iter(0, a)
}