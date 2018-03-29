'use strict';

function onEvent () {
  
}

// клавиши для управления фигурами
var keys = {
	'space':32,
	'upArrow':38,
	'downArrow':40,
	'leftArrow':37,
	'rightArrow':39,
	'W':87,
	'S':83,
	'A':65,
	'D':68
};

var setKey = function (keyCode) {
  keyDown = keyCode;
}

var clearKey = function () {
	keyDown = 0;
};

var isKeyDown = function (keyName) {
	return keyDown == keys[keyName];
};

window.onload = function () {
  window.onkeydown = function (e) {
    setKey(e.keyCode);
    //console.log(e.keyCode);
  };

  window.onkeyup = function () {
  	clearKey();
  };

}


