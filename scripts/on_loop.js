'use strict';

/********** GAME LOOP **********/
var gameEngine;

// создаем прототип requestAnimationFrame чтобы не затрагивать основных функций
var nextGameStep = (function () {
	// пока не работает требует доработки
	return requestAnimationFrame || 
	// если браузер не может вернуть requestAnimationFrame то поступаем по старинке
	function (callback) {
    setTimeout (callback, 1000 / 60);
	};
})();

// запускает игровой цикл
var gameEngineStart = function (callback) {
  gameEngine = callback;
  gameEngineStep();
};

var setGameEngine = function (callback) {
	gameEngine = callback;
};

var gameEngineStep = function () {
  gameEngine();
  nextGameStep(gameEngineStep);
};



/********** GAME **********/

// главный игровой цикл
var gameLoop = function () {
  if(curGameStatus.value != gameStatuses.gameLoss.value) {
    // если вдруг счетчик переполниться тогда просто обнуляем его
    if (loopCall >= Number.MAX_SAFE_INTEGER) {
      loopCall = 0;
    } else {
      loopCall++;
    }

    onLogic ();
    onRender_Dynamic ();
    }
};

// ТОЧКА ВХОДА В ИГРУ
gameEngineStart(gameLoop);







