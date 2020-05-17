
/**
 * -moz-:火狐等使用Mozilla浏览器引擎的浏览器
 * -webkit:Chrome，Safari等使用 Webkit 引擎的浏览器
 * -o-: Opera浏览器 (早期是Presto内核，后变为 Webkit内核)
 * -ms-: IE浏览器(Trident 引擎)
 * -khtml-: Konqueror浏览器，KHTML内核
 */


/** 
 * 1.不同浏览器的标签的默认的外边距和内边距不同
 * 问题: 写几个标签，不加样式控制的情况下，各自的 margin 和 padding 差异较大。
 * 碰到频率：100%
 * 解决方法: css 里 *{margin: 0; padding: 0;}
 */ 


/**
 * 2.快属性标签 float后，又有横行的margin情况下，在 IE6显示margin比设置的大
 * 问题症状: 常见的症状是IE6中后面的一块被顶到下一行。
 * 碰到频率：90%
 * 解决方案: 在float的标签样式控制中加入 display: inline; 将其转化为行内样式
 */

/**
 * 3.设置较小高度的标签(一般小于10px), 在 IE6，IE7，遨游中高度超出自己设置的高度
 * 问题症状: IE6,7和遨游里这个标签的高度不受控制，超出自己设置的高度。
 * 碰到频率：60%
 * 解决方案：给超出高度的标签设置 overflow: hidden; 或者设置行高 line-height小于设置的高度
 * 问题出现原因: IE8 之前的浏览器都会给标签一个最小的默认行高，即使标签时空的，还是会有默认行高
 */

/**
 * 4.行内属性标签， 设置display:block 后采用float布局，又有横向 margin 的情况，IE6间距bug
 * 问题症状: IE6里的间距比超过设置的间距
 * 碰到几率：20%
 * 解决方案：在 display: block;后面加入display:inline;display:table
 * 原因: 行内属性标签，为了设置宽高，我们需要设置display:block(出了input标签)。再用float布局并有
 * 横向的margin后，在IE6下，它就具有了快属性float后的横向margin的bug。不过它本身是行内属性标签，我们加上
 * display:inline的或，它的宽高就不可设了，因此我们在 display:inline后面加入 display:table
 */

/**
 * 5.图片默认有间距
 * 问题症状：几个 img标签 放在一起的时候，有些浏览器会有默认间距，加了通配符 *{margin: 0; padding: 0;}也没有作用
 * 碰到几率: 20%
 * 解决方案: 使用float属性为img布局
 * 原因: 因为img标签是行内属性标签，所以只要不超出容器高度，img标签都会排在一行里，但是部分浏览器的img标签之间会有
 * 间距，去掉间距采用float
 */

/**
 * 6.标签最低高度设置 min-height 不兼容
 * 问题症状: 因为min-height本身就是一个不兼容css属性，所以设置 min-height 时不能很好的被各个浏览器兼容
 * 碰到几率：5%
 * 解决方案: 如果我们要设置一个标签的最小高度为 200px, 需要进行的设置为: 
 * {min-height:200px; height: auto !important; height: 200px; overflow: visible}
 * 备注: 在 B/S 系统开发前端时，我们有时会有这样的需求。当内容小于一个值(300px)时，容器的高度为300px
 * 当容器大于这个值时，容器高度会被撑高，而不是出现滚动条。这时我们就会面临这个兼容性问题
 */

/**
 * 7.透明度的兼容css设置:
 * .transparent_class{
 *      filter: alpha(opacity = 50);
 *      -moz-opacity: 0.5;
 *      -khtml-opacity: 0.5;
 *      opacity: 0.5;
 * }
 * 内置hacker：
 * IE6 认识的 hacker是 下划线 '_'和星号 ‘*’
 * IE7 认识的 hacker是星号 '*'
 * 所有IE和Firefox识别的hacker是 "\9"
 * IE8及以上识别的 hacker 是 "\0"
 * 例: 
 * .box {color:red\9;}IE识别,将IE浏览器从其他浏览器中分离出来
 * .box {color:red\0;}IE8及以上识别
 * .box {color:red\9\0;}IE8-10识别
 * 
 * 外置hacker:
 * IE7识别的 hacker "*+"
 * IE6识别的 hacker ”*“
 * 例:
 * *+html .main {color:red}//IE7
 * *html .main {color:blue}//IE6
 * 
 * 注意事项:
 * 1.注意hacker的顺序，hacker 尽量写在通用样式的后面，否则hack会被后面的样式覆盖
 * 例:{color: red; *color: yellow; _color: blue}
 * 2.IE6不识别 子选择器(">")
 */

/**
 * 8.IE6双边距问题：在IE6中设置了float属性，同时又设置了margin，就会出现双边距问题
 * 解决方案: 设置 display: inline;
 */

/**
 * 9.当标签的高度小于10px, 在IE6,IE7中会超过自己设置的高度
 * 解决方案: 超出高度设置overflow: hidden 或者设置line-height的值小于设置的高度
 */

/**
 * 10.img默认间距
 * 解决方案: 使用float 为img布局
 */

/**
 * 11.IE9以下浏览器不能使用opacity
 * 解决方案：{opacity: 0.5; filter: alpha(opacity = 50); 
 *  filter: progid:DXImageTransform.Microsoft.Alpha(style = 0; opacity = 50)}
 */

/**
 * 12.边距重叠问题:当两个元素都设置了margin并处于同一个bfc时，margin取最大值，舍弃最小值
 * 解决方案：给其中一个元素增加一个父级元素，并设置父级元素为一个单独的bfc
 */

/**
 * 13.cursor:hand显示手型 在Safari，Firefox上不支持
 * 解决方案：统一采用 cursor: pointer
 */

/**
 * 14.两个块级父元素，父元素设置了overflow: auto;子元素设置了 position: relative;且高度大于父元素
 * 在IE6，IE7中会被隐藏而不是溢出。
 * 解决方案：父元素设置position: relative
 */

/**
 * 15.IE6背景闪烁问题
 * 问题: 链接,按钮用CSSsprites作为背景，在IE6下会有背景图闪烁的现象。
 * 原因: IE6没有将背景图缓存，每次触发 hover 的时候 都会被重新加载。
 * 解决方案：可以使用 JavaScript设置IE6缓存这些图片
 * document.execCommand("BackgroundImageCache",false,true)
 */

/**
 * 16.IE6列表和日期错位的问题
 * 解决方案: 日期 span标签 放在标题 a标签 之前即可
 */

/**
 * 17.解决IE6不支持min-height问题
 * {
 *      min-height: 200px;
 *      _height: 200px;
 * }
 */

/**
 * 18.让 IE7 和 IE8支持 background-size属性
 * 问题: 由于background-size是css3新增的属性，因此IE低版本不支持，可以使用
 * background-size polyfill这个文件让IE7，IE8支持 background-size属性。
 * 其原理是创建一个 img元素插入到容器中，并重新计算宽度，高度，left，top等值
 * 模拟 background-size 的效果。
 */

/**
 * 19.IE6-7 line-height失效问题
 * 问题: 在IE中 img与文字一起使用时，line-height 不起作用
 * 解决方案: 都设置成float
 */

/**
 * 20.td自动换行问题
 * 问题: table宽度固定，td自动换行。
 * 解决方案: 设置table为 table-layout: fixed; td为 word-wrap: break-word
 */

/**
 * 21.让层显示在flash之上
 * 解决方案: 把flash设置透明即可
 * 例:
 * <param name="wmode" value="transparent">
 * <param name="wmode" value="opaque">
 */