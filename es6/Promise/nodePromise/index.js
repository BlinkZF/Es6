let fs = require('fs')
// fs.readFile('./demo1','utf-8',(err,data) =>{
//     if(data){
//         fs.readFile(data,"utf-8",(err,data)=>{
//             if(data){
//                 fs.readFile(data,"utf-8",(err,data)=>{
//                     console.log(data);
//                 })
//             }
//         })
//     }
// })


// 形成回调地狱
// Promise解决异步问题:

// 在后台try catch同样捕获不到错误
// 解决办法:
// try{
//     fs.readFile('./demo1',"utf-8",(err,data)=>{
//         console.log(data)
//         // try{
//             throw new Error('1111')
//         // }catch(e){
//         //     console.log(e,'okok')
//         // }
        
//     })
// }catch(e){
//     console.log(e,'ok');
// }

// process.on('uncaughtException',(err)=>{
//     console.log(err,'okok');
// })


// 并发异步操作  
let oStudent = {}

function show1(data) {  
    console.log(data);
}
function show2(data) {  
    console.log(data,2);
}

fs.readFile("./demo1",'utf-8',(err,data) =>{
    if(data) oStudent.name = data;
    Store.fire(oStudent)
})
fs.readFile("./test1",'utf-8',(err,data) =>{
    if(data) oStudent.name = data;
    Store.fire(oStudent)
})
fs.readFile("./test2",'utf-8',(err,data) =>{
    if(data) oStudent.name = data;
    Store.fire(oStudent)
})
// 优化方法
// function after(times,cb) {  
//     return function(){
//         --times == 0 && cb.apply(null,arguments);
//     }
// }
// let newShow = after(3,show)

// Promise 原理--- 发布订阅

let  Store = {
    list:[],
    times:3,
    subscribe(func){
        this.list.push(func)
    },
    fire(...arg){
        --this.times == 0 && this.list.forEach((ele)=>{
            ele.apply(null,arg)
        })
    }
}
Store.subscribe(show1)
Store.subscribe(show2)


// 跟好的办法是Promise.all





