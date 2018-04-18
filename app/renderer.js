// $(this) file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in $(this) process.
//var config = require('./js/config.js');
var remote = require('electron').remote;
window.$ = window.jQuery = require('jquery');
var ipc=require('electron').ipcRenderer;
var view =remote.getCurrentWindow();
//var mainWindow=remote.BrowserWindow;
//退出程序
function htmlready(){
    var winh=$('body').height()
    $('body').css({'height':winh})
}

//$('#left').load("./left.html");
$('#gb').click(
    ()=>{
    var app =remote.app;
    //alert('sdsd');
    app.quit()
    }
);
//窗口最大化
$('#max').click(
    ()=>{
        if (view.isMaximized()) {
            view.unmaximize()
        } else {
            view.maximize()
        }
    }
)
//串口最小化
$("#min").click(
    ()=>{
        view.minimize();
    })
//菜单切换功能
var caidan ={
    wj:['打开','另存为','111','222'],
    bj:['大时代','说到底','对我的','工人房'],
    sz:['大青蛙','打的','阿萨德','湿哒哒'],
    bz:['三大球','看能否','自然会给您','三开两年多']
    }
var fdcd =$('#fdcd');
var headerbj=$('#header').css('backgroundColor');
var headercolor=$('#header li').css('color');
var headerh=$('#header').css('height')
function getzicandan(id){
    var str='';
    //alert(caidan.wj.length);
    for (let i = 0; i < caidan[id].length; i++) {
        str +='<li>'+caidan[id][i]+'</li>';
    }
    fdcd.html(str);
    //var lileft=$(this).offset().left;
    fdcd.css({'top':headerh,'display':''});
    $('#zhebi').css({'backgroundColor':"rgb(124, 125, 129)",'z-index':'100','top':headerh});
    //alert(headerbottom+'ss'+headerleft);
}
function zhebi(){
    $('#zhebi').css({'backgroundColor':"rgb(124, 125, 129)",'z-index':'100','top':headerh});
}
function loadhtml(url){
    $('#loadhtml').html('');
    $('#loadhtml').load(url);
    $('.tcbox').show();
    $('.tcbox').css({'z-index':'101'});
    $('.box-zb').css({'backgroundColor':"rgb(124, 125, 129)"})
}

$('#wj').click(function(){
    $("#cd li").css({'backgroundColor':headerbj,"color":headercolor})
    $(this).css({"backgroundColor":"#fff","color":"black"});
    var left=$(this).offset().left;
    fdcd.css({"left":left});
    getzicandan('wj');

})
$('#bj').click(function(){
    $("#cd li").css({'backgroundColor':headerbj,"color":headercolor})
    $(this).css({"backgroundColor":"#fff","color":"black"});
    var left=$(this).offset().left;
    fdcd.css("left",left);
    getzicandan('bj');
})
$('#sz').click(function(){
    $("#cd li").css({'backgroundColor':headerbj,"color":headercolor})
    $(this).css({"backgroundColor":"#fff","color":"black"});
    var left=$(this).offset().left;
    fdcd.css("left",left);
    getzicandan('sz');
})
$('#bz').click(function(){
    $("#cd li").css({'backgroundColor':headerbj,"color":headercolor})
    $(this).css({"backgroundColor":"#fff","color":"black"});
    var left=$(this).offset().left;
    fdcd.css("left",left);
    getzicandan('bz');
})

$("#zhebi").click(function(){
    fdcd.css({'display':'none'});
    $('#zhebi').css({"backgroundColor":"#fff",'z-index':'-100'});
    $("#cd li").css({"backgroundColor":headerbj,"color":headercolor});
})
$('.box-zb').click(function(){
    $('.tcbox').hide();
})
//菜单切换功能结束

$('#headerright li').hover(
    function(){
        $(this).css({"color":"#fff",'backgroundColor':'#C1C1C1'});
    },
    function(){
    var bj=$('#header').css('backgroundColor');
        $(this).css({"color":headercolor,'backgroundColor':bj});
    }
)



//尺寸随窗口变化
$(window).resize(function(){

    var righth=$('body').height()-30;
    $('#main').css('height',righth)
  });

//登陆按钮
//left
$('.list li').click(function(){
    $('.list li').removeClass('liaction');
    $(this).addClass('liaction');
})
var dlyesno=false;
if (dlyesno){
    $('.dengluno').css('display','none')
    $('.denglu').css('display','')
}else{
    $('.dengluno').css('display','block');
    $('.denglu').css('display','none');
}
$('.dengluno').click(function(){
    ipc.send('open-loginview');
})

$('#closebotton').click(function(){
    alert('dsdsdad')

 })



 $('#denglunojs').click(function(){
    loadhtml('./login.html')
})
$('#peizhi').click(function(){
    loadhtml('./shipin.html')
})
$('#kankan').click(function(){
    loadhtml('./kankan.html')
})
$('#right').load('./fuwuqi.html');

$('#chuankou').click(function(){
    $('#right').load('./chuankou.html');

})
$('#home1').click(function(){
    $('#right').load('./fuwuqi.html',function(res,req){
        //alert(res);
    });
})

var timer1,timer2;
$('#line').click(function(){
    $('#right').load('./line-gradient.html',function(res,req){
        clearInterval(timer1);
        var timer2 = setInterval("aabb()", 1000);
    })
})
$('#dianying').click(function(){
    $('#right').load('./dianying.html')
})