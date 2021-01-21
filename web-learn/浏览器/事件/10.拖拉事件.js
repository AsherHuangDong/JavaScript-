/**
 * 1. 拖拉事件种类
 *      拖拉指的是，用户在某个对象上按下鼠标键不放，拖动它到另一个位置，然后释放鼠标键，将该对象放在那个位置
 *    拖拉对象有好几种，包括 元素节点，图片，链接，选中的文字等。在网页中，除了元素节点默认不可以拖拉，其他
 *    都可以直接拖拉。如果想让元素节点可拖拉，可以将该节点的 draggable 属性设为 true.
 *    例: <div draggable="true">可拖拉</div>
 *    对于那些可以直接拖拉的，如果不想让其拖拉，则需将该元素的 draggable 设为 false
 *      注意：一旦某个元素节点的 draggable 属性为 true，就无法在用鼠标选中该节点内部的文字或子节点了
 *      当元素或选中的文本被拖拉时，就会持续触发拖拉事件，包括以下一些事件。
 *      - drag: 拖拉过程中，在被拖拉的节点上持续触发(相隔几百毫秒)
 *      - dragstart: 用户开始拖拉时，在被拖拉的节点上触发，该事件的 target 属性是被拖拉的节点。
 *          通常应该在这个事件的监听函数中，指定拖拉的数据。
 *      - dragend: 拖拉结束时(释放鼠标按键或按下Esc键)在被拖拉的节点上触发，该事件的 target 属性是被拖拉的节点。
 *          它与 dragstart 事件，在同一个节点上触发。不管拖拉是否跨窗口，或者中途被取消，dragend 事件总是会触发。
 *      - dragenter: 拖拉进入当前节点时，在当前节点上触发一次，该事件 target 属性是当前节点。通常应该在这个事件的监听函数中，
 *          指定是否允许在当前节点放下(drop)拖拉数据。如果当前节点没有该事件的监听函数，或者监听函数不执行任何操作，就意味着不允许在当前节点
 *          放下数据。在视觉上显示拖拉进入当前节点，也是在这个事件的监听函数中设置。
 *      - dragover: 拖拉到当前节点上方时，在当前节点上持续触发。该事件的 target 属性时当前节点，该事件与 dragenter 事件的区别是，
 *          dragenter 事件在进入该节点时触发，然后只要没有离开这个节点，dragover 事件会持续触发
 *      - dragleave: 拖拉操作离开当前节点范围时，在当前节点上触发，该事件 target 属性是当前节点。如果要在视觉上显示拖拉离开操作当前节点，
 *          就在这个事件的监听函数中设置。
 *      - drop: 被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发。
 *          注意：如果当前节点不允许 drop，即使在该节点上方松开鼠标键，也不会触发该事件。如果用户按下 ESC 键，取消这个操作，
 *          也不会触发该事件。该事件的监听函数负责取出拖拉数据，并进行相关处理。
 *      - 注意:
 *        - 拖拉事件过程中只触发这些拖拉事件，尽管鼠标在移动，但是鼠标事件不会触发。
 *        - 将文件从操作系统拖进浏览器，不会触发 dragstart 和 dragend 事件。
 *        - dragenter 和 dragover 事件的监听函数，用来取出拖拉的数据(即允许放下被托拉的元素)。
 *          由于网页的大部分区域不适合作为放下拖拉元素的目标节点，所以这两个事件的默认设置为当前节点不允许接受被拖拉元素。
 *          如果想在目标节点放下的数据，首先必须组织这两个事件的默认行为。
 *          <div ondragover="return false"></div>
 *          <div ondragover="event.preventDefault()"></div>
 *          以上代码中，如果不取消拖拉事件或者阻止默认行为，就不能在 div 节点上放下被拖拉节点。   
 */

/**
 * 2. DragEvent 接口
 *      拖拉事件都继承了 DragEvent 接口，这个接口又继承了 MouseEvent 接口 和 Event 接口
 *    浏览器原生提供了一个 DragEvent() 构造函数，用来生成拖拉事件的实例对象。
 *    new DragEvent(type, options)
 *    - type: 事件类型
 *    - options: 可配置对象，除了接受 MouseEvent 接口 和 Event 接口 的配置属性，还可以设置
 *        dataTransfer 属性,该属性值要么是 null，要么是 DataTransfer 接口的实例
 * 
 */

/**
 * 3. DataTransfer 接口概述
 *      所有拖拉事件的实例都有一个 DragEvent.dataTransfer 属性，用来读写需要传递的数据。
 *    这个属性值是一个 DataTransfer 接口的实例，浏览器提供一个 DataTransfer() 构造函数，
 *    来生成 DataTransfer 实例对象
 *    var dataTransfer = new DataTransfer()，该构造函数不接收参数.
 *      拖拉数据分为两个方面：一般来说，如果拖拉的是一段文本，则数据默认就是那段文本，如果是一个链接，则是一个url
 *        - 数据种类(又称格式): 是一个 MIME 字符串(比如 text/plain, image/jpeg)  
 *        - 数据的值。 是一个字符串
 *      拖拉事件开始时，开发者可以提供数据类型和数据值。拖拉过程中，开发者通过 dragenter 和 dragover 事件的监听函数，
 *    检查数据类型，已确定是否允许放下被拖拉的对象。例如，如果只允许放下链接，则检查拖拉的数据类型是否为 text/uri-list。
 *    发生 drop 事件时，监听函数取出拖拉的数据，对其进行处理
 *    
 */

