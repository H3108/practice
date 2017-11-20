var board = new Array();
var score = 0 ;
var hasConflicted = new Array();
$(document).ready(function(){
	newgame();
});

function newgame(){
	//初始化棋盘格
	init();
 //初始化();
	//在随机两个格子生成数字
	generateOneNumber();
//空格内随机生成一个数字
	generateOneNumber();
//空格内随机生成一个数字
}

function init(){
	for( var i = 0 ; i < 4 ; i ++ )
		for( var j = 0 ; j < 4 ; j ++ ){
//双重for循环
			var gridCell = $('#grid-cell-'+i+"-"+j);
//grideCell表示相应坐标值的小格子。确定到每个ID的div格子上。
			gridCell.css('top', getPosTop( i , j ) );
//通过 getPosLeft()方法设置每个格子距顶端的距离
			gridCell.css('left', getPosLeft( i , j ) );
//通过 getPosLeft()方法设置每个格子距左端的距离
	}

	for( var i = 0 ; i < 4 ; i ++ ){
//遍历board[i]的数组
		board[i] = new Array();
		hasConflicted[i] = new Array();
//再把board里面的【i】值定义为数组，使之成为二维数组。
		for(var j = 0 ; j < 4 ; j ++){
//遍历board[j]的数组
		board[i][j] = 0 ;
		hasConflicted[i][j] = false;

		}
	}
	updateBoardView();
//调用函数updaateBoarView。

score = 0;
//初始化score，使之初始化后为0

}

function updateBoardView(){
//定义函数
	$(".number-cell").remove();
//清除原先number值
	for( var i = 0 ; i < 4 ; i ++)
		for( var j = 0 ; j < 4 ; j ++){
//双重for循环,取坐标值
		$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
//给整个大的div“grid-container”附加多个小格子div样式和id。
		var theNumberCell = $('#number-cell-'+i+'-'+j);
//赋予ID numberCell的坐标赋予变量theNumberCell

	if(board[i][j] == 0 ){
//如果board的[i][j]值都为0,样式如下：
		theNumberCell.css('width','0px');
		theNumberCell.css('height','0px');
		theNumberCell.css('top',getPosTop(i,j)+50);
		theNumberCell.css('left',getPosLeft(i,j)+50);
	}else{
//如果board的[i][j]值不为0,样式如下：
		theNumberCell.css('width','100px');
		theNumberCell.css('height','100px');
		theNumberCell.css('top',getPosTop(i,j));
		theNumberCell.css('left',getPosLeft(i,j));
		theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
//样式背景的可以变定义了一个新的switch语句，可以根据board的值遍历switch语句改变对应背景颜色。
		theNumberCell.css('color',getNumberColor(board[i][j]));
//样式背景的可以变定义了一个新的if语句，可以根据board的值遍历if语句改变对应背景颜色。
		theNumberCell.text(board[i][j]);
//输出board的值。
			}
		hasConflicted[i][j] = false;
		}
}

function generateOneNumber(){
//函数generateOneNumber
	if( nospace(board))
//如果，条件：没有空格了（函数:nospace为false（board值））
		return false;
//返回 不能生成数字了，结束。
	
//如果还有空位值，生成随机数
//条件有三个：随机一个位置；随机一个数字；随机位置上显示随机数字。
	//随机一个位置
var randx = parseInt( Math.floor(Math.random() * 4 ) );
var randy = parseInt( Math.floor(Math.random() * 4 ) );
	
	var times = 0 ;
	while( times < 50 ){
//while循环语句（条件：真）
	if( board[randx][randy] == 0 )
		break;
//如果格子都为空值的话，可以生成一个随机数
//结束死循环
//如果不行的话，继续执行生成随机数，继续循环到符合条件
	randx = parseInt( Math.floor( Math.random() * 4 ) );
	randx = parseInt( Math.floor( Math.random() * 4 ) );

	times ++;
}
	//随机一个数字
if( times == 50){
	for (var i = 0; i < 4 ; i ++ )
		for( var j = 0; j < 4 ; j ++ ){
			if( board[i][j] == 0 ){
					randx = i;
					randy = j;
			}
	}
}
var randNumber = Math.random() < 0.5 ? 2 : 4;
//三元运算，五五分成生成随机数2和4
/*
Math random()
//随机生成0-1的浮点数。该值大于等于0.0而且小于1.
0.0
0.1
0.2
0.3
0.4
			> 0.5 ? 2 : 4;
0.5
0.6
0.7
0.8
0.9

*/

//在随机位置显示随机数字
	board[randx][randy] = randNumber;
	//在随机位置（除有值得位置不出现）显示随机数
	showNumberWithAnimation( randx , randy , randNumber );
	//动画效果（条件：随机位置的x和y值和随机数）
	return true;
//如果还有空格（函数:nospace为true（board值）），返回成功，继续循环，生成数字
} 


