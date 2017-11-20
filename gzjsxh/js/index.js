// JavaScript Document

<!--兼容IE6以上代码-->

   (function() {
     if (! 
     /*@cc_on!@*/
     0) return;
     var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
     var i= e.length;
     while (i--){
         document.createElement(e[i])
     } 
})() 

<!--兼容IE6以上代码-->




               
//选项卡轮播图代码
window.onload=function(){
var ms2_l_c_l_index = 0;
var ms2_l_c_l_time;
var ms2_l_c_l_img_ul = document.getElementById('ms2_l_c_l_img_ul');

function ms2_l_c_l_img_ul_banner(){
    ms2_l_c_l_index++;
    ms2_l_c_l_index=ms2_l_c_l_index>4?0:ms2_l_c_l_index;

    ms2_l_c_l_img_ul.style.left= - 426 * ms2_l_c_l_index + 'px';
}
    ms2_l_c_l_time = setInterval(ms2_l_c_l_img_ul_banner,3000)

//选项卡轮小焦点播图代码

var ms2_link_index = 0;
var ms2_link_time;
var ms2_link_span = document.querySelectorAll('.span');
//alert(ms2_link_span.length);
function ms2_link_banner(){
    ms2_link_index++;
    ms2_link_index=ms2_link_index>4?0:ms2_link_index;

    ms2_link_span.className = 'ms2_l_c_l_img_link .on';
    
}
    ms2_link_time = setInterval(ms2_link_banner,3000)




//选项卡切换

    var lis =document.querySelectorAll('.li');
    var ms2_conten = document.querySelectorAll('.ms2_l_conten');
    
    lis[0].className = 'ms2_head_hover';
    ms2_conten[0].style.display ='block';

    for(var i=0;i<=lis.length-1;i++){
        lis[i].a = i; 
        lis[i].onmouseover=function(){
            for(var i=0;i<=lis.length-1;i++){
                lis[i].className = '';
                ms2_conten[i].style.display = 'none';
            }
            this.className = 'ms2_head_hover';
            
            ms2_conten[this.a].style.display = 'block';
        }
    }

//返回顶部代码

var but_top =document.getElementById("get_top");
var get_top_wen =document.getElementById("get_top_wen");

get_top.onmouseover = function(){
    get_top_wen.style.display = "block";
}
get_top.onmouseout = function(){
    get_top_wen.style.display = "none";
}
document.onscroll = function(){
        but_onscrolltop();
} 

function but_onscrolltop (){
    var get_topup = document.body.scrollTop;
    
     if(get_topup>300){

            but_top.className="but2"; 
    }else{
            but_top.className="but1";
    }
}

but_top.onclick =  function (){
    but_onclick();
}

function but_onclick (){
    var time;
    time = setInterval(
        function(){
            var but_top = document.body.scrollTop;
            document.body.scrollTop = Math.floor(but_top - 20);
            if(but_top == 0){
                    clearInterval(time);
            }
        }
    ,30);
}

    //首焦轮播图代码

var nav_con_index = 0;
var nav_con_time;
var nav_con_lis = document.getElementById('nav_con');

function nav_con_banner(){
    nav_con_index++;
    nav_con_index=nav_con_index>3?0:nav_con_index;

    nav_con_lis.style.left= -1024 * nav_con_index + 'px';

}
    nav_con_time = setInterval(nav_con_banner,3000)
}
