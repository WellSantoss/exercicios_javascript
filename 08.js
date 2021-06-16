function comparaPontos(pontos) {
  let arrayPontos = pontos.split(' ');
  arrayPontos = arrayPontos.map(num => +num);

  let recorde = arrayPontos[0];
  let qtdeRecorde = 0;

  for (let i = 0; i < arrayPontos.length; i++) {
    let atual = arrayPontos[i];

    if (atual > recorde) {
      recorde = atual;
      qtdeRecorde++;
    }
  }

  const menosPontos = arrayPontos.reduce((acc, atual) => {
    return atual < acc ? atual : acc;
  });

  let piorJogo = arrayPontos.indexOf(menosPontos) + 1;

  return [qtdeRecorde, piorJogo];
}
