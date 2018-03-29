'use strict';

function onRender_Dynamic () {
  if(curGameStatus.value != gameStatuses.gameLoss.value) {
    context.clearRect(0, 0, gameWidth, gameHeight);
  
    glassRender (glassRenderX, glassRenderY);
    GamefieldRender(glassRenderX, glassRenderY);
    shoreLabelRender(16, 380);
    shoreRender(16, 410, gameScore);
    nextLabelRender(224, 16);
    figuraLabelRender(224, 64);
    nextFiguraRender(224, 112, nextFigura);
    leftButtonRender(232, 208);
    leftButtonRender(232, 272);
    leftButtonRender(232, 272);
    rightButtonRender(232, 336);
    leftButtonRender(232, 400);
  } else { 
    console.log("Проигрыш"); 
  }
}

/*********** ПЕРЕМЕННЫЕ ДЛЯ ОТРИСОВКИ ***********/

// координаты начала (левые, верхние) отрисовки стакана
var glassRenderX = 16;
var glassRenderY = 16;


/*********** ФУНКЦИИ ***********/

// наверное самая часто используемая функция в onRender()
function drawImage(img, x, y)
{
  //if (!img.loaded) return
  // анимация 
  //if (img.num >= img.count) img.num = 1;
  //  else img.num += 1;
  context.drawImage(img.dom, img.colX*img.width, img.colY*img.width, img.width, img.height, x, y, img.width, img.height);
}


// функция рендера стакана
function glassRender (glassRenderX, glassRenderY)
{
  glassRenderY += spriteSize;
  //левая и правая сторона
  for ( var i = 0; i < glassSizeY; i++) {
    drawImage(glass, glassRenderX,  i * spriteSize + glassRenderY); // левая 
    drawImage(glass, glassRenderX + ( spriteSize * (glassSizeX + 1)),  i * spriteSize + glassRenderY); // правая
  }
  //дно
  context.save();
  context.translate(glassRenderX + glassSizeX*spriteSize, glassRenderY + glassSizeY*spriteSize);
  context.rotate((90).degree());
  for ( var i = 0; i < glassSizeX; i++) {
    drawImage(glass, 0, (i * spriteSize)-(spriteSize));
  }
  context.restore();
  //уголки
  drawImage(glassCorner, glassRenderX, glassRenderY + glassSizeY * spriteSize );
  context.save();
  context.translate(glassRenderX + (glassSizeX+1) * spriteSize, glassRenderY + (glassSizeY+1) * spriteSize);
  context.rotate((270).degree());
  drawImage(glassCorner, 0, 0 );
  context.restore();
  // наконечники сверху стакана
  glassRenderY -= spriteSize;
  drawImage(glassTip, glassRenderX, glassRenderY);
  drawImage(glassTip, glassRenderX + (glassSizeX+1) * spriteSize, glassRenderY);
}

// рендеринг игрового поля внутри стакана
function GamefieldRender(glassRenderX, glassRenderY)
{
  for ( var i = 0; i < glassSizeX; i++) {
    for ( var j = 0; j < glassSizeY; j++) {
      switch (gameField[i][j])
      {
        case 0:
          drawImage(grayCube, ((glassRenderX + spriteSize) + (i * spriteSize)) , ((j * spriteSize)+glassRenderY + spriteSize));
        break;
        case 1:
          drawImage(greenCube, ((glassRenderX + spriteSize) + (i * spriteSize)) , ((j * spriteSize)+glassRenderY + spriteSize));
        break;
        case 2:
          drawImage(purpleCube, ((glassRenderX + spriteSize) + (i * spriteSize)) , ((j * spriteSize)+glassRenderY + spriteSize));
        break;
        case 3:
          drawImage(blueCube, ((glassRenderX + spriteSize) + (i * spriteSize)) , ((j * spriteSize)+glassRenderY + spriteSize));
        break;
        case 4:
          drawImage(yellowCube, ((glassRenderX + spriteSize) + (i * spriteSize)) , ((j * spriteSize)+glassRenderY + spriteSize));
        break;
        case 5:
          drawImage(turquoiseCube, ((glassRenderX + spriteSize) + (i * spriteSize)) , ((j * spriteSize)+glassRenderY + spriteSize));
        break;
        case 6:
          drawImage(redCube, ((glassRenderX + spriteSize) + (i * spriteSize)) , ((j * spriteSize)+glassRenderY + spriteSize));
        break;
        default:
          drawImage(errorCube, ((glassRenderX + spriteSize) + (i * spriteSize)) , ((j * spriteSize)+glassRenderY + spriteSize));
          //console.log( "Ошибка: Не могу определить тип игрового поля для элемента " + (i+1) + ", " + (j+1) + "!!!");
        break;
      }
    }
  }
}

