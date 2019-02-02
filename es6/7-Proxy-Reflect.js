let oDate = {
    value: 'zhangfan',
    _val: 'chenye' //私有属性
}
// let oDate = ['chenye']
// 使用proxy对odate做代理
let OproxyDate = new Proxy(oDate, {
    set(target, key, value, receive) {
        // console.log(target,key,value,receive)
        Reflect.set(target, key, value)
        upDate()
    },
    get(target, key, receiver) {
        // console.log(target,key,receiver);
        return Reflect.get(target, key)
    },
    has(target, key) { //has对应的是in操作
        return key.indexOf('_') != -1 ? false : key in oDate;
    },
    deleteProperty() {
        //  删除属性的时候这个函数会执行
    }
});

// 读写控制
// console.log(OproxyDate.value)
// OproxyDate.value = 10

function upDate() {
    console.log('更新啦')
}
console.log('_val' in OproxyDate)

OproxyDate.value = 20;
// 这里后加的属性也是可以监控到的