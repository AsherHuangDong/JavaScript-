
//第一步：创建异步对象
var xhr = new XMLHttpRequest();

//第二步：设置请求行open(请求方式，请求URL)；

// get请求如果有参数就需要在URL后面拼接参数
// post如果有参数，就在请求体中传递 xhr.open('post',"validate.php?username="+name)

xhr.open('post', 'validate.php');

//第三步：设置请求头(GET方式忽略此步骤)：setRequestHeader()

// 1.get不需要设置
// 2.post需要设置请求头：Content-Type:application/x-www-form-urlencoded

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//第四步：设置请求体 send()

// 1.get的参数在url拼接了，所以不需要在这个函数中设置
// 2.post的参数在这个函数中设置(如果有参数)

xhr.send(null)
xhr.send("username=" + name);

//第五步：让异步对象就收服务器的相应数据

xhr.onreadystatechange = function () {
  if (xhr.status == 200 && xhr.readyState == 4) {
    console.log(xhr.responseText);
  }
}