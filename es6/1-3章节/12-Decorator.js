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

let oInpot = document.getElementById('inp');
let oBtn = document.getElementById('btn');

@Skin
class Search {
    constructor() {
        this.keyValue = '';
    }
    @myreadOnly
    url = 'urlA-';
    // 这里的@dealData就是一个函数
    @dealData('zhangsan')
    getContent() {
        console.log('向' + this.url + '发送网络请求，data:' + this.keyValue)
    }
}
var oS = new Search();
oS.url = 20;
// 装饰私有属性
// 函数有三个参数，前两个是的原型和修饰所用的名字，后面的是描述符
function myreadOnly(proto, key, descriptor) {
    // console.log(proto, key, descriptor)
    // descriptor.writable = false;
    // descriptor.initializer = function () {
    //     return 'zhangfan'
    // }
}

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
        console.log(proto, key, descriptor)
        let oldValue = descriptor.value;
        // 改变原有的功能
        descriptor.value = function () {
            var url = "urlB-"
            console.log('向' + url + '发送网络请求，data:' + this.keyValue + ms)
            oldValue.apply(this, arguments)
        }
    }
}


// 这里有一个地方需要注意一下：修饰私有属性和原型上的属性有一点区别，
// 修饰私有属性的时候descriptor中的是initializer
// 修饰原型上的属性的时候descriptor中的是value
oInpot.oninput = function () {
    oS.keyValue = this.value
}
oBtn.onclick = function () {
    oS.getContent(1, 2);
}


// 装束一个类
function Skin(target) {
    target.aaa = 20;
}