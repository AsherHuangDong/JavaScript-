/**
 * 1. 进度事件的种类
 *       进度事件用来描述资源加载的进度，主要由 AJAX 请求, <img>, <audio>, <video>, <style>, <link>
 *    等外部资源的加载触发，继承了 ProgressEvent 接口。主要包含以下事件
 *      - abort: 外部资源中止加载时(比如用户取消)触发。如果发生错误导致中止，不会触发该事件
 *      - error: 由于错误导致外部资源无法舰载时触发
 *      - load: 外部资源加载成功时触发
 *      - loadstart: 外部资源开始加载时触发
 *      - loadend: 外部资源停止加载时触发，发生顺序排在 error, abort, load 等事件的后面
 *      - progress: 外部资源加载过程中不断触发
 *      - timeout: 加载超时时触发
 *     注意：除了资源下载，文件上传也存在这些事件
 *     例：图片元素加载完成后，为图片添加一个 finished 的 class。加载失败，就把图片元素的样式设置为不显示
 *         image.addEventListener('load', function(event){
 *            image.classList.add('finished')
 *         })
 *         image.addEventListener('error', function(event){
 *            image.style.display = 'none'
 *         })
 *      注意：有时候，图片加载会在脚本执行之前就完成，尤其当脚本放置到网页底部的时候，
 *         因此有可能 load 和 error 事件的监听不会执行。所以，比较可靠的方法，使用 complete 属性先判断一下是否加载完成
 *           function loaded () { ... }
 *           if (image.complete) { loaded() } else { image.addEventListener('load', loaded) }
 *         complete: 布尔值，判断图片是否加载完成，由 DOM 节点提供
 *         由于 DOM 的元素节点没有提供是否加载错误的属性，因此 error 事件的监听函数最好放在  <img> 元素的 HTML 代码中
 *         这样才能保证加载错误百分百执行
 *            <img src="/wrong/src" onerror="this.style.display='none'" />
 *       建议：loadend 事件的监听函数，可以用来替代 abort 事件，load 事件，error 事件的监听函数，因为它总是在这些事件之后执行
 *        loadend 事件本身不提供进度结束的原因，但可以使用它来做所有加载结束场景都需要做的一些操作 
 *       error 事件有一个特殊性质，就是不会冒泡，所以子元素的 error 事件，不会出触发父元素的 error 是事件监听函数
 */

/**
 * 2. ProgressEvent 接口
 *      - ProgressEvent接口主要用来描述外部资源加载的进度，比如 AJAX 加载、<img>、<video>、<style>、<link>
 *        等外部资源加载。进度相关的事件都继承了这个接口。
 *      - 生成实例：new ProgressEvent(type, options)
 *      - 参数：type：事件类型，必须参数
 *             options：可配置对象，除了 Event 事件接口的配置属性，还有以下属性
 *               - lengthComputable: 布尔值，表示加载的总量是否可计算，默认为 false
 *               - loaded: 整数，表示已经加载的量，默认为 0
 *               - total: 整数，表示需要加载的总量，默认为 0
 *      - 注意：如果 lengthComputable 为 false，total 实际上就没有意义
 */