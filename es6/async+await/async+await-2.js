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
// function* read(url) {
//     let data1 = yield readFile(url);
//     let data2 = yield readFile(data1);
//     let data3 = yield readFile(data2);
//     return data3;
// }
// function Co(oIt) {
//     return new Promise((res, rej) => {
//         let next = (data) => {
//             let { value, done } = oIt.next(data);
//             if (done) {
//                 res(value)
//             } else {
//                 value.then((val) => {
//                     next(val)
//                 }, rej)
//             }
//         }
//         next();
//     });
// }
// Co(read('../data/name1.txt')).then((val) => {
//     console.log(1);
//     console.log(val)
// }, (err) => {
//     console.log(err);
// })

// 下面的async+await就是上面co的封装(Generator+Promise+Co+递归)
// async function read(url) {
//     try {
//         let val1 = await readFile(url) //这里的await是等待的作用,当readFile(url)执行完之后 在进行下一步
//         let val2 = await readFile(val1)
//         let val3 = await readFile(val2)
//         return val3
//     } catch (e) {
//         console.log(e);
//     }
// }
// read('../data/name.txt').then((val) => {
//     console.log(val);
// })


// Promise.all([readFile('../data/name1.txt'),readFile('../data/name2.txt'),readFile('../data/number1.txt')]).then((val)=>{
//     console.log(val);
// },(reason)=>{
//     console.log(reason);
// })

async function read1() {  
    let val1 = null;
    try{
        val1 = await readFile('../data/name1.txt')
        console.log(val1);
    }catch(e){
        console.log(e)
    }
}
async function read2() {  
    let val2 = null;
    try{
        val2 = await readFile('../data/name2.txt')
        console.log(val2);
    }catch(e){
        console.log(e)
    }
}
async function read3() {  
    let val3 = null;
    try{
        val3 = await readFile('../data/name1.txt')
        console.log(val3);
    }catch(e){
        console.log(e)
    }
}

function readAll(...arg) {  
    arg.forEach((ele)=>{
        ele()
    })
}
readAll(read1,read2,read3)
// 简化一下

