function taxaCrescimento(arr) {
  let numPares = 0;
  for (var i = 0; i < arr.length; i++) {
    numPares += arr[i] % 2 == 0 ? 1 : 0;
  }
  return `Pares: ${numPares}; Ímpares: ${arr.length - numPares}`;
}
taxaCrescimento([1, 2, 3, 4, 5, 6]);
