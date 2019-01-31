// function sum() {
//     console.log(arguments);
//     let arg = Array.prototype.slice.call(arguments,0);
//     let arg1 = [].slice.call(arguments,0);
//     let arg2 = arguments.slice(0)
//     // 这里的[] == Array.prototype;
//     // 这里的slice.call()的方法，是截取数组
//     console.log(arg)
//     console.log(arg1)   
//     console.log(arg2)   
// }   
// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4,5,6));

// 写场景
// function sum(...arg) {
//     console.log(arg,arg instanceof Array)
//     var arg1 = arg.slice(1);
//     console.log(arg1)
// }
// sum(1, 2, 3)


// function test(a,b,...arg) {
//     console.log(a,b)
//     console.log(arg)
//   }
// test(1,3,4,5,6,7,8)
// 这个时候前面固定的参数会自动的传给固定的形参中，然后剩下的参数会，自动的放在...arg中
// 注意...arg只能在参数的最后一个出现

// const aveargs = (...arg)=>{
//     arg.sort((a,b)=>{
//         return a-b;
//     })
//     arg.pop()
//     arg.shift()
//     // return computedScore.apply(this,arg);
//     // 读操作  收集作用
//     return computedScore(...arg)   
//     // 这里就等同于computedScore(arg);  这里直接调用的时候，就可以完美的实现这种效果
// }
// // 写操作  展开的作用
// const computedScore = (...arg) => {
//     let sum = 0;
//     arg.forEach(element => {
//         sum += element;
//     })
//     console.log(sum / arg.length)
// }
// aveargs(1,2,3,4,5,6,8,9);
// // console.log(computedScore(1,2,3,4,5,6,7,8,9));

// console.log(1, 2, 3, 4, 5);
// let arr = [1, 2, 3, 4, 5]

// console.log(arr)
// 读操作 展开
// console.log(...arr)


// 将两个数组合并
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 3, 4, 5]
// let newArr = [...arr1, ...arr2]; //等同于原生中的concat
// console.log(newArr)

// ES7中的...  {}

let company = {
    name: "完美世界",
    age: 10
}
leader = {
    name: '张三',
    age: 25
}
let Department = {
    leader: {
        ...leader
    },
    personNum: 3000
}
let obj = {
    ...company,
    ...Department,
    leader:{
        ...leader
    }
}

// 还有一种方法可以实现深克隆
// 先是将这个对象转化成字符串的形式，然后将这个json类型的字符串转化成新的对象,转化完成之后和深克隆是一样的
// 缺点是：当这个对象中有函数，正则，或者是特殊的对象之类的，会出现某些问题(可能是丢失/克隆之后和以前的不一样)
// var obj1 = JSON.parse(JSON.stringify(teachDepartment))

// let arr = {
//     name:"zhangfan",
//     age:20
// }
// var obj2 = Object.assign({},company,teachDepartment,arr) //第一个参数是一个目标对象，后面的对象参数可以是无限多个
// //  但是这里有一个问题：当你的多个对象中有某些key的值时一样的时候，会后面覆盖前面的