/**
 * 4. DataTransfer 的实例属性
 *    4.1 DataTransfer.dropEffect
 *        dropEffect 属性用来设置放下被拖拉节点时的效果，会影响到拖拉经过相关区域时鼠标的形状。
 *    有以下值：除了设置以下值，设置其他的值都无效。
 *       - copy: 复制被拖拉的节点
 *       - move: 移动被拖拉的节点
 *       - link: 创建指向被拖拉的节点的链接
 *       - none: 无法放下被拖拉的节点
 *    例：一下代码，被拖拉元素一旦 drop，接受的区域会复制该节点。
 *       target.addEventListener('dragover', function(e) {
 *          e.preventDefault()
 *          e.stopPropagation()
 *          e.dataTransfer.dropEffect = 'copy'
 *       })
 *    dropEffect 属性一般在 dragenter 和 dragover 事件的监听函数中设置，对于 dragstart, drag, dragleave 这三个事件
 *    该属性不起作用。因为该属性只对接受被拖拉的节点的区域有效，对被拖拉的节点本身是无效的。进入目标区域后，拖拉行为会初始化成设定的效果。
 *    
 *    4.2 DataTransfer.effectAllowed
 *           effectAllowed 属性设置本次拖拉中允许的效果。如果某种效果是不被允许的，用户就无法在目标节点中达成这种效果。
 *        有以下值:
 *          - copy: 复制被拖拉的节点
 *          - move: 移动被拖拉的节点
 *          - link: 创建指向被拖拉节点的链接
 *          - copyLink: 允许 copy 或 link
 *          - copyMove: 允许 copy 或 move
 *          - linkMove: 允许 link 或 move
 *          - all: 允许所以效果
 *          - none: 无法放下被拖拉的节点
 *          - uninitialized: 默认值，等同于 all
 *            该属性 dropEffect 属性 是同一个事件的两个方面, 往往两者是配合使用
 *          - effectAllowed 属性是设置被托拉节点允许的效果
 *          - dropEffect 属性是设置接受拖拉的区域的效果
 *            注意：该属性只有在 dropstart 事件的监听函数中设置，其他事件的监听函数中设置无效
 *            例: 只要 dropEffect 属性 和 effectAllowed 属性之中有一个位 none，就无法在目标节点上完成 drop 操作
 *               source.addEventListener('dragstart', function(e) {
 *                  e.dataTransfer.effectAllowed = 'move'
 *               })
 *               target.addEventListener('dragover', function(e) {
 *                  e.dataTransfer.dropEffect = 'move'
 *               })
 *  
 *      4.3 DataTransfer.files
 *            files 属性是一个 FileList 对象，包含一组本地文件，可以用来在拖拉操作中传送。
 *          如果本次拖拉不涉及文件，则该属性为空的 FileList 对象。
 *  
 *      4.4 DataTransfer.types
 *            types 属性是一个只读的数组，每个成员是一个字符串，里面是拖拉的数据格式(通常是 MIME 值)。
 *          比如，如果拖拉的是文字，对应的成员就是 text/plain
 *      
 *      4.5 DataTransfer.items
 *            items 属性返回一个类数组的只读对象，每个成员就是本次拖拉的一个对象。如果本次拖拉不包含对象，则返回空对象。
 *          DataTransferItemList 实例有以下属性和方法：
 *            - length: 返回成员数量
 *            - add(data, type): 增加一个指定内容和类型的字符串作为成员
 *            - add(file): add 方法的另一种用法，增加一个文件作为成员
 *            - remove(index): 移除指定位置的成员
 *            - clear(): 移除所有成员
 *          DataTransferItem 实例具有以下属性和方法:
 *            - kind: 返回成员的种类(string 或 file)
 *            - type: 返回成员的类型(通常是 MIME 值)
 *            - getAsFile(): 如果被拖拉的是文件，返回该文件，否则返回 null
 *            - getAsString(callback): 如果被拖拉的是字符串，将该字符传入指定的回调函数处理。该方法是异步的，所以需要传入回调函数。 
 */

/**
 * 5. DataTransfer 的实例方法
 *    5.1 DataTransfer.setData()
 *        setData() 方法用来设置拖拉事件所带的数据。该方法没有返回值, 例：
 *      event.dataTransfer.setData('text/plain', 'Text to drag')
 *    
 *    5.2 DataTransfer.getData()
 *        getData() 方法接受一个字符串作为参数，返回事件所带的指定类型的数据(通常是 setData 方法添加的数据)
 *      如果指定类型的数据不存在，则返回空字符串。通常只有 drop 事件触发后，才能取出数据。
 *    
 *    5.3 DataTransfer.clearData()
 *        clearData() 方法接受一个字符串作为参数，删除事件所带的指定类型的数据。如果没有指定类型，则删除所有数据。
 *      如果指定类型不存在，则调用该方法不会产生任何效果。
 *        注意: 
 *          - 该方法不会移除拖拉的文件，因此调用该方法后，DataTransfer.types 属性可能依然会返回 Files 类型(如果存在文件拖拉)。  
 *          - 该方法只能在 dragstart 事件的监听函数中使用，因为这是拖拉操作的数据唯一可写的时机。
 *    
 *    5.4 DataTransfer.setDragImage()
 *          拖动过程中,浏览器会显示一张图片跟随鼠标一起移动，表示被拖动的节点。这张图片是自动创造的，通常显示为被拖动节点的外观，不需要自己手动设置。
 *        setDragImage() 方法可以自定义这张图片。他接受三个参数。
 *          - img 节点 或 canvas 几点，如果省略 或为 null，则使用被拖动的节点的外观
 *          - X坐标: 数值，鼠标相对于该图片的左上角的横坐标
 *          - Y坐标: 数值，鼠标相对于该图片的左上角的纵坐标
 *      
 */