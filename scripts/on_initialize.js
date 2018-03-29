'use strict';

// подключаем canvas
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


/*********** ГЛОБАЛЬНЫЕ ИГРОВЫЕ ПЕРЕМЕННЫЕ ***********/
// размеры игры в пикселях
var gameWidth = 320;
var gameHeight = 480;

// два динамических параметра, меняются в зависимости от размера экрана
var spriteSize = 16; // пиксели
var spritePath = 'img/_320X480.png';

// Изображения из спрайта
// стакан
var glass = loadSprite (spritePath, spriteSize, spriteSize, 0, 2);
var glassCorner = loadSprite (spritePath, spriteSize, spriteSize, 1, 2);
var glassTip = loadSprite (spritePath, spriteSize, spriteSize, 2, 2);
// кубики
var greenCube = loadSprite (spritePath, spriteSize, spriteSize, 0, 0);
var purpleCube = loadSprite (spritePath, spriteSize, spriteSize, 1, 0);
var blueCube = loadSprite (spritePath, spriteSize, spriteSize, 2, 0);
var yellowCube = loadSprite (spritePath, spriteSize, spriteSize, 3, 0);
var turquoiseCube = loadSprite (spritePath, spriteSize, spriteSize, 4, 0);
var redCube = loadSprite (spritePath, spriteSize, spriteSize, 5, 0);
var grayCube = loadSprite (spritePath, spriteSize, spriteSize, 6, 0);
var errorCube = loadSprite (spritePath, spriteSize, spriteSize, 7, 0);
// сегменты 7-ми сегментного индикатора
var segmentIndicatorOff = loadSprite (spritePath, spriteSize, spriteSize, 0, 1);
var segmentIndicatorOn = loadSprite (spritePath, spriteSize, spriteSize, 1, 1);
// буквы для надписей
var letterC = loadSprite (spritePath, spriteSize, spriteSize, 0, 3);
var letterH = loadSprite (spritePath, spriteSize, spriteSize, 1, 3);
var letterE = loadSprite (spritePath, spriteSize, spriteSize, 2, 3);
var letterT = loadSprite (spritePath, spriteSize, spriteSize, 3, 3);
var letterL = loadSprite (spritePath, spriteSize, spriteSize, 0, 4);
var letterD = loadSprite (spritePath, spriteSize, spriteSize, 1, 4);
var letterY = loadSprite (spritePath, spriteSize, spriteSize, 2, 4);
var letterU = loadSprite (spritePath, spriteSize, spriteSize, 3, 4);
var letterSh = loadSprite (spritePath, spriteSize, spriteSize, 4, 4);
var letterA = loadSprite (spritePath, spriteSize, spriteSize, 5, 4);
var letterYa = loadSprite (spritePath, spriteSize, spriteSize, 6, 4);
var letterF = loadSprite (spritePath, spriteSize, spriteSize, 0, 5);
var letterI = loadSprite (spritePath, spriteSize, spriteSize, 1, 5);
var letterG = loadSprite (spritePath, spriteSize, spriteSize, 2, 5);
var letterR = loadSprite (spritePath, spriteSize, spriteSize, 3, 5);
var letterРyphen = loadSprite (spritePath, spriteSize, spriteSize, 4, 3); // дефис
// кнопочки
var leftButton1 = loadSprite (spritePath, spriteSize, spriteSize, 0, 6);
var leftButton2 = loadSprite (spritePath, spriteSize, spriteSize, 1, 6);
var leftButton3 = loadSprite (spritePath, spriteSize, spriteSize, 2, 6);
var leftButton4 = loadSprite (spritePath, spriteSize, spriteSize, 3, 6);
var leftButton5 = loadSprite (spritePath, spriteSize, spriteSize, 0, 7);
var leftButton6 = loadSprite (spritePath, spriteSize, spriteSize, 1, 7);
var leftButton7 = loadSprite (spritePath, spriteSize, spriteSize, 2, 7);
var leftButton8 = loadSprite (spritePath, spriteSize, spriteSize, 3, 7);
var leftButton9 = loadSprite (spritePath, spriteSize, spriteSize, 0, 8);
var leftButton10 = loadSprite (spritePath, spriteSize, spriteSize, 1, 8);
var leftButton11 = loadSprite (spritePath, spriteSize, spriteSize, 2, 8);
var leftButton12 = loadSprite (spritePath, spriteSize, spriteSize, 3, 8);
var leftButton13 = loadSprite (spritePath, spriteSize, spriteSize, 0, 9);
var leftButton14 = loadSprite (spritePath, spriteSize, spriteSize, 1, 9);
var leftButton15 = loadSprite (spritePath, spriteSize, spriteSize, 2, 9);
var leftButton16 = loadSprite (spritePath, spriteSize, spriteSize, 3, 9);