// рендер кнопок
function leftButtonRender(posX, posY)
{
drawImage(leftButton1, posX, posY);
drawImage(leftButton2, posX+spriteSize, posY);
drawImage(leftButton3, posX+spriteSize*2, posY);
drawImage(leftButton4, posX+spriteSize*3, posY);
drawImage(leftButton5, posX, posY+spriteSize);
drawImage(leftButton6, posX+spriteSize, posY+spriteSize);
drawImage(leftButton7, posX+spriteSize*2, posY+spriteSize);
drawImage(leftButton8, posX+spriteSize*3, posY+spriteSize);
drawImage(leftButton9, posX, posY+spriteSize*2);
drawImage(leftButton10, posX+spriteSize, posY+spriteSize*2);
drawImage(leftButton11, posX+spriteSize*2, posY+spriteSize*2);
drawImage(leftButton12, posX+spriteSize*3, posY+spriteSize*2);
drawImage(leftButton13, posX, posY+spriteSize*3);
drawImage(leftButton14, posX+spriteSize, posY+spriteSize*3);
drawImage(leftButton15, posX+spriteSize*2, posY+spriteSize*3);
drawImage(leftButton16, posX+spriteSize*3, posY+spriteSize*3);
}
function rightButtonRender(posX, posY)
{
drawImage(leftButton1, posX, posY);
drawImage(leftButton2, posX+spriteSize, posY);
drawImage(leftButton3, posX+spriteSize*2, posY);
drawImage(leftButton4, posX+spriteSize*3, posY);
drawImage(leftButton5, posX, posY+spriteSize);
drawImage(leftButton6, posX+spriteSize, posY+spriteSize);
drawImage(leftButton7, posX+spriteSize*2, posY+spriteSize);
drawImage(leftButton8, posX+spriteSize*3, posY+spriteSize);
drawImage(leftButton9, posX, posY+spriteSize*2);
drawImage(leftButton10, posX+spriteSize, posY+spriteSize*2);
drawImage(leftButton11, posX+spriteSize*2, posY+spriteSize*2);
drawImage(leftButton12, posX+spriteSize*3, posY+spriteSize*2);
drawImage(leftButton13, posX, posY+spriteSize*3);
drawImage(leftButton14, posX+spriteSize, posY+spriteSize*3);
drawImage(leftButton15, posX+spriteSize*2, posY+spriteSize*3);
drawImage(leftButton16, posX+spriteSize*3, posY+spriteSize*3);
}
// рендер надписей
function nextLabelRender(posX, posY)
{
  drawImage(letterC, posX, posY);
  drawImage(letterL, posX + spriteSize, posY);
  drawImage(letterE, posX + spriteSize*2, posY);
  drawImage(letterD, posX + spriteSize*3, posY);
  drawImage(letterРyphen, posX + spriteSize*4, posY);
  drawImage(letterY, posX, posY + spriteSize+spriteSize/3);
  drawImage(letterU, posX + spriteSize, posY + spriteSize+spriteSize/3);
  drawImage(letterSh, posX + spriteSize*2, posY + spriteSize+spriteSize/3);
  drawImage(letterA, posX + spriteSize*3, posY + spriteSize+spriteSize/3);
  drawImage(letterYa, posX + spriteSize*4, posY + spriteSize+spriteSize/3);
}

function figuraLabelRender(posX, posY) {
  drawImage(letterF, posX, posY);
  drawImage(letterI, posX + spriteSize, posY);
  drawImage(letterG, posX + spriteSize*2, posY);
  drawImage(letterY, posX + spriteSize*3, posY);
  drawImage(letterРyphen, posX + spriteSize*4, posY);
  drawImage(letterR, posX + spriteSize, posY + spriteSize+spriteSize/3);
  drawImage(letterA, posX + spriteSize*2, posY + spriteSize+spriteSize/3);
}

