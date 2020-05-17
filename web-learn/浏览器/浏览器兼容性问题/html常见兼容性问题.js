
/**
 * 1.IE6 对png格式的图片支持不好
 * 解决方法: 使用ps将图片保存为png8格式，或者引入脚本处理
 */

/**
 * 2.浏览器默认margin和padding不同
 * 解决方法: 设置 *{margin: 0; padding: 0;}
 */

/**
 * 3.IE6 双边距问题
 * 如果给块级元素设置了float: left 和 margin-left 会让margin-left的值为两倍
 * 解决方法: 加上 display: inline
 */

/**
 * 4.渐进式识别方式，从整体逐渐排除局部
 * ‘\9’: 将IE和其他浏览器分离开来
 * .b{
 *      background-color: red; //所有浏览器识别
 *      .background-color: red; //IE6,7,8浏览器识别
 *      +background-color: red; //IE6,7识别
 *      _background-colr: red; //IE6识别
 * }
 */

/**
 * 5.IE下可以通过常规方法获取属性值，也可以通过getAttribute()获取属性。在Firefox中只能通过getAttribute()获取
 * 解决方法: 统一使用getAttribute()
 */

/**
 * 6.Chrome浏览器设置的字体小于12px时会强制转换为12px
 * 解决办法: 加上 -webkit-text-size-adjust: none
 */

/**
 * 7.超链接访问之后 hover样式不见了，被点击后也不具有active和hover样式
 * 解决方式: 按照顺序写: a:link{} a:visible{} a:hover{} a:active{}
 */

/**
 * 8.上下margin重合的问题
 * margin-left 和 margin-right不会重合，margin-top 和 margin-bottom 会重合
 * 解决方法: 采用bfc解决,或者同时书写 margin-top 和 margin-bottom
 */

 /**
  * 9.怪异模式问题，如果漏写DTD声明，火狐还是会正常解析，IE会按照怪异模式解析。
  * 解决方法: 加上<!DOCTYPE html>即可
  */

