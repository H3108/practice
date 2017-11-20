 function getPosTop( i , j ){
	return 20 + i*120;
//表示从被调函数返回到主调函数继续执行，返回时可附带一个返回值.

}

function getPosLeft( i , j ){
	return 20 + j*120;
//表示从被调函数返回到主调函数继续执行，返回时可附带一个返回值.

}

function getNumberBackgroundColor( number){
//定义函数getNumberBackgroundColor（取值）
	switch( number){
//switch语句（条件--board的取值）
		case 2:return "#eee4da";break;
//如果是2,返回值，"#eee4da"背景颜色，结束喜欢。以下类似
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;
	}
	return "black";
//如果没有以上取值，返回无的状态。
}

function getNumberColor( number){
//定义getNumberColor函数（条件取值）
	if( number <= 4)
//如果（取值小于或等于4（就会有‘2’和‘4’两个值））
		return "#776e65";
//返回数字颜色"#776e65"。
	return "white";
//否则返回白色。
}

function nospace(board){
//函数nospace（值）
	for( var i = 0 ; i < 4 ; i ++)
		for( var j = 0 ; j < 4 ; j ++ )
//双重for循环
				if(board[i][j] == 0)
//如果二维数组board的[i][j]的值等于0/空值的时候
					return false;
//返回值：假
	return true;
//返回值：真	
}

function canMoveLeft( board ){
	for( var i = 0 ; i < 4 ; i ++)
		for( var j = 1 ; j < 4 ; j ++ )
			if( board[i][j] != 0 )
				if (board[i][j-1] == 0 || board[i][j-1] == board[i][j])
					return true; 
	return false;
}

function canMoveRight( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2; j >= 0 ; j -- )
            if( board[i][j] != 0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
                    return true;

    return false;
}

function canMoveUp( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ )
            if( board[i][j] != 0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
                    return true;

    return false;
}

function canMoveDown( board ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- )
            if( board[i][j] != 0 )
                if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
                    return true;

    return false;
}


function noBlockHorizontal( row , col1 , col2 , board ){
//声明一个函数noBlockHorizontal（i,k,j,board）
	for ( var i = col1 + 1 ; i < col2 ; i ++)
//for条件（初始化 i , i=除1的K加上被除的1；循环条件是：小于列J,也就等于4个值；递增项i）
		if( board[row][i] != 0)
//如果I行都不等于0，不是空格的话，
			return false;
		//不能向左移动，反之
	return true;
//走完以上流程，没有发现障碍物的时候，可以向左移动
}



function noBlockVertical( col , row1 , row2 , board ){
//声明一个函数noBlockHorizontal（i,k,j,board）
	for ( var i = row1 + 1 ; i < row2 ; i ++)
//for条件（初始化 i , i=除1的K加上被除的1；循环条件是：小于列J,也就等于4个值；递增项i）
		if( board[i][col] != 0)
//如果I行都不等于0，不是空格的话，
			return false;
		//不能向左移动，反之
	return true;
//走完以上流程，没有发现障碍物的时候，可以向左移动
}



function nomove(board){
	 if( canMoveLeft(board) ||
		 canMoveRight(board) ||
		 canMoveUp(board) ||
		 canMoveDown(board) )

		return false;

	return true;
}