function showNumberWithAnimation( i , j , randNumber ){
//定义函数showNumberWithAnimation的动画，（条件：小格子上‘i’和‘j’的位置，和随机数）
	var numberCell = $('#number-cell-'+ i +'-'+ j);
//引用numberCell，class样式。
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	//背景颜色跟随之前定义的getNumberBackgroundColor，（条件是：随机数满足）
	numberCell.css('color',getNumberColor( randNumber ));
	//背景颜色跟随之前定义的getNumberColor，（条件是：随机数满足）
	numberCell.text(randNumber);
	//输出随机数

	numberCell.animate({
//JQ中animate() 方法执行 CSS 属性集的自定义动画。
		width:"100px",
		height:"100px",
		top:getPosTop( i , j),
		left:getPosLeft( i , j)
	},50);

}


function showMoveAnimation( fromx , fromy , tox , toy){

	var numberCell = $('#number-cell-' + fromx + '-' + fromy);
	numberCell.animate({
		top:getPosTop( tox , toy),
		left:getPosLeft( tox , toy)
	},200);
}

function updateScore(score){
	$('#score').text(score);
//将后端的数据发送到前台去替换
}
