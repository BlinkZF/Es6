//在es5之前class是一个保留字，在es6中class是关键字
// class的本质还是还是，但是es6这种更为高效

//利用class可以给构造函数加三种属性：私有属性，公有属性(原型上的属性)，静态属性(函数上的属性)
class Plane {
    // 静态属性，这里的属性名必须是static
    // es6中不支持非方法的静态属性,
    // 静态方法一旦加上之后，就是Plane上的方法,当AttackPlane继承字后，也是继承在方法上的。
    static alive() {
        return true;
    }
    // 下面这句是es7中的写法
    // Static:alive = 10;
    constructor(name) {
        this.name = name || '普通飞机';
        this.blood = 100;
    }
    fly() {
        console.log('fly')
    }
    // es7写法  私有属性
    // name = 10
}
// var op = new Plane();
// console.log(op)
// op.fly()
// Plane.alive()

// 定义一个轰炸机
// es6继承标准写法
class AttackPlane extends Plane{  
//这里的extends是继承的作用  类似于java中的
    constructor(name){
        // Plane.call();//继承私有属性的方法
        super(name);
        this.logo = 'duyi';
    } 
    dan(){
        console.log("biubiubiu")
    } 
}
var oAp = new AttackPlane('轰炸机')


// es5

// 通过class  执行的时候必须的new一下
// 通过class定义的这种类，原型不能枚举  plane.prototype
// 静态属性要放到函数上(Plane)  而不是原型上 