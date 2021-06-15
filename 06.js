function jurosSimples(capital, taxa, tempo) {
  let montante = capital;
  const juros = (capital / 100) * taxa;

  for (let i = 1; i <= tempo; i++) {
    montante += juros;
  }

  return montante.toFixed(2);
}

function jurosComposto(capital, taxa, tempo) {
  let montante = capital;

  for (let i = 1; i <= tempo; i++) {
    montante += (montante / 100) * taxa;
  }

  return montante.toFixed(2);
}