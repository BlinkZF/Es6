//解构 
let obj= {
    name:"zf",
    age:18,
    sex:"female"
};
//第一种方法：先声明--》再赋值
// let name,age;
// ({name,age} = obj);

//第二种方法：声明赋值一起进行
// let {name,age} = obj
// console.log(name);
// console.log(age);

//第三种方法：
// let {name:oName,age:oAge} = obj
// console.log(oName,oAge);

// 默认赋值  当后面的对象中没有sex的值的时候，默认的是male，当有的时候，则是对象中对应的值
// let {name:oName,age:oAge,sex = 'male'} = obj
// console.log(oName,oAge,sex);

// 例子： 当我们如果不给B传值，而且他还没有默认值的时候，就会报错，所有一般情况下都会给一个默认值，防止出错
// let sum = (a = 10,b = 0)=>{
//     console.log(a+b);
// }
// sum(1)

// 解构数组
// 第一种数组赋值
// let arr= [1,2,3];
// let {0:x,1:y,2:z} = arr;
// 第二种数组赋值
// let [x,y,z] = arr
// console.log(x,y,z)
// 数组的长度赋值
// let {length} = arr
// console.log(length); //这种的直接将arr的length的值赋给length

// 数组对象同时出现的结构化赋值
// let arr = [1,2,3,{name:'zf'}]
// let [,,,{name}] = arr;
// console.log(name)

// 使用场景
// 复杂的数据里面的值要分开操作的时候: