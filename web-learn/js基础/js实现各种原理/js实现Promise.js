// 手写Promise

// 三种状态

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

// Promise 接收一个函数参数，该函数会立即执行
function MyPromise(fn) {
  let _this = this
  _this.currentState = PENDING
  _this.value = undefined

  // 用于保存 then 中的回调，只有当 promise 状态为 pending 时才会缓存，并且没有实例最多缓存一次
  _this.resolvedCallbacks = []
  _this.rejectedCallbacks = []

  _this.resolve = function (value) {
    if (value instanceof MyPromise) {
      // 如果 value 是个 Promise，递归执行
      return value.then(_this.resolve, _this.reject)
    }

    setTimeout(() => { // 异步执行，保证顺序执行
      if (_this.currentState === PENDING) {
        _this.currentState = RESOLVED
        _this.value = value
        _this.resolvedCallbacks.forEach(cb => cb())
      }
    })
  }

  _this.reject = function (reason) {
    setTimeout(() => {
      if (_this.currentState === PENDING) {
        _this.currentState = REJECTED
        _this.reason = reason
        _this.rejectedCallbacks.forEach(cb => cb())
      }
    })
  }

  /**
   * 用于解决一下问题
   * new Promise(() => throw Error('error'))
   */
  try {
    fn(_this.resolve, _this.reject)
  } catch (e) {
    _this.reject(e)
  }
}

// 将 then 函数添加到 MyPromise 原型上
MyPromise.prototype.then = function (onResolved, onRejected) {
  let self = this
  // 规范 2.2.7，then 必须返回一个新的 promise
  let promise2
  // 规范2.2 onResolved，onRejected 都为可选参数
  // 如果类型不是函数需要忽略，同事也实现了透传
  // Promise.resolve(4).then().then((value) => console.log(value))
  onResolved = typeof onResolved === 'function' ? onResolved : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : error => {
    throw error
  }

  if (self.currentState === RESOLVED) {
    return (promise2 = new MyPromise((resolve, reject) => {
      /**
       * 规范2.2.4，保证 onFulfilled，onReject 异步执行
       * 因此使用 setTimeout
       */
      setTimeout(() => {
        try {
          let x = onResolved(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    }))
  }

  if (self.currentState === REJECTED) {
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    }))
  }

  if (self.currentState === PENDING) {
    return (promise2 = new MyPromise((resolve, reject) => {
      self.resolvedCallbacks.push(() => {
        // 考虑可能会有报错，所以使用 try/catch
        try {
          let x = onResolved(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })

      self.rejectedCallbacks.push(() => {
        try {
          let x = onRejected(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    }))
  }
}

function resolutionProcedure(promise2, x, resolve, reject) {
  // 规范2.3.1 x 不能和 promise2 相同，避免循环引用
  if (promise2 === x) {
    return reject(new TypeError('Error'))
  }

  // 规范2.3.2，如果 x 为 promise，状态为 pending 需要接续等待否则执行
  if (x instanceof MyPromise) {
    if (x.currentState === PENDING) {
      x.then(value => {
        /**
         * 再次调用该函数是为了确认 x resolve 的参数类型，如果是基本类型就在此 resolve 把值传递给下一个then
         */
        resolutionProcedure(promise2, value, resolve, reject)
      }, reject)
    } else {
      x.then(resolve, reject)
    }
    return
  }

  // reject 后者 resolve 其中一个执行过的话，忽略其他的
  let called = false
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // 如果不能取出 then，就 reject
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) return
            called = true
            resolutionProcedure(promise2, y, resolve, reject)
          },
          error => {
            if (called) return
            called = true
            reject(error)
          }
        )
      } else {
        resolve(x)
      }
    } catch (reason) {
      reject(reason)
    }
  } else {
    resolve(x)
  }
}

console.log(111)
new MyPromise((resolve, reject) => {
  console.log(222)
  resolve()
  console.log(333)
}).then(() => {
  console.log(444)
})
console.log(555)