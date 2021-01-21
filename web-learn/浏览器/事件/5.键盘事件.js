/**
 * 1. 键盘事件种类:
 *    1.1 keydown: 按下键盘时触发
 *    1.2 keypress: 按下有值的键时触发，即按下 Ctrl, Alt, Shift, Meta 这样无值的键，这个事件不会触发。
 *    1.3 keyup: 松开键盘时触发
 *    注意：如果用户一直按键不松开，就会连续触发键盘事件，触发顺序如下：
 *       keydown -> keypress -> keydown -> keypress .... (重复前面过程) -> keyup(直到松开触发)
 */

/**
 * 2. KeyboardEvent 接口概述
 *     KeyboardEvent 接口用来描述用户与键盘的互动。这个接口继承了 Event 接口
 *     - 生成键盘实例： new KeyboardEvent(type, options) type: 事件类型，options: 事件配置对象
 *     - options属性除了 Event 提供的属性外，还有以下属性:
 *         - key: 字符串，当前按下的键，默认为空字符串。
 *         - code: 字符串，表示当前按下的键的字符串形式，默认为空字符串。
 *         - location: 整数，当前按下的键的位置，默认为 0
 *         - ctrlKey: 布尔值，是否按下 Ctrl 键，默认为 false
 *         - shiftKey: 布尔值，是否按下 Shift 键，默认为 false
 *         - metaKey: 布尔值，是否按下 Meta 键，默认为 false
 *         - altKey: 布尔值，是否按下 Alt 键，默认为 false
 *         - repeat: 布尔值，是否重复按键，默认为 false
 */

/**
 * 3. KeyboardEvent 实例属性
 *    3.1 KeyboardEvent.altKey, KeyboardEvent.ctrlKey, KeyboardEvent.metaKey, KeyboardEvent.shiftKey 
 *       都为只读属性
 *       - ctrlKey: 布尔值，是否按下 Ctrl 键
 *       - shiftKey: 布尔值，是否按下 Shift 键
 *       - metaKey: 布尔值，是否按下 Meta 键(windows 系统的是 Windows键，Mac 系统是 command 键)
 *       - altKey: 布尔值，是否按下 Alt 键
 *    3.2 KeyboardEvent.code 只读属性
 *          返回一个字符串，表示当前按下的键的字符串形式，下面是一些常用的字符串形式
 *          - 数字键 0 - 9: 返回 digit0 - digit9
 *          - 字母键 A - Z: 返回 KeyA - KayZ
 *          - 功能键 F1 - F12: 返回 F1 - F12
 *          - 方向键: 返回 ArrowDown, ArrowUp, ArrowLeft, ArrowRight
 *          - Alt 键: 返回 AltLeft 或 AltRight
 *          - Shift 键: 返回 ShiftLeft 或 ShiftRight
 *          - Ctrl 键: 返回 ControlLeft 或 ControlRight
 *    3.3 KeyboardEvent.key 只读
 *          返回一个字符串，表示按下的键名。
 *          - 如果按下的键时可打印字符，则返回可打印字符，比如 数字，字母
 *          - 如果按下的键时不可打印字符，则返回预定义的键值，比如 BackSpace, Tab, Enter, Shift, Control, 
 *            CapsLock, Esc, Spacebar, PageUp, PageDown, End, Home, Left, Right, Up, Down, PrintScreen,
 *            Insert, Del, Win, F1-F12, NumLock, Scroll 等
 *          - 如果同时按下一个控制键和一个符号键，则返回符号键的键名
 *            例：按下 Ctrl + a，则返回 a；按下 Shift + a，则返回 A
 *          - 如果无法识别键名，则返回 undefined
 *    3.4 KeyboardEvent.location 
 *          返回一个整数，表示按下的键处在键盘的哪一个区域。可以取以下值
 *            - 0: 处在键盘的主区域，或者无法判断处于哪一个区域
 *            - 1: 处于键盘的左侧，只适用于那些有连个位置的键 (如 Ctrl 和 Shift)
 *            - 2: 处于键盘的右侧，只适用于那些有连个位置的键 (如 Ctrl 和 Shift)
 *            - 3: 处于数字小键盘
 *    3.5 KeyboardEvent.repeat
 *          返回一个布尔值，表示该键是否被按着不放，以便判断是否重复这个键，即浏览器会持续触发keydown和keypress事件，直到用户松开手为止。
 */

/**
 * 4. KeyboardEvent 实例方法
 *    4.1 KeyboardEvent.getModifierState(key)
 *          返回一个布尔值，表示是否按下或激活指定的功能键，常用参数入下
 *          - ALt: Alt 键
 *          - Shift: Shift 键
 *          - Control: Ctrl 键
 *          - Meta: Meta 键
 *          - NumLock: 数字开关键
 *          - CapsLock: 大写锁定键
 */