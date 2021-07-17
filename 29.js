function intervalo(arr) {
  let noIntervalo = 0;
  for (var i = 0; i < arr.length; i++) {
    noIntervalo += arr[i] >= 10 && arr[i] <= 20 ? 1 : 0;
  }
  return `No intevalo: ${noIntervalo}; Fora do intevalo: ${
    arr.length - noIntervalo
  }`;
}
intervalo([1, 2, 13, 14, 5, 6, 10]);
