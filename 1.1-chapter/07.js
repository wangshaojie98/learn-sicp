function sqrt(guess, search) {
  return isGoodEnough(guess, search) ? guess : sqrt(improve(guess, search), search);
}

function isGoodEnough(guess, search) {
  if (Math.abs((Math.pow(guess, 2)) - search) < 0.00000000001) {
    return true;
  }

  return false;
}

function improve(guess, search) {
  const quotient = search / guess;
  return (quotient + guess) / 2;
}

console.log(sqrt(1, 2));