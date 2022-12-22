function expt(b, n) {
  return n === 0 ? 1 : expt(b, n - 1) * b;
}

function exptIter(b, n, product = 1) {
  return n === 0 ? product : exptIter(b, n - 1, product * b)
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

console.log('fastExpt: ', fastExpt(2, 6));