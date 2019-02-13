"use strict";

// 这里传入的参数必须具有迭代接口，
// 具备迭代接口的数据 [],'',arguments,NodeList

// let oS = new Set([1,2,3,4]);

// let oS2 = new Set('abc')  //输出在控制台上，会将abc三个分开
// oS.add("ddd")
// oS.delete(1); //删除数组的时候，需要用一个变量来标记数组，不然删除不了
// oS.clear();//清空
// oS.has(x)//判断os中有没有x 有返回true 没有返回false
// set遍历
// oS.forEach(value=>{
//     console.log(value);
// })

// es6新增for循环  for of (主要目的是拿到遍历的属性值)  这个遍历的前提是便利的数据也具备迭代接口
// for(let prop of oS){
//     console.log(prop)
// }

// 数组[]->Set
// let arr = [1,2,3,4,5,6];
// let oS = new Set(arr);

// set->数组
// 方法：...arg(拓展运算符，可以拓展任何一个具备迭代接口的值)  
// Array.from(将类数组和具备迭代接口的数据转换成数组)

// let oS2 = Array.from(oS)
// console.log([...oS]);


// set应用场景小节
// let o = {name:"chenye"}
// let arr = [1,2,3,4,o,5,6,o,7,1,2,3,{name:'zhangfan'}]
// let obj = {};
// let newArr = [];

//去重方法1（有缺点） 
// for(let i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         newArr.push(arr[i]);
//         obj[arr[i]] = true;
//     }
// }
// console.log(newArr)

// 以后尽量使用set进行去重
// let oS = new Set(arr);


// 使用set  取并集  交集和差集
// 集合（arr obj set map）
// let arr1 = [1,2,3,2,3];
// let arr2 = [3,2,4,4,5];
// 取并集
// let oS2 = new Set([...arr1,...arr2])
// // 取交集
// let oS3 = new Set(arr1);
// let oS4 = new Set(arr2);
// // 首先将数组去重，然后将两个数组中都有的东西进行筛选
// let newArr1 = [...oS3].filter(ele=>{
//     console.log(ele);
//      当两个数组中都有这个值，就留下来（筛选）
//     return oS4.has(ele)
// })
// console.log(newArr1);

// 差集 
let arr1 = [1,2,3,2,3];
let arr2 = [3,2,4,4,5];
let oS1 = new Set(arr1);
let oS2 = new Set(arr2);
let newArr1 = [...oS1].filter(ele=>{
    return !oS2.has(ele);
})
let newArr2 = [...oS2].filter(ele=>{
    return !oS1.has(ele);
})
console.log([...newArr1,...newArr2])

// 大量数据的才做后台做，前台主要还是做数据可是化的工作