// размеры стакана в квадратах Cube
var glassSizeX = 10;
var glassSizeY = 20;
// игровое поле
/* 0 - серый квадрат ( типа отсутствующий )
 * 1 - зелёный квадрат
 * 2 - фиолетовый квадрат
 * 3 - синий квадрат
 * 4 - желтый квадрат
 * 5 - бирюзовый квадрат
 * 6 - красный квадрат
 * 7 - серый квадрат
 * всё остальное - ошибочный квадрат с крестиком
*/
var gameField = matrixGen (glassSizeY, glassSizeX, 0);

// фигуры в игре 
var figureI_green = new Figures ("green", "I");
var figureI_purple = new Figures ("purple", "I");
var figureI_yellow = new Figures ("yellow", "I");
var figureI_turquoise = new Figures ("turquoise", "I");
var figureI_red = new Figures ("red", "I");

var figureO_green = new Figures ("green", "O");
var figureO_purple = new Figures ("purple", "O");
var figureO_yellow = new Figures ("yellow", "O");
var figureO_turquoise = new Figures ("turquoise", "O");
var figureO_red = new Figures ("red", "O");

var figureL_green = new Figures ("green", "L");
var figureL_purple = new Figures ("purple", "L");
var figureL_yellow = new Figures ("yellow", "L");
var figureL_turquoise = new Figures ("turquoise", "L");
var figureL_red = new Figures ("red", "L");

var figureJ_green = new Figures ("green", "J");
var figureJ_purple = new Figures ("purple", "J");
var figureJ_yellow = new Figures ("yellow", "J");
var figureJ_turquoise = new Figures ("turquoise", "J");
var figureJ_red = new Figures ("red", "J");

var figureS_green = new Figures ("green", "S");
var figureS_purple = new Figures ("purple", "S");
var figureS_yellow = new Figures ("yellow", "S");
var figureS_turquoise = new Figures ("turquoise", "S");
var figureS_red = new Figures ("red", "S");

var figureZ_green = new Figures ("green", "Z");
var figureZ_purple = new Figures ("purple", "Z");
var figureZ_yellow = new Figures ("yellow", "Z");
var figureZ_turquoise = new Figures ("turquoise", "Z");
var figureZ_red = new Figures ("red", "Z");

var figureT_green = new Figures ("green", "T");
var figureT_purple = new Figures ("purple", "T");
var figureT_yellow = new Figures ("yellow", "T");
var figureT_turquoise = new Figures ("turquoise", "T");
var figureT_red = new Figures ("red", "T");

// переменная которая содержит ссылку на фигуру которую показывают на экране
var curFigura = randFigureGen();
var nextFigura =  randFigureGen();
// количество типов фигур в игре
var figureCount = 7;
// количество основных цветов для фигур в игре
var figureColorCount = 5;

// глобальный счетчик вызовов главного игрового цикла
var loopCall = 0;
// глобальная скорость игры чем выше число тем медленнее 1 - максимальная скорость отрисовки
// меняется только от уничтоженных строк
var gameSpeed = 30;

// может измениться в зависимости от нажатых игроком клавиш
var currentGameSpeed = gameSpeed;
// определяет следующий порог увеличения скорости
var thresholdLevelUpSpeed = 30;
// порог увеличения скорости

// возможные варианты статусов игры
_enum_ ('gameStatuses', ['figuraStart', 'figuraMove', 'stringDel', 'figuraEnd', 'gameLoss']);
// текущий статус игры
var curGameStatus = gameStatuses.figuraEnd;

// массив полностью заполненных строк готовых к удалению
var completedStrings = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

// текущая нажатая клавиша
var keyDown = 0;

// счет игры
var gameScore = 0;
var bonusModifer = 0;

/*********** ФУНКЦИИ ***********/

// функция которая выбирает оптимальный размер экрана
function selectOptScrSizeWidth () {
  // получаем размер окна браузера
  var browserWindowsWidth = window.innerWidth;
  var browserWindowsHeight = window.innerHeight;

  // смартфоны
  /*if ((browserWindowsWidth >=320) && (browserWindowsWidth < 768))
  {
    return 320;
  }

  console.log(innerWidth);
  console.log(innerHeight);*/
}

// функция загружает изображения из спрайтовой карты в память
// path - путь к изображению, 
// width, height - ширина, и высота кадра спрайта на карте спрайта
// colX, rowY - положение изображения на карте спрайта 
function loadSprite (path, width, height, colX, rowY) {
  var image = document.createElement('img');

  var result = {
    dom: image,
    width: width,
    height: height,
    colX: colX,
    colY: rowY,
    loaded: false
  };
  image.onload = function () {
    result.loaded = true;
  };
  
  image.src = path;

  return result;
}











