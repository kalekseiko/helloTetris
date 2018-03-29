'use strict';


// перевод из градусов в радианы
Number.prototype.degree = function () {
  return this * Math.PI / 180;
};

// функция заполняет 2D массив значением val
function matrixGen (rows, columns, val) {
  var arr = new Array();
  for (var i = 0; i < columns; i++) {
    arr[i] = new Array();
    for (var j = 0; j < rows; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
}

// тупо копирует 2-х мерный массив
function array2xCopy ( rows, columns, n, copyArray) {
  var returnArray = matrixGen (n, n, 0);
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      if ((copyArray[i][j] == 0) || (copyArray[i][j] == 1))
        returnArray[i][j] = copyArray[i][j];
      else
        returnArray[i][j] = 0;
    }
  }
  return returnArray;
}

// генератор случайных чисел
function gRand ( min, max ) {
  var rand = min - 0.5 + Math.random() * ( max - min + 1);
  rand = Math.round (rand);
  return rand;
}

// функция реализует перечисления т.к. как сделать встроенный тип я не нашёл
function _enum_ (_name, Elems) {
  var elem, value;
  window[_name] = {};

  for (var i = Elems.length; i--;) {
    elem = Elems[i];
    value = elem.replace(/\s/g,'').split('=');

    window[_name][value[0]] = {
      value: value[0],
      int:value[1] | i,
      toString: function () {
        return this.value;
      }
    };
  }
}






