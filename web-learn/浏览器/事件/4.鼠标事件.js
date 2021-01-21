/**
 * 1. 鼠标事件种类:
 *    - click: 单击事件
 *    - dblclick: 双击事件
 *    - mousedown: 按下鼠标键触发
 *    - mouseup: 抬起鼠标按键触发
 *    - mousemove: 鼠标在一个节点内部移动时触发
 *    - mouseenter: 鼠标进入一个节点时触发，进入子节点不会触发
 *    - mouseover: 鼠标进入一个节点时触发，进入子字节会再一次触发这个事件
 *    - mouseout: 鼠标离开一个节点时触发，离开父节点也会触发这个事件
 *    - mouseleave: 鼠标离开一个节点时触发，离开父节点不会触发这个事件
 *    - contextmenu: 按下鼠标右键是触发，或者按下 "上下文菜单键"时触发
 *    - wheel: 滚动鼠标的滚轮时触发，该事件继承的是 WheelEvent 接口
 *  
 *    * mouseenter 和 mouseover：两者都是鼠标进入一个节点时触发
 *        区别：mouseenter事件 只触发一次
 *             mouseover事件 只要鼠标在节点内部移动，就会在子节点上触发多次
 *    
 *    * mouseleave 和 mouseout: 都是鼠标离开一个节点时触发。
 *        区别：mouseleave事件 在父元素内部离开一个子元素时，不会触发
 *             mouseout事件 则会触发
 */

/**
 * 2. MouseEvent 接口概述
 *        MouseEvent 接口代表了鼠标相关的事件，click，dblclick 等事件所产生的的对象都是 MouseEvent 的实例
 *     此外，滚轮事件和拖拉事件也是 MouseEvent 实例。
 *        MouseEvent 继承了 Event 接口，所以拥有 Event 的所有属性和方法。它还拥有自己的属性和方法
 *     - 浏览器提供一个 MouseEvent 构造函数，用于新建一个 MouseEvent 实例
 *       var event = new MouseEvent(type, options)
 *       - 参数： type：字符串，事件名称
 *               options：是一个配置对象，可选参数，除了 Event 的属性外还有以下属性，
 *                 - screenX: 鼠标相对于屏幕的水平位置(单位像素)，默认值为0，设置该属性不会移动鼠标
 *                 - screenY：鼠标相对于屏幕的垂直位置(单位像素), 其他同上
 *                 - clientX: 鼠标相对于程序窗口的水平位置, 其他同上
 *                 - clientY: 鼠标相对于程序窗口的垂直位置, 其他同上
 *                 - ctrlKey: 布尔值，是否同时按下了 Ctrl 键，默认为 false
 *                 - shiftKey: 布尔值，是否同时按下了 Shift 键，默认为 false
 *                 - altKey: 布尔值，是否同时按下了 Alt 键，默认为 false
 *                 - metaKey: 布尔值，是否同时按下了 Meta 键，默认为 false
 *                 - button: 数值，表示按下了哪一个鼠标按键，默认为 0，表示按下主键(通常鼠标左键)
 *                     或者当前事件没有定义这个属性；
 *                     1，表示按下辅助键(通常是鼠标的中间键)
 *                     2，表示按下 次要键(通常是鼠标右键)
 *                 - buttons: 数值，表示按下了鼠标的哪些键，是一个三位的二进制值。
 *                     默认为 0，表示没有按下任何键
 *                     001: 表示按下主键(通常是鼠标左键)
 *                     010: 表示按下 次要键(通常是鼠标右键)
 *                     011: 表示同时按下 主键 和 次要键
 *                     100: 表示按下辅助键(通常是鼠标中间键)
 *                 - relatedTarget: 节点对象，表示事件的相关节点，默认为 null
 *                     例：mouseenter 和 mouseover事件，表示鼠标刚刚离开的那个元素节点
 *                        mouseout 和 mouseleave事件，表示鼠标正在进入的那个元素节点。
 */

/**
 * 3. MouseEvent 接口的实例属性
 *    3.1 MouseEvent.altKey, MouseEvent.ctrlKey, MouseEvent.metaKey, MouseEvent.shiftKey 都为只读属性
 *        - altKey: 布尔值，是否按下 Alt 键
 *        - ctrlKey：布尔值，是否按下 Ctrl 键
 *        - metaKey：布尔值，是否按下 Meta 键
 *        - shiftKey: 布尔值，是否按下 Shift 键
 *    3.2 MouseEvent.button, MouseEvent.buttons 都为只读属性
 *    3.3 MouseEvent.clientX, MouseEvent.clientY 都为只读属性
 *    3.4 MouseEvent.movementX, MouseEvent.movementY 都是只读属性
 *        - movementX: 返回当前位置与上一个 mousemove 事件之间的水平距离(像素) <=> currentEvent.movementX = currentEvent.screenX - previousEvent.screenX
 *        - movementY: 返回当前位置与上一个 mousemove 事件之间的垂直距离(像素) <=> currentEvent.movementY = currentEvent.screenY - previousEvent.screenY      
 *    3.5 MouseEvent.screenX, MouseEvent.screenY 都是只读属性
 *    3.6 MouseEvent.offsetX, MouseEvent.offsetY 都是只读属性
 *        - offsetX: 返回鼠标位置与目标节点左侧的 padding 边缘的水平位置
 *        - offsetY: 返回鼠标位置与目标节点上方的 padding 边缘的垂直距离
 *    3.7 MouseEvent.pageX, MouseEvent.pageY 都是只读属性
 *    3.8 MouseEvent.relatedTarget(只读): 返回事件相关节点,对于那些没有相关节点的时间，返回null
 *        不同事件的 target 属性值 和 relatedTarget 属性值义:
 *          事件名称	     target 属性	   relatedTarget 属性
 *          focusin	     接受焦点的节点	    丧失焦点的节点
 *          focusout	   丧失焦点的节点	    接受焦点的节点
 *          mouseenter	 将要进入的节点	    将要离开的节点
 *          mouseleave	 将要离开的节点	    将要进入的节点
 *          mouseout	   将要离开的节点	    将要进入的节点
 *          mouseover	   将要进入的节点	    将要离开的节点
 *          dragenter	   将要进入的节点	    将要离开的节点
 *          dragexit	   将要离开的节点	    将要进入的节点
 *        
 *        
 */

/**
 * 4. MouseEvent 的接口实例方法
 *    4.1 MouseEvent.getModifierState(key): 
 *          返回一个布尔值，表示是否按下特定的功能按键。参数是一个功能键的字符串
 *          例：是否按下了大写键
 *             document.addEventListener('click', function(e) {  
 *               console.log(e.getModifierState('CapsLock'))
 *             })
 */

/**
 * 5. WheelEvent 接口
 *    WheelEvent 接口继承了 MouseEvent 实例，代表鼠标滚轮事件的实例对象
 *    生成实例：var wheelEvent = new WheelEvent(type, options)
 *    参数：type: 事件类型，对于该对象，只能是 wheel
 *         options: 事件配置对象，除了 Event, UIEvent 的配置属性外，还包括
 *           - deltaX: 数值，表示滚轮水平滚动量，默认值 0.0
 *           - deltaY: 数值，表示滚轮垂直滚动量，默认值 0.0
 *           - deltaZ: 数值，表示滚轮Z轴滚动量，默认值 0.0
 *           - deltaMode: 数值，表示相关的滚动事件单位，适用于以上三个属性，默认为 0
 *               - 0, 表示单位为像素
 *               - 1, 表示单位为行
 *               - 2, 表示单位为页
 */