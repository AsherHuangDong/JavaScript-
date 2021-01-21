/**
 * 1. 触摸操作概述
 *     浏览器触摸事件 API 由三个部分组成：
 *    - Touch: 一个触摸点，用来表示触摸点，包括 位置, 大小, 形状, 压力, 目标元素等属性
 *    - TouchList: 多个触摸点的集合
 *    - TouchEvent: 触摸引发的事件实例
 */

/**
 * 2. Touch 接口
 *    2.1 Touch 接口概述
 *        Touch 接口代表单个触摸点。触摸点可以是一根手指，也可能是一根触摸笔。
 *      浏览器提供 Touch 构造函数，用来生成 Touch 实例。
 *      var touch = new Touch(touchOptions),接收一个配置对象，该对象有以下属性:
 *      - identifier: 必需，整数，表示触摸点的唯一 ID。  
 *      - target: 必需，数值，表示触摸点开始时所在的网页元素。
 *      - clientX: 可选，数值，表示触摸点相对于浏览器窗口左上角的水平距离(不包括页面滚动的距离)，默认为 0
 *      - clientY: 可选，数值，表示触摸点相对于浏览器窗口左上角的垂直距离(不包括页面滚动的距离)，默认为 0
 *      - screenX: 可选，数值，表示触摸点相对于屏幕左上角的水平距离(不包括页面滚动的距离)，默认为 0
 *      - screenY: 可选，数值，表示触摸点相对于屏幕左上角的垂直距离(不包括页面滚动的距离)，默认为 0
 *      - pageX: 可选，数值，表示触摸点相对于网页左上角的水平距离(包括页面滚动的距离)，默认为 0
 *      - pageY: 可选，数值，表示触摸点相对于网页左上角的垂直距离(包括页面滚动的距离)，默认为 0
 *      - radiusX: 可选，数值，表示触摸点周围受到影响的椭圆范围的 X 轴半径，默认为 0
 *      - radiusY: 可选，数值，表示触摸点周围受到影响的椭圆范围的 Y 轴半径，默认为 0
 *      - rotationAngle: 可选，数值，表示触摸区域的椭圆的旋转角度，单位为度数，在 0 - 90 度之间，默认为 0
 *      - force: 可选，数值，范围在 0 到 1 之间，表示触摸压力。0 代表没有压力，1 代表硬件所能识别的最大压力，默认为 0
 *    2.2  Touch 接口的实例属性包含以上所列举的属性
 */

/**
 * 3. TouchList 接口
 *      TouchList 接口表示一组触摸点的集合。它的实例是一个类数组的对象，成员是 Touch 的实例对象，表示所有触摸点。
 *    用户用三根手指触摸，产生的 TouchList 实例就会包含三个成员，每根手指的触摸点对应一个 Touch 实例对象。
 *    它的实例主要通过触摸事件的 TouchEvent.touches, TouchEvent.changedTouches, TouchEvent.targetTouches 获取。
 *    它的实例属性和实例方法只有两个：
 *      - TouchList.length: 整数，表示成员数量(即触摸点的数量)
 *      - TouchList.item(): 返回指定位置的成员，它的参数是该成员的位置编号(从零开始)
 */

/**
 * 4. TouchEvent 接口
 *    4.1 概述
 *          TouchEvent 接口继承了 Event 接口，表示由触摸引发的事件实例，通常来自触摸屏或轨迹版。
 *        浏览器提供 TouchEvent() 构造函数，生成触摸事件实例。new TouchEvent(type, options)
 *        除了被继承的属性外，还有以下属性：
 *        - touches: TouchList 实例，代表所有的当前处于活跃状态的触摸点，默认为一个空数组 []
 *        - targetTouches: TouchList 实例，代表所处在的触摸的目标元素节点内部，且仍然处于活跃
 *            状态的触摸点，默认为一个空数组 []
 *        - changedTouches: TouchList 实例，代表本次触摸事件的相关触摸点，默认为一个空数组 []
 *        - ctrlKey: 布尔值，表示 Ctrl 键是否同时按下，默认为 false
 *        - shiftKey: 布尔值，表示 Shift 键是否同时按下，默认为 false
 *        - metaKey: 布尔值，表示 Meta 键是否同时按下，默认为 false
 *        - altKey: 布尔值，表示 Alt 键是否同时按下，默认为 false
 *    4.2 实例属性
 *        - altKey, ctrlKey, shiftKey, metaKey
 *        - changedTouches: 返回一个 TouchList 实例，成员是一组 Touch 实例对象，表示本次触摸事件的相关触摸点
 *            - touchstart 事件: 被激活的触摸点
 *            - touchmove 事件: 发生变化的触摸点
 *            - touchend 事件: 消失的触摸点
 *        - touches: 返回一个 TouchList 实例，成员是所有仍然处于活跃装填的触摸点。一般来说，一个手指就是一个触摸点。
 *        - targetTouches: 返回一个 TouchList 实例，成员是触摸事件的目标元素节点内部，所有仍然处于活跃状态的触摸点。
 */

/**
 * 5. 触摸事件种类
 *       触摸事件，有以下几种，可以通过 TouchEvent.type 属性，查看到底发生的是哪一种事件
 *    - touchstart: 用户开始触摸时触发，它的 target 属性返回发生触摸的元素节点
 *    - touchmove: 用户不在接触触摸屏时触发，它的 target 属性与 touchstart 事件是一致的，就是开始触摸时所在的元素节点。
 *        它的 changedTouches 属性返回一个 TouchList 实例，包含所有不在触摸的触摸点(即 Touch 实例对象)
 *    - touchend: 用户移动触摸点时触发，它的 target 属性与 touchstart 事件一致，如果触摸的半径，角度，力度发生变化，也会触发该事件。
 *    - touchcancel: 触摸点取消时触发，比如在触摸区域跳出一个模态窗口，触摸点离开了文档区域，用户的触摸点太多，超过了支持的上限。
 */