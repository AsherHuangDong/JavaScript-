class Observer {

  constructor(data) {
    this.observer(data);
  }

  observer(data) {
    // 要对这个data数据将原有的属性改成get和set
    if (!data || typeof data !== 'object') return

    // 要将数据一一劫持. 现获取到data的key和value
    Object.keys(data).forEach(key => {
      // 劫持
      this.defineReactive(data, key, data[key])
      this.observer(data[key]) // 深度递归劫持
    })

  }
  // 定义响应式
  defineReactive(obj, key, value) {
    let that = this
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true, // 是否可枚举
      configurable: true, // 是否可删除
      get() { // 当取值时
        // dep.target ? dep.addSub(Dep.target) : null
        dep.addSub(Dep.target)
        return value;
      },
      set(newValue) { // 当给data属性中设置值的时候。更改获取的属性的值
        if (newValue !== value) {
          // 这里的this不是实例
          that.observer(newValue) // 如果是对象继续劫持
          value = newValue
          dep.notify() // 通知所有人数据更新了
        }
      }
    })
  }
}

class Dep {
  constructor() {
    // 订阅的数组
    this.subs = []
  }
  addSub(watcher) {
    this.subs.push(watcher)
  }
  notify() {
    this.subs.forEach(watcher => watcher && watcher.update ? watcher.update() : null)
  }
}