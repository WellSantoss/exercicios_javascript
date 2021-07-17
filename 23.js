function media(codigo, nota1, nota2, nota3) {
  let pNota1, pNota2, pNota3;

  if (nota1 > nota2 && nota1 > nota3) {
    pNota1 = nota1 * 4;
    pNota2 = nota2 * 3;
    pNota3 = nota3 * 3;
  } else if (nota2 > nota3 && nota2 > nota1) {
    pNota2 = nota2 * 4;
    pNota1 = nota1 * 3;
    pNota3 = nota3 * 3;
  } else {
    pNota3 = nota3 * 4;
    pNota1 = nota1 * 3;
    pNota2 = nota2 * 3;
  }

  const mediaFinal = (pNota1 + pNota2 + pNota3) / 10;
  return `Código do Aluno: ${codigo}; Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3} | ${
    mediaFinal >= 5 ? "APROVADO" : "REPROVADO"
  }`;
}
media(275, 3, 7, 8);
