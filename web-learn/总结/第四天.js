/**
    1. 只有 button 能够监听 touchend
    2. transition 的使用:
      属性 {
        1. transition-propoty: 过渡属性(默认值为 all)
        2. transition-duration: 过渡持续时间(默认值为 0s)
        3. transition-timing-function: 过渡函数(默认值为 ease 函数)
        4. transition-delay: 过渡延迟时间(默认值为 0s)
        5. 统一写法: transition: transition-property || transition-duration || transition-timing-function || transition-delay
      }
      注意事项 {
        1. transition 的四个子属性之间不能用逗号隔开，只能用空格隔开。
           因为逗号隔开的代表不同的属性(transition 属性支持多值);
           而空格隔开的代表不同属性的四个关于过渡的紫属性
        2. 过渡 transition 的这四个属性只有 transition-duration 是必须值且不能为 0。
           其中，transition-duration 和 transition-delay 都是时间。当两个时间同时出现时
           第一个是 transition-duration，第二个是 transition-delay； 当只有一个时间时，它代表 transition-duration 而 transition-delay 为默认值 0s。
      }
 */