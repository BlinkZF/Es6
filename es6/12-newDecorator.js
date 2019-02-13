"use strict";

var _dec, _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

// 张三 
// var oInpot = document.getElementById('inp');
// var oBtn = document.getElementById('btn');
// var keyValue = "";
// // 注册一个oninput事件，监控用户输入的东西
// oInpot.oninput = function () {
//     keyValue = this.value;
// };
// oBtn.onclick = function () {
//     newGetContent(keyValue);
// };
// function getContent(data) {
//     var url = 'url-A'
//     console.log('向' + url + '发送网络请求，data:' + data);
// }
// var newGetContent = dealFunc(getContent);
// // 李四  
// // 这里的功能是实现一个代理执行的效果，在有多个功能的时候，整合到一起，在不影响核心业务功能的时候将新的功能添加进来
// function dealFunc(func) {
//     return function (data) {
//         var urlB ="url-B"
//         console.log('向' + urlB + '发送网络请求，data:' + data);
//         return func.apply(this,arguments)
//     }
// }
var oInpot = document.getElementById('inp');
var oBtn = document.getElementById('btn');
var Search = (_dec = dealData('zhangsan'), Skin(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function Search() {
    _classCallCheck(this, Search);

    _initializerDefineProperty(this, "url", _descriptor, this);

    this.keyValue = '';
  }

  _createClass(Search, [{
    key: "getContent",
    // 这里的@dealData就是一个函数
    value: function getContent() {
      console.log('向' + this.url + '发送网络请求，data:' + this.keyValue);
    }
  }]);

  return Search;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "url", [myreadOnly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'urlA-';
  }
}), _applyDecoratedDescriptor(_class2.prototype, "getContent", [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, "getContent"), _class2.prototype)), _class2)) || _class);
var oS = new Search();
oS.url = 20; // 装饰私有属性
// 函数有三个参数，前两个是的原型和修饰所用的名字，后面的是描述符

function myreadOnly(proto, key, descriptor) {} // console.log(proto, key, descriptor)
// descriptor.writable = false;
// descriptor.initializer = function () {
//     return 'zhangfan'
// }
// 修饰原型上的属性
// function dealData(proto, key, descriptor) {
//     console.log(proto, key, descriptor)
//     let oldValue = descriptor.value;
//     // 改变原有的功能
//     descriptor.value = function () {
//         var url = "urlB-"
//         console.log('向' + url + '发送网络请求，data:' + this.keyValue)
//         oldValue.apply(this,arguments)
//     }
// }
// 修改代码


function dealData(ms) {
  return function (proto, key, descriptor) {
    console.log(proto, key, descriptor);
    var oldValue = descriptor.value; // 改变原有的功能

    descriptor.value = function () {
      var url = "urlB-";
      console.log('向' + url + '发送网络请求，data:' + this.keyValue + ms);
      oldValue.apply(this, arguments);
    };
  };
} // 这里有一个地方需要注意一下：修饰私有属性和原型上的属性有一点区别，
// 修饰私有属性的时候descriptor中的是initializer
// 修饰原型上的属性的时候descriptor中的是value


oInpot.oninput = function () {
  oS.keyValue = this.value;
};

oBtn.onclick = function () {
  oS.getContent();
}; // 装束一个类


function Skin(target) {
  target.aaa = 20;
}