/*
	JQ keydown() 
keydown事件会在键盘按下时触发. 

获得键盘上对应的ascII码：
$(document).keydown(function(event){ 
console.log(event.keyCode); 
}); 


*/
$(document).keydown( function (event){
//jq键盘事件，获取用户键盘操作值，进行下一步运算
	switch( event.keyCode){
//用switch事件，遍历用户值进行上下左右的判断并且执行对应操作结果
	case 37://left
//条件37，左键。
		if( moveLeft()){
			/*
			moveleft()所有能移动的小格子都想left移动。
			但是，可能都在左边的时候没办法向左移动，
			所以加一个if判断能不能执行；
			如果不能执行它就不操作，反之
			*/
			setTimeout("generateOneNumber()",210);
			//生成一个随机数字；
			setTimeout("isgameover()",300);
			//新增一个数字可以导致游戏结束，所以增加一个isgameover函数的判断游戏是否结束
		}
		break;
//结束条件循环
	case 38://up
		if( moveUp()){
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;
	case 39://right
		if( moveRight()){
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;
	case 40://down
		if( moveDown()){
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;
	default://default
		break;
	}
});

function isgameover(){
 if (nospace( board ) && nomove( board) ){

//nospace是没有空格了；并且 nomover 没有办法操作上下左右了

	gameover();
//真正gameoceer;
 }
}

function gameover(){
	alert('游戏结束');
}

function moveLeft(){

	if( !canMoveLeft( board ) )
		return false;


for( var i = 0 ; i < 4 ; i ++)
	for( var j = 1 ; j < 4 ; j ++){
		if( board[i][j] != 0 ){
			
			for( var k = 0 ; k < j ;  k ++ ){
				if( board[i][k] == 0 && noBlockHorizontal(i , k , j , board)){
				//move
				showMoveAnimation( i , j , i , k );
				board[i][k] = board[i][j];
				board[i][j] = 0;
				continue;
				}
                 else if( board[i][k] == board[i][j] && noBlockHorizontal( i , k , j , board ) && !hasConflicted[i][k] ){

					//move
					showMoveAnimation( i , j , i , k );
					//add
					board[i][k] += board[i][j];
					board[i][j] = 0;
					//add score
					score += board[i][k];
					updateScore(score);

					hasConflicted[i][k] = true;
						continue;

				}
			}
			
		}

	}


setTimeout("updateBoardView()",200);
		return true;
//如果输出是真的话，它执行以上操作。
}



function moveRight(){
    if( !canMoveRight( board ) )
        return false;

    //moveRight
    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 2 ; j >= 0 ; j -- ){
            if( board[i][j] != 0 ){
                for( var k = 3 ; k > j ; k -- ){

                    if( board[i][k] == 0 && noBlockHorizontal( i , j , k , board ) ){
                        showMoveAnimation( i , j , i , k );
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[i][k] == board[i][j] && noBlockHorizontal( i , j , k , board ) && !hasConflicted[i][k]){
                        showMoveAnimation( i , j , i , k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
						score += board[i][k];
						updateScore(score);
						hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}


function moveUp(){

    if( !canMoveUp( board ) )
        return false;

    //moveUp
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ ){
            if( board[i][j] != 0 ){
                for( var k = 0 ; k < i ; k ++ ){

                    if( board[k][j] == 0 && noBlockVertical( j , k , i , board )  ){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[k][j] == board[i][j] && noBlockVertical( j , k , i , board ) && !hasConflicted[k][j]){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
						score += board[k][j];
						updateScore(score);
						hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}


function moveDown(){
    if( !canMoveDown( board ) )
        return false;

    //moveDown
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- ){
            if( board[i][j] != 0 ){
                for( var k = 3 ; k > i ; k -- ){

                    if( board[k][j] == 0 && noBlockVertical( j , i , k , board )){
                        showMoveAnimation( i , j , k , j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                     else if( board[k][j] == board[i][j] && noBlockVertical( j , i , k , board ) && !hasConflicted[k][j] ){
                        showMoveAnimation( i , j , k , j );
                         board[k][j] += board[i][j];
                        board[i][j] = 0;
						score += board[k][j];
						updateScore(score);

						hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()",200);
    return true;
}
