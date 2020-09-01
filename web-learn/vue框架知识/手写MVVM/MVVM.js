class MVVM {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;

    // 如果有要编译的模板才开始编译
    if (this.$el) {
      // 数据劫持 就是把对象的所有书香 改成set和get
      new Observer(this.$data);
      this.proxyDate(this.$data)
      // 用数据和元素进行编译
      new Compile(this.$el, this);
    }
  }

  // 数据代理，就是能通过vm.message.a 修改值，而不是去调用vm.$data.message.a
  proxyDate(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return data[key]
        },
        set(newValue) {
          data[key] = newValue
        }
      })
    })
  }
}