function calcBhaskara(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  if (delta < 0) {
    return "Delta é negativo";
  }
  else {
    return [x1, x2];
  }
}