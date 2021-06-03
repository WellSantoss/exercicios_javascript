function triangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return "Triângulo Equilátero";
  }
  else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Triângulo Isósceles";
  }
  else if (lado1 !== lado2 && lado2 !== lado3) {
    return "Triângulo Escaleno";
  }
}