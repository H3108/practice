$(function(){
  $(window).ready(function(){
    if($(window).width() > 1024 ){
      $("#touch_drag").show();
    }else{
      $("#touch_drag").hide();
    }
    photos();
  }).resize(function(){
    if($(window).width() > 1024 ){
      $("#touch_drag").show();
    }else{
      $("#touch_drag").hide();
    }
    photos();
  })
});

function photos(){
  (function start_show(){
    $("#show").show();
    var showWidth = $(window).width()-50;
    $("#show").css("width",showWidth);
  })();
  var showerWidth=$(window).width()-50;
  var showerHeight=150;
  var cR=0;
  var ccR=0;
  var timer=0;
  var listObj=$("#show div");
  var len=$("#show div").length;
  var r=Math.PI/180*360/len;
  for(var i=0;i<len;i++){
    var item=listObj[i];
    item.style.top=showerHeight/2+Math.sin(r*i)*showerWidth/2-20+"px";
    item.style.left=showerWidth/2+Math.cos(r*i)*showerWidth/2-30+"px";
    item.rotate=(r*i+2*Math.PI)%(2*Math.PI);
    item.onclick=function(){
      cR=Math.PI/2-this.rotate;
      timer || (timer=setInterval(rotate,10));
    }
  }
  function rotate(){
    ccR=(ccR+2*Math.PI)%(2*Math.PI);
    if(cR-ccR<0) cR=cR+2*Math.PI;
    if(cR-ccR<Math.PI){
      ccR=ccR+(cR-ccR)/19;
    }else{
      ccR=ccR-(2*Math.PI+ccR-cR)/19;
    
    }
    if(Math.abs((cR+2*Math.PI)%(2*Math.PI)-(ccR+2*Math.PI)%(2*Math.PI))<Math.PI/720){
      ccR=cR;
      clearInterval(timer);
      timer=0;
    }
    for(var i=0;i<len;i++){
      var item=listObj[i];
      var w,h;
      var sinR=Math.sin(r*i+ccR);
      var cosR=Math.cos(r*i+ccR);
      w=40+0.6*40*sinR;
      h=(40+0.6*40*sinR);
      item.style.cssText +=";width:"+w+"px;height:"+h+"px;top:"+parseInt(showerHeight/2+sinR*showerWidth/2/3-w/2)+"px;left:"+parseInt(showerWidth/2+cosR*showerWidth/2-h/2)+"px;z-index:"+parseInt(showerHeight/2+sinR*showerWidth/2/3-w/2)+";";
    }
  }
  rotate();
}


