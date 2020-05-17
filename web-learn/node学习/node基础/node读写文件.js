/** 
 * 浏览器中的JavaScript没有读写文件的操作
 * node中的js可以读写文件
*/

// node 读写文件

// fs:file-system 引入文件系统模块
const fs = require('fs'); 

// 读文件:
//  参数: 1.文件路径(必须参数)
//       2.编码格式(非必须参数)
//       2.是一个回调函数(必须参数)
//          成功:error:null; data:数据对象  失败: error:错误对象;data:null

// 异步读取
fs.readFile(process.cwd()+"/node学习/node基础/hello.txt",'utf-8',function(err,data){
    //该数据为二进制或者16进制
    //可以通过tostring转化为可识别字符
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})
// 异步写文件
fs.writeFile("./node学习/node基础/ok.txt",'哈哈哈',function(err){
    console.log('文件写入成功');
});
//process.cwd():返回当前进程的工作目录
console.log(process.cwd());
// 同步读取
var data = fs.readFileSync(process.cwd()+"/node学习/node基础/hello.txt");
console.log(data.toString());