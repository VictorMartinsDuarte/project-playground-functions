// Desafio 10
function techList(tech, name) {
  let techToLearn = tech.sort();
  let resultado = [];
  if (techToLearn.length === 0) {
    return 'Vazio!';
  }
  for (let index of techToLearn) {
    let objeto = {
      tech: index,
      name,
    };
    resultado.push(objeto);
  }
  return resultado;
}

// Desafio 11
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

// Desafio 12
function triangleCheck(a, b, c) {
  if (eMenor(a, b, c) === true && difAbsMaior(a, b, c) === true) {
    return true;
  }
  return false;
}
function eMenor(a, b, c) {
  if (a > (b + c) || b > (a + c) || c > (a + b)) {
    return false;
  }
  return true;
}
function difAbsMaior(a, b, c) {
  if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let qntAgua = stringToNumber(string);
  if (qntAgua === 1) {
    return qntAgua + ' copo de água'
  }
  return qntAgua + ' copos de água'
}
function stringToNumber(string) {
  let compareNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let qntAgua = 0;  
  for (let caracters of string) {
    for (let index = 0; index < compareNumber.length; index += 1) {
      if (caracters == compareNumber[index]) {
        qntAgua += compareNumber[index];
      }
    }
  }
  return qntAgua;
}
// function hydrate(string) {
//   let qntAgua = 0;
//   for (let indexString = 0; indexString < string.length; indexString += 1) {
//     if ((string[indexString] > 0) && (string[indexString] <= 9)) {
//       qntAgua += parseInt(string[indexString]);
//     }
//   }
//   if (qntAgua === 1) {
//     return qntAgua + ' copo de água'
//   }
//   return qntAgua + ' copos de água'
// }

// function hydrate(string) {
//   let qntAgua = 0;
//   let result = num(string);
//   for (let index of result) {
//     qntAgua += parseInt(index);
//   }
//   if (qntAgua === 1) {
//     return qntAgua + ' copo de água';
//   }
//   return qntAgua + ' copos de água';
// }
// function num(a) {
//   let numbers = a.replace(/[^0-9]/g, '');
//   return numbers;
// } ***Forma alternativa utilizando uma maneira de separar os números da string, que continuam como string concatenados, e depois desmembrando e transformando em número individualmente. Referência: https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
