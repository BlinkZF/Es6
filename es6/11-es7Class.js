// 
class Search{
    // es6写静态属性的时候，需要写一个函数
    // static num(){
    //     return 6;
    // }

    // es静态属性写法
    static num = 9;
    constructor(){
        this.keyValue = '';
    }
    getCount(){
        console.log('发送请求');
    }
}

var  os = new Search();
console.log(os);