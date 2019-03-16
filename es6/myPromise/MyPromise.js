// ES5模拟Promise
function MyPromise(executor) {
    var self = this;
    self.status = 'pending'
    // 存储传递的参数
    self.resolveValue = null;
    self.RejectReason = null;
    // 异步执行,当正常执行的时候，先将传递的数据存储起来，等到真正执行调用的时候再进行调用
    self.ResolveCallBackList = [];
    self.RejectCallBackList = [];
    function resolve(val) {
        if (self.status === 'pending') {
            self.status = "Fulfilled";
            self.resolveValue = val;
            self.ResolveCallBackList.forEach((ele) => {
                ele();
            })
        }
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.status = "Rejected"
            self.RejectReason = reason;
            self.RejectCallBackList.forEach((ele) => {
                ele();
            })
        }
    }
    // 同步执行，感知是否抛出错误，如果出错执行reject
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e);
    }
}

function ResolutionRetrunPromise(nextPromise, returnValue, res, rej) {
    if (returnValue instanceof MyPromise) {
        // promise对象
        returnValue.then(function (val) {
            res(val)
        }, function (reason) {
            rej(reason)
        })
    } else {
        res(returnValue)
    }
}
// then方法
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    if (!onFulfilled) {
        onFulfilled = function (val) {
            return val;
        }
    }
    if (!onRejected) {
        onRejected = function (reason) {
            throw new Error(reason);
        }
    }
    var self = this;
    var nextPromise = new MyPromise(function (res, rej) {
        // 根据不同的状态执行不同的操作
        if (self.status == 'Fulfilled') {
            setTimeout(function () {
                try {
                    var nextResolveValue = onFulfilled(self.resolveValue)
                    ResolutionRetrunPromise(nextPromise, nextResolveValue, res, rej)
                } catch (e) {
                    rej(e)
                }
            })
        }
        if (self.status == 'Rejected') {
            setTimeout(function () {
                try {
                    var nextRejectValue = onRejected(self.RejectReason)
                    ResolutionRetrunPromise(nextPromise, nextRejectValue, res, rej)
                } catch (e) {
                    rej(e)
                }
            })
        }
        if (self.status === "pending") {
            self.ResolveCallBackList.push(function () {
                setTimeout(function () {  
                    try {
                        var nextResolveValue = onFulfilled(self.resolveValue);
                        ResolutionRetrunPromise(nextPromise, nextResolveValue, res, rej)
                    } catch (e) {
                        rej(e)
                    }
                })
            })
            self.RejectCallBackList.push(function () {
                setTimeout(function () {
                    try {
                        var nextRejectValue = onRejected(self.rejectReason);
                        ResolutionRetrunPromise(nextPromise, nextRejectValue, res, rej)
                    } catch (e) {
                        rej(e)
                    }
                })
            })
        }
    });
    return nextPromise;
}

MyPromise.race = function (promiseArr) {  
    return new MyPromise(function (resolve,reject) {  
        promiseArr.forEach(function(promise ,index){
            promise.then(resolve,reject)
        })
    })
}