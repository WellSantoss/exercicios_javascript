function pedido(codigo, quantidade) {
  switch (codigo) {
    case 100:
      console.log(`Valor do pedido: R$ ${(quantidade * 3).toFixed(2)}`);
      break;
    case 200:
      console.log(`Valor do pedido: R$ ${(quantidade * 4).toFixed(2)}`);
      break;
    case 300:
      console.log(`Valor do pedido: R$ ${(quantidade * 5.5).toFixed(2)}`);
      break;
    case 400:
      console.log(`Valor do pedido: R$ ${(quantidade * 7.5).toFixed(2)}`);
      break;
    case 500:
      console.log(`Valor do pedido: R$ ${(quantidade * 3.5).toFixed(2)}`);
      break;
    case 600:
      console.log(`Valor do pedido: R$ ${(quantidade * 2.8).toFixed(2)}`);
      break;
    default:
      console.log('Código inválido');
      break;
  }
}