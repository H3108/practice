$(function(){
	if(localStorage.n){
		$('#score span').text(localStorage.n);
	}
	
	
	
	$('#box').draggable({
		containment:"body",
		drag:function(){
			$('.round').each(function(){
				var th = $(this);
				if(check($('#box'),th)){
					$(this).remove();
					var score = parseInt($('#score span').text())+1;
					$('#score span').text(score);
					localStorage.n = score;
					 
				}
			})
			
		}
	})
	
	
	function check(o1,o2){
		var o1_left = o1.offset().left;
		var o1_width_left = o1_left + o1.width();
		var o2_left = o2.offset().left;
		var o2_width_left = o2_left + o2.width();
		
		var o1_top = o1.offset().top;
		var o1_height_top = o1_top + o1.height();
		var o2_top = o2.offset().top;
		var o2_height_top = o2_top + o2.height();
		
		
		if(o1_width_left < o2_left || o1_left > o2_width_left || o2_height_top < o2_top || o1_top > o2_height_top){
			return false;
		}else{
			return true;
		}
	}
	
	function add(){
	    $span = $('<span class="round"></span>');	
		//var rand_time = Math.ceil(Math.random()*2000);
		var posi =  Math.random()*$(window).width() - 30;
		var bg = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
		var speed = parseInt(Math.random()*10+1);
		$span.attr('speed',speed);
		$span.css("left",posi);
		$span.css("background",bg);
		$("body").append($span);
	}
	
	setInterval(function(){
		$('.round').each(function(){
			var speed = parseInt($(this).attr('speed'));
			var s = parseInt($(this).offset().top)+speed;
			$(this).css("top",s);
			if($(this).offset().top >= $(window).height()-30){
				$(this).remove();
			}
			
			var th = $(this);
			if(check($('#box'),th)){
				$(this).remove();
				var score = parseInt($('#score span').text())+1;
				$('#score span').text(score);
				localStorage.n = score;
				 
			}
		})
		
		
	},20)
	
	
	setInterval(add,500);
})