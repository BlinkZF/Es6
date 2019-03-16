// let fs = require('fs');

// let oStudent = {};
// function readFile(path) {  
//     return new Promise((res,rej)=>{
//         fs.readFile(path,'utf-8',(err,data)=>{
//             if(data){
//                 res(data);
//             }
//         })
//     })
// }

//当并发一堆异步操作的时候，想得到最终的一个统一结果的时候，使用Promise.all()
// Promise返回的对象也是promise对象
// Promise.all([readFile('./nodePromise/demo1'),readFile('./nodePromise/test1'),readFile('./nodePromise/test2')]).then((val)=>{
//     //参数必须是数组，数组中放置一堆promise对象，所以在后面.then链式调用的时候就是给这个里面的promise对象.then 注册成功失败回调
//     // 当里面的promise全都触发成功的时候,就会触发后面的then的成功回调。当有一个失败的时候就会触发失败的回调函数
//     console.log(val);//输出三个文件中的指
// })
// race(赛跑)传入的文件谁先读取成功就用谁的
// Promise.race([readFile('./nodePromise/demo1'),readFile('./nodePromise/test1'),readFile('./nodePromise/test2')]).then((val)=>{
//     console.log(val);
// })


function test(x) {  
    return new Promise((res,rej) => {
        setTimeout(() => {
            Math.random()*100>50?res(x):rej(x);
        }, 100);
    })
}
// let op = Promise.all([test('a'),test('b'),test('c')])
// op.then((val)=>{
//     console.log(val);
// },(reason)=>{
//     console.log(reason)
// })
// 当全都正确的时候返回所有的值a,b,c
// 当里面有失败的时候。谁先触发失败谁的值就会先被返回

// let op = Promise.race([test('a'),test('b'),test('c')])
// op.then((val)=>{
//     console.log(val)
// },(reason)=>{
//     console.log(reason)
// })