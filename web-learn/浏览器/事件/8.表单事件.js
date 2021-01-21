/**
 * 1. 表单事件种类
 *    1.1 input 事件: 当 <input>, <select>, <textarea> 的值发生变化时触发。
 *        contenteditable 属性的元素，值发生变化，也会触发 input 事件
 *        特征：会连续触发，比如用户没按下一次按键，就会触发一次 input 事件。
 *        input 事件继承了 InputEvent 接口。
 *        change 事件 与 input 事件比较
 *          input 事件在元素的值发生变化后立即调用。因此，如果又连续变化，input事件会触发多次
 *          change 事件在元素失去焦点时发生，此时内容可能已经变化多次。change 事件只会在失去焦点时触发一次
 *    1.2 select 事件: 当在 <input>, <textarea> 里面选中文本时触发
 *    1.3 change 事件: 当 <input>, <select>, <textarea> 的值发生变化时触发。不会连续触发，
 *          只有当全部修改完成时才会触发，input 事件必然伴随 change 事件。基本在以下情况触发：
 *          - 激活单选框(radio)或复选框(checkbox)时触发
 *          - 用户提交时触发。例如，从下拉列表(select)完成选择，在日期或文件输入框完成选择
 *          - 当<input>或<textarea>元素的值发生改变并且失去焦点时触发
 *          对于 <select> 元素来说 input事件和change事件基本上是等价的
 *     1.4 invalid 事件(校验事件): 用户提交表单时，如果表单元素的值不满足校验条件，就会触发 invalid 事件。
 *     1.5 reset 事件，submit 事件: 发生在表单对象 <form> 上，而不是发生在表单的成员上
 *         - reset 事件: 当表单重置时触发
 *         - submit 事件: 当表单数据向服务器提交时触发。
 *             注意：submit 事件的发生对象是 <form> 元素，而不是 <button> 元素，因为提交的是表单，而不是按钮
 *         
 */

/**
 * 2. InputEvent 接口
 *      主要用来描述 input 事件的实例。该接口继承了 Event 接口，还定义了一些自己的实例属性和实例方法。
 *    浏览器提供 InputEvent() 构造函数，生成实例对象： new InputEvent(type, options)
 *      - 参数：type: 事件名称，字符串类型，options：可配置对象
 *        - options 属性除了 Event 的属性之外，还有以下属性：
 *          - inputType: 字符串，表示发生变更的类型
 *          - data: 字符串，表示插入的字符串。如果没有插入的字符串，则返回 null 或 空字符串
 *          - dataTransfer: 返回一个 dataTransfer 对象实例，该属性通常只在输入框接受富文本输入时有效。
 * 3. InputEvent 实例属性: 主要就是 options 里的属性，而且都是只读属性
 *      - data: 返回一个字符串，表示变动的内容
 *      - inputType: 返回一个字符串，表示字符串发生变更的类型
 *        - 手动插入文本: insertText
 *        - 粘贴插入文本: insertFromPaste
 *        - 向后删除: deleteContentBackward
 *        - 向前删除: deleteContentForward
 *      - dataTransfer: 返回一个 dataTransfer 实例。该属性只在文本框接受粘贴(insertFormPaste)内容或拖拽(insertFromDrop)内容时才有效
 */