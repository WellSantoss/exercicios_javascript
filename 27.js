function taxaCrescimento(altC1, taxaC1, altC2, taxaC2) {
  if (
    (altC1 > altC2 && taxaC1 >= taxaC2) ||
    (altC2 > altC1 && taxaC2 >= taxaC1)
  ) {
    return "A criança menor não passará a criança maior!";
  } else if (altC1 == altC2) {
    return "As alturas são iguais!";
  } else {
    let criançaMenor = altC1 > altC2 ? altC2 : altC1;
    let criançaMaior = altC1 > altC2 ? altC1 : altC2;
    const taxaCriançaMenor = altC1 > altC2 ? taxaC2 : taxaC1;
    const taxaCriançaMaior = altC1 > altC2 ? taxaC1 : taxaC2;

    let anos = 0;
    while (criançaMenor <= criançaMaior) {
      criançaMenor += taxaCriançaMenor;
      criançaMaior += taxaCriançaMaior;
      anos++;
    }

    return `A criança menor passará a criança maior em ${anos} ano(s)!`;
  }
}
taxaCrescimento(110, 10, 120, 5);
