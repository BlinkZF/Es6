// 使用es5  模拟es6代码

// 类调用检测方法  可以实现class中需要new才能执行的这个功能的展示
function _classCallcheck(_this, _constructor) {

    if (!(_this instanceof _constructor)) {
        throw "TypeError:class constructor Plane cannet be invoked without 'new'"
    }
}

function _defineProperties(target, props) {
    //  Object.defineProperty
    props.forEach(function (ele) {
        // ele.key  
        Object.defineProperty(target, ele.key, {
            // 下面的几个属性，是有默认值的，可读可写可操作
            value: ele.value,
            writable: true, //可写
            configurable: true, //可配置
        })
    })
}


// 处理公有属性和静态属性
function _createClass(_constructor, _prototypeProperties, _staticProperties) {
    // 给原型上赋值
    if (_prototypeProperties) {
        _defineProperties(_constructor.prototype, _prototypeProperties)
    }
    if (_staticProperties) {
        _defineProperties(_constructor, _staticProperties)
    }
}

var Plane = (function () {
    function Plane(name) {
        // 判断是否以new的方式来执行
        _classCallcheck(this, Plane);
        this.name = name || "普通飞机";
        this.blood = 100;
    }
    _createClass(Plane, [
        // 这里写Plane上面应该加什么属性
        {
            key: "dan",
            value: function () {
                console.log("biubiubiu")
            }
        }
    ], [
        // 这里写Plane上面应该加什么静态属性
        {
            key: 'alive',
            value: function () {
                return true;
            }
        }
    ])
    return Plane;
})()

var oP = new Plane('轰炸机')
console.log(oP)

//  让原型实现一种继承
function _inherit(sub, sup) {
    Object.setPrototypeOf(sub.prototype, sup.prototype);
}


var AttackPlane = (function (Plane) {
    _inherit(AttackPlane, Plane)

    function AttackPlane(name) {
        _classCallcheck(this, Plane)
        this.logo = 'duyi'
        Plane.call(this, name);
    };
    _createClass(AttackPlane, [{
        key: 'dan',
        value: function () {
            console.log('buibuibui')
        }
    }][
        // 这里写Plane上面应该加什么静态属性
        {
            key: 'alive',
            value: function () {
                return true;
            }
        }
    ])

    return AttackPlane;

})(Plane)

var oAp = new AttackPlane();
console.log(oAp)