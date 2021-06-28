// Escreva um programa que pergunte três nomes diferentes e os imprima em ordem alfabética.

// function setAlphabeticalOrder(...strings) {
//     return strings.sort();
// };

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const getMin = (a, b) => (a < b ? a : b);
const getMax = (a, b) => (a > b ? a : b);

function equalStrings(str1, str2, str3) {
  return switchOnStr(str1, str2, str3) || switchOnStr(str2, str1, str3);
};

function switchOnStr(str1, str2, str3) {
  let aux;
  switch(str1) {
    case str2:
      aux = str2;
      break;
    case str3:
      aux = str3;
      break;
  };
  return [str1, aux];
}

function getStringFromCharCode(char, string1, string2, string3) {
  let aux;
  switch (char) {
    case +string1.charCodeAt(0):
      aux = string1;
      break;
    case +string2.charCodeAt(0):
      aux = string2;
      break;
    case +string3.charCodeAt(0):
      aux = string3;
      break;
  }
  return aux;
}

function getMiddleIndex(unicode1, unicode2, unicode3, first, last, name1, name2, name3) {
  const middleString =
    (unicode1 !== first && unicode1 !== last)
      ? getStringFromCharCode(unicode1, name1, name2, name3)
      : false ||
      (unicode2 !== first && unicode2 !== last)
        ? getStringFromCharCode(unicode2, name1, name2, name3)
        : false ||
      (unicode3 !== first && unicode3 !== last)
      ? getStringFromCharCode(unicode3, name1, name2, name3)
      : false;

  return middleString;
}

function makeDifferentUnicode(str1, str2, str3, index) {
  if (str1.charCodeAt(index) === str2.charCodeAt(index) || str2.charCodeAt(index) === str3.charCodeAt(index) || str1.charCodeAt(index) === str3.charCodeAt(index))
    makeDifferentUnicode(str1, str2, index++);

  return str1.charCodeAt(index);
};

function setAlphabeticalOrder(name1, name2, name3) {
  const unicodePositionName1 = name1.charCodeAt(0);
  const unicodePositionName2 = name2.charCodeAt(0);
  const unicodePositionName3 = name3.charCodeAt(0);

  const first = getMin(
    getMin(unicodePositionName1, unicodePositionName2),
    unicodePositionName3
  );
  const last = getMax(
    getMax(unicodePositionName1, unicodePositionName2),
    unicodePositionName3
  );

  return [
    getStringFromCharCode(first, name1, name2, name3),
    getMiddleIndex(unicodePositionName1, unicodePositionName2, unicodePositionName3, first, last, name1, name2, name3),
    getStringFromCharCode(last, name1, name2, name3),
  ];
}

console.log(setAlphabeticalOrder("Daniel", "Fabio", "Emanuel"));
console.log(setAlphabeticalOrder("Zacarias", "Yago", "Xerxes"));
console.log(setAlphabeticalOrder("Maria", "Paulo", "Joao"));
