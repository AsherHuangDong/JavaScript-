function jieLiu(func,wait){
    //上一次执行的时间戳
    var lastTime = null;
    var timer = null;

    return function(){
        //目前的时间戳
        var nowTime = new Date().getTime();
        var _this = this;
        var args = arguments;

        if(!lastTime){
            lastTime = new Date().getTime();
            func.apply(_this,args);
        }else if(nowTime - lastTime < wait){
            if(timer){
                clearTimeout(timer);
                timer = null;
            }

            timer = setTimeout(()=>{
                console.log('aaaa')
                lastTime = new Date().getTime();
                func.apply(_this,args)
            },wait);
        }else{
            lastTime = new Date().getTime();
            func.apply(_this,args);
        }
    }
}

function fn(){
    console.log('this is name....');
}

let test = setInterval(jieLiu(fn,1000),10);
//clearTimeout(test);