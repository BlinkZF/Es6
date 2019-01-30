"use strict";

var arr = [];

var _loop = function _loop(a) {
  arr[a] = function () {
    console.log(a);
  };
};

for (var a = 0; a < 10; a++) {
  _loop(a);
}

arr[0]();
arr[2]();
arr[5]();
