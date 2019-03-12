// 箭头函数的声明
// let sum = (a,b) => {
//     return a+b;
// }
// let sum = (a,b)=>a+b
// let sum = (a,b)=>[a,b]  
// let sum = (a,b)=>{a:'a',b:'b'} //不能直接使用这种返回对象,因为大括号不会识别成一个整体，但是可以变成表达式就行
// let sum = (a,b)=> ({a:a,b:b});// 对象的形式
// console.log(sum(10,20))
//箭头函数可以省略return

// 高级函数(一个函数的参数或者返回的值是一个函数，就可以称之为高级函数)
// function sum(x) {
//     return function (y) {
//         return function (z) { 
//             return x+y+z;
//          }
//       }
//   }
// var sum1 = sum(10);
// var sum2 = sum1(10);
// var sum3 = sum2(10);
// console.log(sum3)

// 将上面的改成箭头函数
// let sum = x => y => z => x + y + z;
// console.log(sum(1)(2)(3)) 
// 当箭头函数只有一个形参的时候，这里就不需要括号了
// 箭头函数中的形参不能是相同的变量
// function auter() {
//     // console.log(arguments)
//     let sum = (a, b) => {
//         console.log(arguments, a, b);
//     }
//     sum(1, 2)
// }
// 箭头函数在全局定义的话，是没有arguments的，当他的外围有普通函数的时候，arguments等同于他最接近外层普通函数的arguments
// auter(1,2,3,4,5)

// this    在全局定义的时候有些不同
// let sum = () =>{
//     console.log(this);//window 
//     // this在这里和arguments唯一一点区别，当this箭头函数外面没有普通函数套的时候，他的this只指向的就是window
// }
// sum();

// 例子
// var a  = 'zhangfan'
// let sum = () =>{
//     console.log(this.a);//这里的this指向的是window，所以输出的zhangfan
// }

// let obj = {
//     a:'chenye',
//     // fn:sum
//     fn:()=>{
//         console.log(this.a); //这里由于这个fn的外界没有非箭头函数，所以这里的值还是window下的zhangfan
//     }
// }
// obj.fn();

// 外界有非箭头函数
// var a = 'zhangfan'
// let obj = {
//     a: "chenye",
//     fn() {
//         let sum = () => {
//             console.log(this.a)//这里外界有非箭头函数  所以指向的就不是window了而是obj  这里的是chenye
//         }
//         sum()
//     }
// }
// obj.fn()

// var a = 'zhangfan'
// let obj = {
//     a: "chenye",
//     fn() {
//         let sum = () => {
//             console.log(this.a)//这里外界有非箭头函数  所以指向的就不是window了而是obj  这里的是chenye
//             // 这里的this执行的是他最初定义时的那个值
//         }
//         return sum;
//     }
// }
// let outerSum = obj.fn();
//     outerSum();

// 再举个例子
// let obj = {
//     ms:"zhangfan",
//     fn(){
//         // 这种解决this指向的解决办法是:
//          var _this = this;
//         setTimeout(function () { 
//             console.log(_this.ms);//这里的ms是undefined  因为这里的this指向的是window
//             console.log(this)
//          },1000)
//     }
// }
// obj.fn()

// 改进一下上面的例子
// let obj = {
//     ms: "zhangfan",
//     fn() {
//         setTimeout(() => {
//             console.log(this.ms); //这里的ms是zhangfan  因为这里的this指向的是fn调用fn的函数obj
//             console.log(this)
//         }, 1000)
//     }
// }
// obj.fn()


// 箭头函数补充
let arr = [1, 2, 3, 4, 5, 6, 7];
var val = arr.map((ele) => ele * ele);
var fil = arr.filter((ele) => ele>2)
console.log(val)
console.log(fil)