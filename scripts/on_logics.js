'use strict';

function onLogic () {
  /*gameField[5][10] = 1;
  gameField[1][19] = 2;
  gameField[2][19] = 3;
  gameField[3][19] = 4;
  gameField[4][19] = 5;
  gameField[5][19] = 6;
  gameField[6][19] = 7;
  gameField[7][19] = 8;
  gameField[8][19] = 9;*/
  
  
  //console.log(curGameStatus.value);

  if (isKeyDown('D') || isKeyDown('rightArrow')) {
    if ((curFigura.collideRight() == false) && (curGameStatus.value == gameStatuses.figuraMove.value)) {
      curFigura.moveRight();
    }
    clearKey();
  }
  if (isKeyDown('A') || isKeyDown('leftArrow') && (curGameStatus.value == gameStatuses.figuraMove.value)) {
    if (curFigura.collideLeft() == false) {
      curFigura.moveLeft();
    }
    clearKey();
  }
  if (isKeyDown('S') || isKeyDown('downArrow') || isKeyDown('space')) {
    currentGameSpeed = 1;
    clearKey();
  }
  if (isKeyDown('W') || isKeyDown('upArrow')) {
    curFigura.rotation();
    clearKey();
  }


  if (!(loopCall % currentGameSpeed)) // регулируем скорость игры
  {
    // первая отрисовка фигуры
    if (curGameStatus.value == gameStatuses.figuraStart.value){ 
      curFigura.render();
      curGameStatus = gameStatuses.figuraMove;
      currentGameSpeed = gameSpeed;
    // перемещение фигуры вниз  
    } else if(curGameStatus.value == gameStatuses.figuraMove.value) {
      if (curFigura.collideDown()) {
        currentGameSpeed = gameSpeed;
        curGameStatus = gameStatuses.figuraEnd;
      } else {
        curFigura.moveDown();
      }
    // дальнейшее перемещение фигуры вниз невозможно сбрасываем фигуру выбираем новую фигуру, проверяем на конец игры  
    } else if(curGameStatus.value == gameStatuses.figuraEnd.value) {
      if (completedStringСheck()) {
        curGameStatus = gameStatuses.stringDel;
        gameScore += bonusModifer;
        bonusModifer = 0;
      } else {
        curFigura.reset();
        curFigura = nextFigura;
        //curFigura = figureI_purple;
        nextFigura = randFigureGen();
        curGameStatus = gameStatuses.figuraMove;
        // если установка новой фигуры невозможна тогда
        if (curFigura.collideDown()){ 
          // увы мы проиграли
          curGameStatus = gameStatuses.gameLoss;
        } else {
          // устанавливаем новую фигуру
          curGameStatus = gameStatuses.figuraStart;
        }
      }
    // если на игровом поле есть строки которые можно удалить  
    } else if(curGameStatus.value == gameStatuses.stringDel.value) {
      var isCompletString = true;
      for (var i = glassSizeY-1; i >= 0; i--) {
        if (completedStrings[i]) {
          removeString(i);
          
          isCompletString = false;
          break;
        }
      }

      if (isCompletString) {
        if (gameScore >= thresholdLevelUpSpeed) {
          if (gameSpeed >= 1) gameSpeed--;
          // вычисляем следующий порог увеличения скорости
          thresholdLevelUpSpeed *= 2; 
        }
        curGameStatus = gameStatuses.figuraEnd;
      }
    }
  }  
}


// проверяет есть ли заполненные строки которые можно удалить
var completedStringСheck = function () {  
  var completedReturn = false; // если будет хотябы одна законченная строка выведет true
  var stringCount = 0;
  for ( var i = glassSizeY-1; i >= 0 ; i--) {
    var completed = true;
    for ( var j = 0; j < glassSizeX; j++) {
      if (gameField[j][i] == 0) {
        completed = false;
        break;
      }
    }
    if (completed) {
      completedReturn = true;
      completedStrings[i] = true;
      stringCount++;
    }
  }
  // расчет модификатра бонусов
  if (stringCount == 1) bonusModifer = 10;
  if (stringCount == 2) bonusModifer = 30;
  if (stringCount == 3) bonusModifer = 70;
  if (stringCount >= 4) bonusModifer = 150;
  return completedReturn;
}


// удаляет указанную строку
var removeString = function (stringNumber) {
  completedStrings[stringNumber] = false;
  for ( var i = stringNumber; i > 0 ; i--) {
    for ( var j = 0; j < glassSizeX; j++) {
      gameField[j][i] = 0;
      gameField[j][i] = gameField[j][i-1];
    }
    if (completedStrings[i]) {
      completedStrings[i] = false;
      completedStrings[i+1] = true;
    }
  }
}




