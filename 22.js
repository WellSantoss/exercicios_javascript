function valorAnuidade(mes, anuidade) {
  if (mes > 0 && mes <= 12) {
    for (let i = 2; i <= mes; i++) {
      anuidade = anuidade + (anuidade / 100) * 5;
    }
    return anuidade;
  } else {
    return "Mês inválido!";
  }
}
valorAnuidade(2, 100);
