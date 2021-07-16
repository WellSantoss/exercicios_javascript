function quantasNotas(valor) {
  valor = valor.replace("R$ ", "");
  notas = { n100: 0, n50: 0, n10: 0, n5: 0, n1: 0 };

  while (valor > 0) {
    if (valor >= 100) {
      notas.n100 = divide(valor, 100).total;
      valor = divide(valor, 100).resto;
    } else if (valor >= 50) {
      notas.n50 = divide(valor, 50).total;
      valor = divide(valor, 50).resto;
    } else if (valor >= 10) {
      notas.n10 = divide(valor, 10).total;
      valor = divide(valor, 10).resto;
    } else if (valor >= 5) {
      notas.n5 = divide(valor, 5).total;
      valor = divide(valor, 5).resto;
    } else if (valor >= 1) {
      notas.n1 = divide(valor, 1).total;
      valor = divide(valor, 1).resto;
    }
  }

  let resultado = "";
  for (var nota in notas) {
    if (notas[nota] > 0) {
      resultado += `${notas[nota]} nota(s) de R$ ${nota.replace("n", "")}. `;
    }
  }
  return resultado;
}

function divide(dividendo, divisor) {
  let i = 0;
  while (dividendo - divisor >= 0) {
    dividendo -= divisor;
    resto = dividendo;
    i++;
  }

  return {
    total: i,
    resto: resto,
  };
}
quantasNotas("R$ 18");
