window.onload=function(){
	var index = 0;									//定义index为0
	var banner_time;								
	banner_time = setInterval(banner,3000);			//没三秒执行这个方法
	$('.link span').eq(0).addClass('on');			//第一个小点添加样式
	function banner(a){								//banner方法
		if(a){
			index--;
			index= index<0?$('li img').length-1:index;
			smail_img();
		}else{
			index++;
			index= index>$('li img').length-1?0:index;
			smail_img();
		}
		$marginleft = -680 * index +'px';
		$('.ul').css('marginLeft',$marginleft);
		$('.link span').removeClass();
		//$('.link span').index(index).addClass('on');
		$('.link span').eq(index).addClass('on');
		
	}
	
	$('.link span').click(function(){
		 clearInterval(banner_time);
		 index = $(this).index();
		 smail_img();
		$marginleft = -680 * $(this).index() +'px';
		$('.ul').css('marginLeft',$marginleft);
		$('.link span').removeClass();
		$(this).addClass('on');
		banner_time = setInterval(banner,3000);
	})
	
	$('.ul li img').mouseover(function(){
		clearInterval(banner_time);
	});
	
	$('.ul li img').mouseout(function(){
		banner_time = setInterval(banner,3000);
	})
	
	$('.left').click(function(){
		clearInterval(banner_time);
		banner(123);
		banner_time = setInterval(banner,3000);
	});
	
	$('.right').click(function(){
		clearInterval(banner_time);
		banner();
		banner_time = setInterval(banner,3000);
	});
	smail_img()
	function smail_img(){
		if(index == 0 ){
			$('.left .img').attr('src','images/'+$('li img').length+'.jpg');
			$('.right .img').attr('src','images/'+2+'.jpg');
		}else{
			$('.left .img').attr('src','images/'+index+'.jpg');
			if(index == 4 ){
				$('.right .img').attr('src','images/'+1+'.jpg');
			}else{
				$('.right .img').attr('src','images/'+parseInt(index+2)+'.jpg');
			}	
		}
	}
	
	$('.left').mouseover(function(){
		$('.left .img').css('display','block');
	});
	
	$('.left').mouseout(function(){
		$('.left .img').css('display','none');
	});
	
	$('.right').mouseover(function(){
		$('.right .img').css('display','block');
	});
	
	$('.right').mouseout(function(){
		$('.right .img').css('display','none');
	});
}