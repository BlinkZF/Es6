const PI = {}
PI.name = 30;
console.log(PI.name)

// 注意
function test(x,y) {
    let x = 10;
}
test()
// 当上面的这种在es5函数中对形参使用let重定义是会报错的。但是使用var的时候就可以，所以上面的案例说明，es5中的形参是通过var来声明的