function nextFiguraRender(posX, posY, figuraClass) {
  // рендерим чисто поле
  for (var i = 0; i < 5; i++)
    for(var j = 0; j < 6; j++) {
      drawImage(grayCube, posX + i*spriteSize, posY + j*spriteSize);
    }
  var indent = 1; // отступ от левого верхнего края
  // рендерим фигуру
  for (var j = 0; j < figuraClass.width; j++)
    for(var i = 0; i < figuraClass.height; i++) {
      if (figuraClass.figureForm[i][j]) {
        switch (figuraClass.color)
        {
          case 1:   
            drawImage(greenCube, (indent+j)*spriteSize+posX, (indent+i)*spriteSize+posY);
          break;
          case 2:   
            drawImage(purpleCube, (indent+j)*spriteSize+posX, (indent+i)*spriteSize+posY);
          break;
          case 3:   
            drawImage(blueCube, (indent+j)*spriteSize+posX, (indent+i)*spriteSize+posY);
          break;
          case 4:   
            drawImage(yellowCube, (indent+j)*spriteSize+posX, (indent+i)*spriteSize+posY);
          break;
          case 5:   
            drawImage(turquoiseCube, (indent+j)*spriteSize+posX, (indent+i)*spriteSize+posY);
          break;
          case 6:   
            drawImage(redCube, (indent+j)*spriteSize+posX, (indent+i)*spriteSize+posY);
          break;
        }
      }
  }
}

function shoreLabelRender(posX, posY)
{
  drawImage(letterC, posX, posY);
  drawImage(letterH, posX + spriteSize, posY);
  drawImage(letterE, posX + spriteSize*2, posY);
  drawImage(letterT, posX + spriteSize*3, posY);
}

// отрисовка счета игры
function shoreRender(posX, posY, shore){
  // экземпляры класса 7-ми сегментного индикактора, для единиц, десятков сотен и т.д., и их координаты отрисовки
  var _7SegmentIndicator1 = new _7SegmentIndicator(posX, posY, segmentIndicatorOn, segmentIndicatorOff);
  var _7SegmentIndicator10 = new _7SegmentIndicator(posX+spriteSize*2, posY, segmentIndicatorOn, segmentIndicatorOff);
  var _7SegmentIndicator100 = new _7SegmentIndicator(posX+spriteSize*4, posY, segmentIndicatorOn, segmentIndicatorOff);
  var _7SegmentIndicator1000 = new _7SegmentIndicator(posX+spriteSize*6, posY, segmentIndicatorOn, segmentIndicatorOff);
  var _7SegmentIndicator10000 = new _7SegmentIndicator(posX+spriteSize*8, posY, segmentIndicatorOn, segmentIndicatorOff);
  
  shore = shore.toString();

  for ( var i = 0; i < 5; i++)
  {
    switch (shore[i])
      {
        case "0":    
          if ( i == 0) { _7SegmentIndicator1._0(); }
          if ( i == 1) { _7SegmentIndicator10._0(); }
          if ( i == 2) { _7SegmentIndicator100._0(); }
          if ( i == 3) { _7SegmentIndicator1000._0(); }
          if ( i == 4) { _7SegmentIndicator10000._0(); }
        break;
        case "1":
          if ( i == 0) { _7SegmentIndicator1._1(); }
          if ( i == 1) { _7SegmentIndicator10._1(); }
          if ( i == 2) { _7SegmentIndicator100._1(); }
          if ( i == 3) { _7SegmentIndicator1000._1(); }
          if ( i == 4) { _7SegmentIndicator10000._1(); }
        break;
        case "2":
          if ( i == 0) { _7SegmentIndicator1._2(); }
          if ( i == 1) { _7SegmentIndicator10._2(); }
          if ( i == 2) { _7SegmentIndicator100._2(); }
          if ( i == 3) { _7SegmentIndicator1000._2(); }
          if ( i == 4) { _7SegmentIndicator10000._2(); }
        break;
        case "3":
          if ( i == 0) { _7SegmentIndicator1._3(); }
          if ( i == 1) { _7SegmentIndicator10._3(); }
          if ( i == 2) { _7SegmentIndicator100._3(); }
          if ( i == 3) { _7SegmentIndicator1000._3(); }
          if ( i == 4) { _7SegmentIndicator10000._3(); }
        break;
        case "4":
          if ( i == 0) { _7SegmentIndicator1._4(); }
          if ( i == 1) { _7SegmentIndicator10._4(); }
          if ( i == 2) { _7SegmentIndicator100._4(); }
          if ( i == 3) { _7SegmentIndicator1000._4(); }
          if ( i == 4) { _7SegmentIndicator10000._4(); }
        break;
        case "5":
          if ( i == 0) { _7SegmentIndicator1._5(); }
          if ( i == 1) { _7SegmentIndicator10._5(); }
          if ( i == 2) { _7SegmentIndicator100._5(); }
          if ( i == 3) { _7SegmentIndicator1000._5(); }
          if ( i == 4) { _7SegmentIndicator10000._5(); }
        break;
        case "6":
          if ( i == 0) { _7SegmentIndicator1._6(); }
          if ( i == 1) { _7SegmentIndicator10._6(); }
          if ( i == 2) { _7SegmentIndicator100._6(); }
          if ( i == 3) { _7SegmentIndicator1000._6(); }
          if ( i == 4) { _7SegmentIndicator10000._6(); }
        break;
        case "7":
          if ( i == 0) { _7SegmentIndicator1._7(); }
          if ( i == 1) { _7SegmentIndicator10._7(); }
          if ( i == 2) { _7SegmentIndicator100._7(); }
          if ( i == 3) { _7SegmentIndicator1000._7(); }
          if ( i == 4) { _7SegmentIndicator10000._7(); }
        break;
        case "8":
          if ( i == 0) { _7SegmentIndicator1._8(); }
          if ( i == 1) { _7SegmentIndicator10._8(); }
          if ( i == 2) { _7SegmentIndicator100._8(); }
          if ( i == 3) { _7SegmentIndicator1000._8(); }
          if ( i == 4) { _7SegmentIndicator10000._8(); }
        break;
        case "9":
          if ( i == 0) { _7SegmentIndicator1._9(); }
          if ( i == 1) { _7SegmentIndicator10._9(); }
          if ( i == 2) { _7SegmentIndicator100._9(); }
          if ( i == 3) { _7SegmentIndicator1000._9(); }
          if ( i == 4) { _7SegmentIndicator10000._9(); }
        break;
        /*default:
          if ( i == 0) { _7SegmentIndicator1._0(); }
          if ( i == 1) { _7SegmentIndicator10._0(); }
          if ( i == 2) { _7SegmentIndicator100._0(); }
          if ( i == 3) { _7SegmentIndicator1000._0(); }
          if ( i == 4) { _7SegmentIndicator10000._0(); }
        break;*/
      }
    }
  }


