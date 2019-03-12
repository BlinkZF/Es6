// let prop = 'name';
// let obj = {
//     [prop+10]:'cst'  //这里可以对name值进行编号
// }

function myMap() {
    this.bucketLength = 8;
    this.init()
}
myMap.prototype.init = function () {
    // 初始化  桶
    this.bucket = new Array(this.bucketLength);
    for (var i = 0; i < this.bucket.length; i++) {
        this.bucket[i] = {
            type: 'bucket_' + i,
            next: null,
        }
    }
}

//将范围变成[0,8)
//重复算值固定
myMap.prototype.makeHash = function (key) {
    let hash = 0;
    if (typeof key !== 'string') {
        if (typeof key == 'number') {
            // numbar
            hash = Object.is(key, NaN) ? 0 : key;
        } else if (typeof key == 'object') {
            // object
            hash = 1;
        } else if (typeof key == 'boolean') {
            // true  false 可以进行类型转换
            hash = Number(key); //强制类型转换
        } else {
            hash = 2;
        }
    } else {
        // 长度大于等于3  拿到前三个字符的ascii累加
        // 值不大于3  只取第一个就行
        for (let i = 0; i < 3; i++) {
            hash += key[i] ? key[i].charCodeAt(0) : 0;
        }
    }
    return hash % 8;
}
// 添加值
myMap.prototype.set = function (key, value) {
    let hash = this.makeHash(key)
    let oTempBucket = this.bucket[hash]
    while (oTempBucket.next) {
        if (oTempBucket.next.key == key) {
            oTempBucket.next.value = value;
            return;
        } else {
            oTempBucket = oTempBucket.next;
        }
    }
    oTempBucket.next = {
        key: key,
        value: value,
        next: null,
    }
}

// 取值
myMap.prototype.get = function (key) {
    let hash = this.makeHash(key);
    let oTempBucket = this.bucket[hash];
    while (oTempBucket) {
        if (oTempBucket.key == key) {
            return oTempBucket.value;
        } else {
            oTempBucket = oTempBucket.next;
        }
    }
    return undefined;
}
// 删除
myMap.prototype.delete = function (key) {
    let hash = this.makeHash(key);
    let oTempBucket = this.bucket[hash];
    while (oTempBucket.next) {
        if (oTempBucket.next.key == key) {
            oTempBucket.next = oTempBucket.next.next
            return true;
        } else {
            oTempBucket = oTempBucket.next;
        }
    }
    return false;
}

// 判断有没有这个值
myMap.prototype.has = function (key) {
    let hash = this.makeHash(key);
    let oTempBucket = this.bucket[hash];
    while (oTempBucket) {
        if (oTempBucket.next && oTempBucket.next.key == key) {
            return true;
        } else {
            oTempBucket = oTempBucket.next;
        }
    }
    return false;
}

// clear 清空方法
myMap.prototype.clear = function (key) {
    this.init();
}


let oMp = new myMap()
let obj1 = {
    name: 'chenye'
}
oMp.set("name1", "zf1");
oMp.set("name2", "zf2");
oMp.set(obj1, "----");
oMp.set(obj1, "++++");
oMp.set(function () {}, true);