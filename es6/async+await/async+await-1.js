let fs = require('fs');
// 回调地狱
// fs.readFile('../data/name1.txt','utf-8',(err,data)=>{
//     fs.readFile(data,'utf-8',(err,data)=>{
//         fs.readFile();...
//     })
// })

// 初级解决办法 
// function readFile(path) {  
//     return new Promise((res,rej)=>{
//         fs.readFile(path,"utf-8",(err,data)=>{
//             if(err){
//                 rej(err);
//             }else{
//                 res(data);
//             }
//         })
//     })
// }
// readFile("../data/name1.txt").then((val)=>{
//     console.log(val);
// },(err)=>{
//     console.log(err);
// })

// Promise化包裹
// promisify函数，当传递一个异步操作函数的时候，最后会返回一个函数，
function promisify(func) {  
    return function(...arg){
        return new Promise((res,rej)=>{
            func(...arg,(err,data)=>{
                if(err){
                    rej(err)
                }else{
                    res(data)   
                }
            })
        })
    }
}

// let readFile = promisify(fs.readFile);
// let readdir = promisify(fs.readdir);
// let writeFile = promisify(fs.writeFile);
// readFile('../data/name1.txt','utf-8').then((val)=>{
//     console.log(val)
// },(err)=>{
//     console.log(err);
// });

// Promise化异步操作 当需要把fs上的所有方法都实现上面的效果：
function promisifyAll(obj){
    for(let key in obj){
        let fn = obj[key];
        if(typeof fn == 'function'){
            obj[key+"Async"] = promisify(fn)//生成promise化函数
        }
    }
}
promisifyAll(fs);
// readFile->readFileAsync ..将所有的都按照这种来转化
// 转化完成之后
// promise化之后的函数
fs.readFileAsync('../data/name1.txt','utf-8').then((val)=>{
    console.log(val);
})


// bluebird 这个库中有promisify这个方法 可以直接调用
let  bluebird = require('bluebird')//安装这个库之后可以直接引用,不用使用上面的方法
bluebird.promisify(fs.readFile);