function arredonda(num) {
  return "R$ " + num.toFixed(2).replace('.', ',');
}