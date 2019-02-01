// var obj = {
//     name: 'zhangfan'
// }

// 可配置：可删除，
// 可枚举：可循环出来


// 不可写的
// Function.prototype = {
//     name:"zhangfan"
// }

//不可配置
// var a = 11;
// console.log(window.a)  
// 通过var的方式第一全局变量是不可以被删除

// 可枚举
// 所有的原型的顶端都是Object.prototype
// var obj = {
//     name:'zhangfan',
//     age:20,
//     __proto__:{
//         sex:"male"
//     }
// }
// for(var prop in obj){
//     console.log(prop);
// }
//可以循环出来sex  说明for in循环可以沿着原型往上循环,但是Object.prototype上的属性方法是不能被枚举的

// 所以上面的这些可控不可控的都是通过Object.defineProperty来控制的

// 数据描述符例子
// var obj = {};
// Object.defineProperty(obj,'name',{
//     value:'zhangfan',
//     writable:true,           //可不可写
//     configurable:true,       //可不可配置
//     enumerable:true,         //可不可循环

// })
//     obj.name = 'chenye';
//     console.log(obj.name);
//     for(var prop in obj){
//         console.log(prop)
//     }
//     delete obj.name;
//     console.log(obj.name);

// 存取描述符
// 存取描述符例子
// var obj = {};
// var a = ""
// Object.defineProperty(obj, 'name', {
//     // value:'zhangfan',
//     // writable:true,           //可不可写
//     configurable: true, //可不可配置
//     enumerable: true, //可不可循环
//     get: function () {
//         return a
//     }, //当读取属性值的时候会执行这个
//     set: function (newVue) {
//         a = newVue
//     }, //当给属性写入值的时候会执行set
// })
// // 这里需要注意下：当设置了value和writable的时候，就不能设置set和get，这两对势不两立

// console.log(obj.name); //""    这里的属性值就对应的是get中的return的值   
// obj.name = 'chenye';
// console.log(obj.name);//chenye

//当只设置value金额writable的时候
// var obj = {
//     name:'chenye'
// };
// Object.defineProperty(obj,'name',{
//     value:'zhangfan',
//     writable:true,           //可不可写
// })
// //当obj中有值的时候，object中的value会将name 的值覆盖掉 
// // 而且当obj中有值的时候，他的所有的配置属性都是true

//下面这种情况是使用get和set的时候，所有的配置属性都是true
// 这里想要赋值起作用，只要设置一个变量就行了
var obj = {
    a:'zhangfan',
    get name(){
        return this.a
    },
    set name(newvalue){
        a = newvalue
    }
}
obj.a = 'chenye'
console.log(obj.name)