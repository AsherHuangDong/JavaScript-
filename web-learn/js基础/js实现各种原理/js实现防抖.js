//防抖
function Fanndou(func,wait){
    let timer = null;
    return function(){
        var _this = this;
        var args = arguments;

        //如果在wait秒内还有定时任务,就清除定时任务
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(()=>{
            func.apply(_this,args);
        },wait);
    }
}

function fn(){
    console.log('aaaaaaa');
}

setInterval(Fanndou(fn,1000),1000);
