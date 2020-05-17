
// 获取非行间样式
// Chrome: getComputedStyle 参数1：当前对象，参数2：伪类选择器，通常不会使用，用false代替
getComputedStyle(obj, false)

//IE: currentStyle 语法: obj.current[attr]
obj.currentStyle[attr]


var eventshiv = {
    // event 兼容
    getEvent: function (event) {
        return event ? event : window.event
    }
}

// type 兼容
var getType = function (event) {
    return event.type
}

// target 兼容: 寻找事件源(例如点击事件 ，则获取的是点击位置标签名(大写))
var getTarget = function (event) {
    return event.target ? event.target : event.srcElement
}

// 添加事件句柄
var addHandle = function (elem, type, listener) {
    if (elem.addEventListener) {
        elem.addEventListener(type, listener, false)
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, listener)
    } else {
        elem['on' + type] = listener
    }
}

// 移除事件句柄
var removeHandle = function (elem, type, listener) {
    if (elem.addEventListener) {
        elem.addEventListener(type, listener, false)
    } else if (elem.detachEvent) {
        elem.detachEvent('on' + type, listener)
    } else {
        elem['on' + type] = null
    }
}

// 添加事件代理
var addAgent = function (elem, type, listener) {
    elem.addEventListener(type, function (e) {
        if (e.target.matches(agent)) {
            listener.call(e.target, e)
        }
    })
}

// 取消默认行为
var preventDefault = function (event) {
    if (event.preventDefault) {
        event.preventDefault()
    } else {
        // 兼容IE
        event.returnValue = false
    }
}

// 阻止事件冒泡
var stopPropagation = function(event) {
    if (event.stopPropagation) {
        event.stopPropagation()
    } else {
        // 兼容IE
        event.cancelBubble = true
    }
}

// 创建ajax对象
var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft, XMLHTTP")