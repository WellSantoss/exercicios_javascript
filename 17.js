function aumentoSalario(plano, salario) {
  switch (plano) {
    case 'A':
      console.log(salario + (salario * 0.1));
      break;
    case 'B':
      console.log(salario + (salario * 0.15));
      break;
    case 'C':
      console.log(salario + (salario * 0.2));
      break;
    default:
      console.log('Plano inválido');
      break;
  }
}