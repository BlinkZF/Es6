// var oDiv = document.getElementById('show');
// var oinp = document.getElementById('demo');
// var oData = {
//     valueObj: {
//         value: 20,
//         name: 'zhangfan'
//     },
//     sex:'male'
// };
// oinp.oninput = function () {
//     oData.value = this.value;
// }

// function upDate() {
//     oDiv.innerText = oData.valueObj.value;
// }
// upDate()
// // 监控对象的某个属性是否发生改变
// function Observer(data) {
//     //这里的参数，第一个是对象，后面的如果是想监控这个对象中的某个属性，则可以直接将这个属性名写在这，如果全都监控值则不用
//     if (!data || typeof data != 'object') {
//         return data;
//     }
//     Object.keys(data).forEach(function (key) {
//         defineRective(data, key, data[key])
//     }) //这个方法直接返回对象中的属性

// }

// function defineRective(data, key, val) {
//     Observer(val);
//     Object.defineProperty(data, key, {
//         get() {
//             return val;
//         },
//         set(newValue) {
//             if (newValue == val) return;
//             val = newValue
//             upDate();
//         }
//     })
// }
// Observer(oData)
// oData.valueObj.value = 'chenye'
//深层次的监控的时候，需要加上克隆的思想，多层的时候，我们要加上递调用

// vue中监控数组的底层实现
// let arr = []
// let {push} = Array.prototype
// function upData() {
//     console.log('更新啦')
// }
// // [
// //     'push',
// //     'pop',
// // ]

// // 当数组发生push pop unshift shift  slice  concat...改变数组的方法的时候，才能触发
// Object.defineProperty(Array.prototype,'push',{
//     value:(function () {
//         return (...arg) =>{
//             push.apply(arr,arg)
//             upData();
//         }
//       })()
// })

// arr.push(1,2);

// Object.defineProperty 这个方法没有办法搞定数组  只能通过间接的方法来实现监控数组
// 二而且不能新增数据

// Proxy  Reflect  可以将上面的两个问题解决掉
// 但是他们的兼容性不好   所以vue3.0之前没有使用这个
// 