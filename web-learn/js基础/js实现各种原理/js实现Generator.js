// 手写Generator

// 使用 * 表示这是一个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调用 next 恢复执行
function* test() {
  let a = 1 + 2
  yield 2
  yield 3
}

let b = test()
console.log(b.next())
console.log(b.next())
console.log(b.next())

function Generator(callback) {
  return (function () {
    let object = {
      next: 0,
      stop: function () {}
    }

    return {
      next: function () {
        let ret = callback(object)
        if (ret === undefined) return {
          value: undefined,
          done: true
        }
        return {
          value: ret,
          done: false
        }
      }
    }
  })()
}