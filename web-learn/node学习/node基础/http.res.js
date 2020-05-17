
const http = require('http')

/** 
 * request: 请求事件处理函数，需要接受两个参数：
 *         1.request 请求对象:
 *            用于获取客户端请求信息
 *         2.response 响应对象
 *            用于给用户发送响应信息
*/

const server = http.createServer();

server.on('request', function(request,response){
    console.log("收到客户端的请求了,请求路劲是："+ request.url);

    // 响应内容只能是二进制 或者 字符串
    /** 
     * response 对象的write方法可以给客户端发送响应数据
     * write可以使用多次。但是最后一定要用 end 来结束响应，否则客户端会一直等待
    */
    // 很少使用
    // response.write('hello')
    // response.write('node.js')
    // 发送信息 并结束
    //response.end('hello nodejs');

    let url = request.url;
    if(url === '/'){
        response.end('index page');
    }else if(url === '/login'){
        response.end('login page')
    }else{
        response.end('404 not found.');
    }

})

server.listen(3001,function(){
    console.log("服务器启动了，可以通过 http://127.0.0.1:3001/ 进行访问")
})