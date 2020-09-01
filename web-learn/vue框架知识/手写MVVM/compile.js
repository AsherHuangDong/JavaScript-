class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    if (this.el) {
      // 如果这个元素能获取到，才开始编译
      // 1.先把真实DOM移动到内存中 fragment
      let fragment = this.node2fragment(this.el)

      // 2.编译 => 提取想要的元素节点(v-model)和文本节点({{}})
      this.compile(fragment)

      // 3.把编译好的fragment在塞回到页面中
      this.el.appendChild(fragment)
    }
  }
  /* 专门写一些辅助方法 */
  isElementNode(node) {
    return node.nodeType === 1;
  }

  isDirective(name) {
    return name.includes('v-')
  }


  /* 核心方法 */
  node2fragment(el) { // 需要将el中的内容全部放入内存中
    let fragment = document.createDocumentFragment()
    let firstChild;
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment
  }

  compile(fragment) {
    // 需要递归
    let childNodes = fragment.childNodes
    Array.from(childNodes).forEach(node => {
      if (this.isElementNode(node)) {
        // 是元素节点,还需要继续深入的检查
        // 这里需要编译元素
        this.compileElement(node)
        this.compile(node)

      } else {
        // 是文本节点
        // 这里需要编译文本
        this.compileText(node)
      }
    })
  }

  compileElement(node) {
    // 带 v-model
    let attrs = node.attributes
    Array.from(attrs).forEach(attr => {
      // 判断属性名字是不是包含  v-
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        // 取到对应的值，放到节点中
        let expr = attr.value
        // node this.vm.$data expr
        let [, type] = attrName.split('-')
        CompileUtil[type](node, this.vm, expr)
      }
    })
  }

  compileText(node) {
    // 带 {{}}
    let expr = node.textContent; // 取文本中的内容
    let reg = /\{\{([^}]+)\}\}/g;
    if (reg.test(expr)) {
      // node, this.vm.$data, expr
      CompileUtil['text'](node, this.vm, expr)
    }
  }

}

CompileUtil = {
  getVal(vm, expr) {
    expr = expr.split('.')
    return expr.reduce((prev, next) => {
      return prev[next]
    }, vm.$data)
  },
  getTextVal(vm, expr) {
    return expr.replace(/\{\{([^}]+)\}\}/g, (...arg) => {
      return this.getVal(vm, arg[1])
    })
  },
  text(node, vm, expr) { // 文本处理
    let updateFn = this.updater['textUpdater']
    let value = this.getTextVal(vm, expr)

    expr.replace(/\{\{([^}]+)\}\}/g, (...arg) => {
      new Watcher(vm, arg[1], (newValue) => {
        // 如果数据变化了，文本节点需要重新获取依赖的数据，更新文本中的内容
        updateFn && updateFn(node, this.getTextVal(vm, expr))
      })
    })
    updateFn && updateFn(node, value)
  },
  setVal(vm, expr, value) {
    expr = expr.split('.')
    return expr.reduce((prev, next, currentIndex) => {
      if (currentIndex === expr.length - 1) {
        return prev[next] = value
      }
      return prev[next]
    }, vm.$data)
  },
  model(node, vm, expr) { // 输入框处理
    let updateFn = this.updater['modelUpdater']
    // 这里应该加一个监控，数据变化了应该调用这个watch的callbak
    new Watcher(vm, expr, (newValue) => {
      // 当值变化后会调用callback将新值传递过来()
      updateFn && updateFn(node, this.getVal(vm, expr))
    })
    node.addEventListener('input', (e) => {
      let newValue = e.target.value;
      this.setVal(vm, expr, newValue)
    })
    updateFn && updateFn(node, this.getVal(vm, expr))
  },
  updater: {
    // 文本更新
    textUpdater(node, value) {
      node.textContent = value
    },
    // 输入框更新
    modelUpdater(node, value) {
      node.value = value
    }
  }
}