// класс реализует поэлементную отрисовку 1-го 7-ми сегментного индикатора
function _7SegmentIndicator (x, y, imgOn, imgOff,) {
  this.X = x;
  this.Y = y;
  this.imgOn = imgOn;
  this.imgOff = imgOff;
}


_7SegmentIndicator.prototype.Off = function () {
  drawImage(this.imgOff, this.X, this.Y);
  drawImage(this.imgOff, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOff, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOff, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOff, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._1 = function () {
  this.Off();
  drawImage(this.imgOff, this.X, this.Y);
  drawImage(this.imgOff, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOff, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOff, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._2 = function () {
  this.Off();
  drawImage(this.imgOn, this.X, this.Y);
  drawImage(this.imgOn, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOn, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOff, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._3 = function () {
  this.Off();
  drawImage(this.imgOn, this.X, this.Y);
  drawImage(this.imgOn, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOn, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOff, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._4 = function () {
  this.Off();
  drawImage(this.imgOff, this.X, this.Y);
  drawImage(this.imgOn, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOff, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOn, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._5 = function () {
  this.Off();
  drawImage(this.imgOn, this.X, this.Y);
  drawImage(this.imgOn, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOn, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOn, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOff, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._6 = function () {
  this.Off();
  drawImage(this.imgOn, this.X, this.Y);
  drawImage(this.imgOn, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOn, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOn, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOff, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._7 = function () {
  this.Off();
  drawImage(this.imgOn, this.X, this.Y);
  drawImage(this.imgOff, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOff, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOff, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._8 = function () {
  this.Off();
  drawImage(this.imgOn, this.X, this.Y);
  drawImage(this.imgOn, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOn, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOn, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._9 = function () {
  this.Off();
  drawImage(this.imgOn, this.X, this.Y);
  drawImage(this.imgOn, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOn, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOn, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOff, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}

_7SegmentIndicator.prototype._0 = function () {
  this.Off();
  drawImage(this.imgOn, this.X, this.Y);
  drawImage(this.imgOff, this.X, this.Y+spriteSize+2);
  drawImage(this.imgOn, this.X, this.Y+spriteSize*2+4);
  context.save();
  context.translate(this.X, this.Y);
  context.rotate((90).degree());
  drawImage(this.imgOn, ((spriteSize/2) + 1), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2) + 1), ((spriteSize/-2)) - spriteSize - 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), (spriteSize/-2) + 1);
  drawImage(this.imgOn, ((spriteSize/2)+ spriteSize + 3), ((spriteSize/-2)) - spriteSize - 1);
  context.restore();
}


