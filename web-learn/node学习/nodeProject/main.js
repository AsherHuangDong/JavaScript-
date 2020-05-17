
const http = require('http');
const fs = require('fs')

const server = http.createServer();

server.on('request', function (req, res) {
    let url = req.url;

    if (url === '/') {
        fs.readFile(process.cwd() + '/node学习/nodeProject/resource/index.html', function (err, data) {
            if (err) {
                //res.setHeader('Content-Type','text/plain','charset=utf-8')
                console.log('请求失败，请重试！');
            } else {
                res.setHeader('Content-Type', 'text/html', 'charset=utf-8');
                res.end(data.toString());
            }
        })
    } else if (url === '/me.png') {
        fs.readFile(process.cwd() + '/node学习/nodeProject/resource/me.png', function (err, data) {
            if (err) {
                console.log('加载失败，请重试！');
            } else {
                res.setHeader('Content-Type', 'image/png');
                res.end(data)
            }
        })
    }
})

server.listen(3002, function () {
    console.log('服务器已经启动，可以访问 http://127.0.0.1:3002/ 访问')
})