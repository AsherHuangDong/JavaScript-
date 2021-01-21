/**
 * 1. 资源事件
 *    1.1 beforeunload 事件: 发生在窗口，文档，各种资源卸载前触发。可以用来防止用户过失性删除资源行为。
 *          如果该事件对象的 returnValue 属性是一个非空字符串，浏览器就会弹出一个对话框，询问用户是否要卸载该资源。
 *        用户如果点击了取消则不会卸载该资源，浏览器可能不会显示开发者指定的字符串。
 *          注意：
 *              - 许多手机浏览器(比如 Safari)默认忽略这个事件，桌面浏览器也有办法忽略这个事件。所以，它可能根本不会生效，
 *          不能依赖它来关闭浏览器窗口，最好不要使用这个事件。
 *              - 一旦使用了该事件，浏览器就不会缓存当前网页，使用"回退"按钮将重新先服务器请求网页。
 *          
 *    1.2 unload 事件: 在窗口关闭或者 document 对象将要被卸载时触发。它的触发顺序排在 beforeunload，pagehide 后面。
 *        该事件发生时，文档处于一个特殊状态。所有资源依然存在，但是对用户来说不可见，UI 互动全部无效。这个事件是无法取消的，
 *        即使在监听函数中抛出错误，也不能停止文档的卸载。
 *          注意: 
 *              - 手机上，浏览器或系统可能会直接丢弃网页，这是该事件不会发生。 
 *              - 一旦使用了该事件，浏览器就不会缓存当前网页，使用"回退"按钮将重新先服务器请求网页。
 *          该事件可以使用 pagehide 事件代替。
 *          
 *    1.3 load 事件，error 事件, abort 事件, 三者都是进度事件
 *          load 事件: 页面或某个资源加载成功时触发。但如果页面或资源是从浏览器缓存加载，则不会触发。
 *            该事件可以使用 pageshow 事件代替。
 *          error 事件: 页面或某个资源加载失败时触发。
 *          abort 事件: 用户取消加载时触发
 */

/**
 * 2. session 历史事件
 *    默认情况下，浏览器会在当前会话缓存页面或资源，用户点击 "前进/回退" 按钮时，浏览器会从缓存中加载页面。
 *    2.1 pageshow 事件， pagehide 事件
 *        pageshow 事件: 事件在页面加载时触发，包括第一次加载和从缓存中加载两种情况。如果指定页面每次加载
 *          都要运行的代码，可以放在这个事件的监听函数中。第一次加载时，它的触发顺序在 load 事件后面。
 *          该事件有一个 persisted 属性，返回一个布尔值。
 *          页面第一次加载时，返回 false；
 *          页面从缓存中加载时，返回 true
 *        pagehide 事件: 当用户通过 "前进/后退" 按钮，离开当前页面时触发。它与 unload 事件的区别在于，
 *          unload 事件离开页面后页面将不会保存在缓存里，pagehide 离开页面后，页面将会保存在缓存里。
 *          pagehide 事件也有一个 persisited 属性，将这个属性设置为 true，就表示页面要保存在缓存中，
 *          如果设置为 false，表示网页在保存在缓存中，如果这时设置了 unload 事件监听函数，该函数将在 pagehide
 *          事件后立即执行。
 *        注意:
 *          - 如果页面包含 <frame> 或 <iframe> 元素，则 <frame> 或 <iframe> 页面的 pageshow事件 和 pagehide事件，都会在主页面之前触发。
 *          - 这两个事件只在浏览器的 history 对象发生变化时触发，与网页是否可见没有关系。
 *        
 *    2.2 popstate 事件: 在浏览器的 history 对象的当前记录发生显式切换时触发。
 *          注意: 调用 history.pushState() 或 history.replaceState()，并不会触发 popState 事件。
 *          以下情况触发: 用户点击 "前进/后退" 按钮，或者在脚本中调用了 history.back(), history.forward(), history.go() 时触发。
 *          该事件对象有一个 state 属性，保存 history.pushState 方法 和 history.replaceState() 方法为当前记录添加的 state 对象。
 *    2.3 hashchange 事件: 是在 URL 的 hash 部分(即 # 号后面的部分，包括 #) 发生变化时触发。该事件一般在 window 对象上监听。
 *          该事件实例具有两个特有属性: oldURL 属性 和 newURL 属性，分别表示变化前后的完整 URL。  
 *          window.addEventListener('hashchange', function(e) {
 *            console.log(e.oldURL, e.newURL)
 *          })
 */

