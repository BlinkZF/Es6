"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fs = require('fs');

function readFile(path) {
  return new Promise(function (res, rej) {
    fs.readFile(path, 'utf-8', function (err, data) {
      if (data) {
        res(data);
      } else {
        rej(err);
      }
    });
  });
} // function* read(url) {
//     let data1 = yield readFile(url);
//     let data2 = yield readFile(data1);
//     let data3 = yield readFile(data2);
//     return data3;
// }
// function Co(oIt) {
//     return new Promise((res, rej) => {
//         let next = (data) => {
//             let { value, done } = oIt.next(data);
//             if (done) {
//                 res(value)
//             } else {
//                 value.then((val) => {
//                     next(val)
//                 }, rej)
//             }
//         }
//         next();
//     });
// }
// Co(read('../data/name1.txt')).then((val) => {
//     console.log(1);
//     console.log(val)
// }, (err) => {
//     console.log(err);
// })
// 下面的async+await就是上面co的封装(Generator+Promise+Co+递归)
// async function read(url) {
//     try {
//         let val1 = await readFile(url) //这里的await是等待的作用,当readFile(url)执行完之后 在进行下一步
//         let val2 = await readFile(val1)
//         let val3 = await readFile(val2)
//         return val3
//     } catch (e) {
//         console.log(e);
//     }
// }
// read('../data/name.txt').then((val) => {
//     console.log(val);
// })
// Promise.all([readFile('../data/name1.txt'),readFile('../data/name2.txt'),readFile('../data/number1.txt')]).then((val)=>{
//     console.log(val);
// },(reason)=>{
//     console.log(reason);
// })


function read1() {
  return _read.apply(this, arguments);
}

function _read() {
  _read = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var val1;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            val1 = null;
            _context.prev = 1;
            _context.next = 4;
            return readFile('../data/name1.txt');

          case 4:
            val1 = _context.sent;
            console.log(val1);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));
  return _read.apply(this, arguments);
}

function read2() {
  return _read2.apply(this, arguments);
}

function _read2() {
  _read2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var val2;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            val2 = null;
            _context2.prev = 1;
            _context2.next = 4;
            return readFile('../data/name2.txt');

          case 4:
            val2 = _context2.sent;
            console.log(val2);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 8]]);
  }));
  return _read2.apply(this, arguments);
}

function read3() {
  return _read3.apply(this, arguments);
}

function _read3() {
  _read3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var val3;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            val3 = null;
            _context3.prev = 1;
            _context3.next = 4;
            return readFile('../data/name1.txt');

          case 4:
            val3 = _context3.sent;
            console.log(val3);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 8]]);
  }));
  return _read3.apply(this, arguments);
}

function readAll() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  arg.forEach(function (ele) {
    ele();
  });
}

readAll(read1, read2, read3); // 简化一下
