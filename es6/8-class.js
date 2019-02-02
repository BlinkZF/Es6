// es5中则比较松散，不new也能执行
// 在es6中通过class定义的函数，必须通过new来执行，不然就会报错

Plane.prototype.fly = function () {
    console.log("fly")
  }
// 在原型上的是公有属性，所有子元素都能调用
function Plane(name) {
    this.name = name||'普通飞机';
    this.blood = 100;
  }
  var oPlane1 = new Plane();
  var oPlane2 = new Plane();
  
//   console.log(oPlane1)//这里打印出来的都是对象的私有属性
     oPlane1.fly()
     oPlane2.fly()


// 扩展功能的方式:
// 继承方式
//      继承私有属性 

// 装饰者模式
// AttackPlane.prototype = new Plane(); //继承了私有属性
// AttackPlane.prototype.bullte = function(){
//     console.log('发射子弹')
// }
// function AttackPlane(name) { 
//     // this.name = '轰炸机';
//     // this.blood = 100;
//     // 借用构造函数的方式来实现继承
//     Plane.call(this,name)
//  }
//  var oAttackPlane = new AttackPlane();
//     oAttackPlane.bullte()

// 继承原型(圣杯模式)  定义一个中间变量
// var temp = function () {  }
// temp.prototype = Plane.prototype;
// AttackPlane.prototype = new temp(); 


// AttackPlane.prototype.__proto__ = Plane.prototype;//这里的意思是，沿着AttackPlane的原型向上找一次是Plane
// 上面这种属性是隐藏属性(浅粉色的属性)，这个是系统内置的属性，如果对他理解的不好，修改可能会出现问题，所以上面的这种也不推荐
// AttackPlane.prototype.bullte = function(){
//     console.log('发射子弹')
// }
// function AttackPlane(name) {
//     Plane.call(this,name)
//   }
// var oAP = new AttackPlane('轰炸机')

// es6中的方法
// object.setPrototypeof()


// Object.setPrototypeOf(AttackPlane.prototype,Plane.prototype);//前面对象的原型是后面的对象(推荐方法)
// // AttackPlane.prototype = Object.create(Plane.prototype,{//AttackPlane这个的原型指向新创建的这个对象 (这种方法不用)
// //     constructor:AttackPlane //指定构造函数
// // })
// AttackPlane.prototype.bullte = function(){
//     console.log('发射子弹')
// };
// function AttackPlane(name) {
//     Plane.call(this,name)
//   }
// var oAP = new AttackPlane("轰炸机");
// var oPlane = new Plane();