/**
 * 3. 网页状态事件
 *    3.1 DOMContentLoaded 事件: 网页下载并解析完成以后，浏览器会在 document 对象上触发该事件。
 *          这时，仅仅完成了网页的解析(整个页面的 DOM 生成了)，所有外部资源可能还没有下载结束。
 *          该事件早于 load 事件触发。
 *          注意：网页的 JavaScript 脚本是同步执行的，脚本一旦堵塞，将推迟触发 DOMContentLoaded 事件。
 *    3.2 readystatechange 事件: 当 Document 对象 和 XMLHTTPRequest 对象 的 readyState 属性发生变化时触发。
 *          document.readyState 有三个值: 
 *          - loading: 网页正在加载
 *          - interactive: 网页已解析完成，但外部资源仍然处于加载状态
 *          - complete: 网页和所有外部资源已经结束加载，load 事件即将触发
 *          该事件可以看作 DOMContentLoaded 事件的另一种实现方法
 */

/**
 * 4. 窗口事件
 *    4.1 scroll 事件: 在文档或文档元素滚动时触发，主要出现在用户拖动滚动条。该事件也会持续触发
 *          推荐使用 requestAnimationFrame 或 setTimeout 或 setInterval 控制该事件的触发频率，
 *        然后可以结合 customEvent 抛出一个新事件。
 *    4.2 resize 事件: 在改变浏览器窗口大小时触发，主要发生在 window 对象上面。该事件也会持续触发。
 *    4.3 fullscreenchange 事件, fullscreenerror 事件
 *        fullscreenchange 事件: 在进入或退出全屏状态时触发，该事件发生在 document 对象上面
 *        fullscreenerror 事件: 在浏览器无法切换到全屏状态时触发
 */

/**
 * 5. 剪贴板事件:
 *    以下三个事件属于剪贴板操作的相关事件:
 *    - cut: 将选中的内容从文档中移除，加入剪贴板时触发
 *    - copy: 进行复制动作时触发
 *    - paste: 剪贴板内容粘贴到文档后触发
 *    这三个事件都是 ClipboardEvent 接口的实例。ClipboardEvent 有一个实例属性 clipboardData，是一个 DataTransfer 对象
 *    存放剪贴的数据。
 */

/**
 * 6. 焦点事件: 发生在元素节点和 document 对象上面，与获得或失去焦点相关。它主要包括四个事件。
 *     - focus: 元素节点获得焦点后触发，该事件不会冒泡
 *     - blur: 元素节点失去焦点后触发，该事件不会冒泡
 *     - focusin: 元素节点将要获得焦点时触发，发生在 focus 事件之前。该事件会冒泡
 *     - focuout: 元素节点将要失去焦点时触发，发生在 blur 事件之前。该事件会冒泡
 *    以上四个事件都继承了 FocusEvent 接口。FocusEvent 实例具有以下属性：
 *     - target: 事件的目标节点
 *     - relatedTarget: 对于 focusin 事件，返回失去焦点的节点；
 *         对于 focusout 事件，返回将要获得焦点的节点；对于 focus 或 blur 事件，返回 null
 *     注意：由于 focus 和 blur 事件都不会冒泡，只能在捕获阶段触发，所以 addEventListener 方法的第三个参数需要设置为 true。
 */

/**
 * 7. CustomEvent 接口: 用于生成自定义的事件实例。浏览器 CustomEvent(type, options) 构造函数，生成 CustomEvent实例
 *    该接口继承了 Event 接口，除了拥有 Event 接口属性，还有自己的属性
 *    - detail: 表示事件的附带数据，默认为 null
 */