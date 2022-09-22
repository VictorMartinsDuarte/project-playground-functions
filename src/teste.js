function generatePhoneNumber(numbers) {
  let contadorRepetidos = 0;
  let parte1 = '';
  let parte2 = '';
  let parte3 = '';
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    contadorRepetidos = 0;
    for (let posicao = 0; posicao < numbers.length; posicao += 1) {
      if (numbers[posicao] < 0 || numbers[posicao] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (numbers[index] === numbers[posicao]) {
        contadorRepetidos += 1;
      }
    }
    if (contadorRepetidos > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index < 2) {
      parte1 += numbers[index];
    } else if (index > 1 && index < 7) {
      parte2 += numbers[index];
    } else {
      parte3 += numbers[index];
    }
  }
  return '(' + parte1 + ') ' + parte2 + '-' + parte3;
}