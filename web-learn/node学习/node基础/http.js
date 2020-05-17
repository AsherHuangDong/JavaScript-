

/** 
 * 使用node构建一个简单的服务器
 * 方式: 使用 http 模块
*/

// 1.加载 http 核心模块
const http = require('http');

// 2.使用 http.createServer() 方法创建一个 web 服务器
//    返回一个server实例 
const server = http.createServer();

// 3.注册 request 请求事件，处理客户端请求,回调函数参数:处理请求和响应请求
server.on('request', function(request,response){
    console.log('收到客户端请求了')
})

// 4.绑定端口号，启动服务器
server.listen(3000, function(){
    console.log('服务器启动成功, 可以在 http://127.0.0.1:3000/ 进行访问');
})