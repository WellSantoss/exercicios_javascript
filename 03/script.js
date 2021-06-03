function potencia(base, exp) {
  let result = base;
  
  for (let i = 1; i < exp; i++) {
    result *= base;
  }
  
  return result;
  // return Math.pow(base, exp);
}