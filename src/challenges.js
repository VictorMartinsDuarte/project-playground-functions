// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(a) {
  let array1 = [];
  let words = '';
  for (let index of a) {
    if (index != ' ') {
      words += index;
    } else {
      array1.push(words);
      words = '';
    }
  }
  array1.push(words);
  return array1;
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let highestNumberCount = 0;
  for (let iMaior = 0; iMaior < numbers.length; iMaior += 1) {
    if (numbers[iMaior] > highestNumber) {
      highestNumber = numbers[iMaior];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  if (distancia1 < 0) {
    distancia1 *= -1;
  }
  if (distancia2 < 0) {
    distancia2 *= -1;
  }
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  } if (distancia1 > distancia2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(numbers) {
  let myArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3) === 0 && (numbers[index] % 5) === 0) {
      myArray.push('fizzBuzz');
    } else if ((numbers[index] % 3) === 0) {
      myArray.push('fizz');
    } else if ((numbers[index] % 5) === 0) {
      myArray.push('buzz');
    } else {
      myArray.push('bug!');
    }
  }
  return myArray;
}

// Desafio 9
function encode(e) {
  let coded = '';
  for (let index of e) {
    switch (index.toLowerCase()) {
    case 'a': coded += '1';
      break;
    case 'e': coded += '2';
      break;
    case 'i': coded += '3';
      break;
    case 'o': coded += '4';
      break;
    case 'u': coded += '5';
      break;
    default: coded += index;
    }
  }
  return coded;
}
// ***Solução alternativa bolada com o Leonardo E.***
// function encode(e) {
//   let e = 'Estamos na sala de estudos';
//   let variavel = [];
//   let fraseCodificada = '';
//   for (let index = 0; index < e.length; index++) {
//       variavel.push(e[index]);
//   }
//   for (let index = 0; index < variavel.length; index++) {
//       if (variavel[index] === 'a') {
//           fraseCodificada += '1';
//       } else {
//           fraseCodificada += variavel[index];
//       }
//   }
// return fraseCodificada;
// }
function decode(d) {
  let decoded = '';
  for (let index of d) {
    switch (index) {
    case '1': decoded += 'a';
      break;
    case '2': decoded += 'e';
      break;
    case '3': decoded += 'i';
      break;
    case '4': decoded += 'o';
      break;
    case '5': decoded += 'u';
      break;
    default: decoded += index;
    }
  }
  return decoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
