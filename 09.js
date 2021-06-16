function calculaNota(nota) {
  const notaArredondada = arredondaNota(nota);

  if (notaArredondada > 100 || notaArredondada < 0) {
    return "Nota inválida";
  }
  else if (notaArredondada < 40) {
    return "Reprovado com nota " + notaArredondada;
  }
  else {
    return "Aprovado com nota " + notaArredondada;
  }

  function arredondaNota(nota) {
    if (nota >= 38) {
      if (nota % 5 !== 0) {
        for (let i = 1; i <= 2; i++) {
          if ((nota + i) % 5 === 0) {
            nota += i;
            break; 
          }
        }

        return nota;
      }
      else {
        return nota;
      }
    }
    else {
      return nota;
    }
  }
}