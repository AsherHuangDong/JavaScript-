/**
 * * 异步函数 async function()
 * * 1.1作用：避免有更多的请求操作，出现多重嵌套，也就是俗称的“回调地狱”，
 *           因此提出了 ES6 的 Promise，将回调函数的嵌套，改为链式调用
 */
// 例如：
// this.$http.jsonp('/login', (res) => {
//   this.$http.jsonp('/getInfo', (info) => {
//     // do something
//   })
// })
// let promise = new Promise((resolve, reject) => {
//   this.login(resolve)
// }).then(() => {
//   this.getInfo()
// }).catch(err => {
//   console.error(err)
// })
/**
 * * 1.2 声明方式：
 *    异步函数存在以下四种使用形式：
 *      * 函数声明：async function foo() {}
 *      * 函数表达式：const foo = async function() {}
 *      * 对象方式：let obj = { async foo() {} }
 *      * 箭头函数：const foo = async () => {}
 */

/**
 * * 1.3 支持返回 Promise 和同步的值
 *    async 用于定义一个异步函数，该函数返回一个 Promise。
 *    如果 async 反回的是一个同步的值，这个值将被包装成一个理解 resolve 的 Promise， 等同于 return Promise.resolve(value)
 *    await 用于一个异步操作之前，表示要 “等待” 这个异步操作的返回值。await 也可以用于一个同步的值。
 */
// 返回 Promise
let timer = async function timer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('a')
    }, 1000)
  })
}
timer().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err.message)
})
// 返回同步的值
let sayHello = async function sayHello() {
  let hi = 'hello world' // 等同于 return Promise.resolve(hi)
  return hi
}
sayHello().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err.message)
})

/**
 * * 1.4 对异常的处理
 */
// promise 对异常的处理
// 1.使用 reject
let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reject('promise使用reject抛出异常')
  }, 1000)
})
promise.then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err) //'promise使用reject抛出异常'
  })

// 2. 使用 new Error()
let promise1 = new Promise((reslove, reject) => {
  throw new Error('promise 使用 Error 抛出异常')
})
promise1.then(res => [
  console.log(res)
]).catch(err => [
  console.log(err) // promise 使用 Error 抛出异常
])

// 3.reject 一个 new Error()
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('promise 抛出异常'))
  }, 1000)
})
promise2.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err) // promise 抛出异常
})

/**
 * * async 和 Promise链对比:
 *    async 函数中可以包含多个异步操作，其异常和 Promise 链有相同之处，
 *    如果有一个 Promise 被 reject() 那么后面的将不会在进行。 
 * * 以下案例，async 捕获到了一个错误之后就立马进入 catch() 中，不执行之后的代码
 */
let count = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reject('promise 故意抛出异常')
    }, 1000)
  })
}
let list = () => {
  return new Promise((reslove, reject) => [
    setTimeout(() => {
      reslove([1, 2, 3])
    }, 1000)
  ])
}

// let getList = async () => {
//   let c = await count()
//   console.log('async') // 此段代码没有执行
//   let l = await list()
//   return {
//     count: c,
//     list: l
//   }
// }
// console.time('start')
// getList().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.timeEnd('start')
//   console.log(err)
// })

/**
 * * 1.5 并行
 *   以上案例中，async 采用的是串行处理，count() 和 list() 是有先后顺序的
 */
// 并行案例
let count1 = function () {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(100)
    }, 500)
  })
}
let list1 = function () {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([1, 2, 3])
    }, 500)
  })
}
let getList1 = async () => {
  let result = await Promise.all([count1(), list1()])
  return result
}
console.time('begin')
getList1().then(res => {
  console.timeEnd('begin')
  console.log(res)
}).catch(err => {
  console.timeEnd('begin')
  console.log(err)
})

/**
 * * 1.6 与 Generator 的关系: async/await 就是 Generator 函数的语法糖
 * * Generator 优缺点：
 *    1.优点：将异步操作表示得很简洁
 *    2.缺点：管理流程不方便（即：何时执行第一阶段，何时执行第二阶段）。
 * * async/await：能够自动执行 Generator 函数的方法。
 */
function* getList2() {
  const c = yield count1()
  const l = yield list1()
  return 'end'
}
let gl = getList2()
console.log(gl.next())
console.log(gl.next())
console.log(gl.next())

console.time('dev')
let getList3 = async () => {
  await count1().then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  await list1().then(res => {
    console.timeEnd('dev')
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
getList3()