let fs = require('fs')
function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (data) {
                res(data)
            } else {
                rej(err)
            }
        })
    })
}
// 最最基本写法
// readFile('./num.text').then((res)=>{
//     return readFile(res)
// }).then((res) =>{
//     return readFile(res)
// }).then((res) =>{
//     return readFile(res)
// })

// Generator函数
function* read() {
    let data1 = yield readFile('./num.text');
    let data2 = yield readFile(data1);
    let data3 = yield readFile(data2);
    return data3;
}
let oG = read();
// 最基本写法：
// let {value,done} = oG.next()    
// value.then((val)=>{
//     let {value,done} = oG.next(val);
//     value.then((val)=>{
//         let {value,done} = oG.next(val);
//         value.then((val)=>{
//            console.log(val,done);
//         });
//     });
// });   


// 递归优化改写  co源码
// function Co(oG) {
//     return new Promise((res, rej) => {
//         let next = (data) => {
//             let { value, done } = oG.next(data);
//             if (done) {
//                 res(value)
//             } else {
//                 value.then((val) => {
//                     next(val)
//                 },rej)
//             }
//         }
//         next();
//     })
// }
// Co(read()).then((val) => {
//     console.log(val)
// },()=>{})

// 超级写法
let co = require('co')
co( read() ).then((val)=>{
    console.log(val);
})