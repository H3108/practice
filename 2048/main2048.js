var board = new Array();
var score = 0 ;
var hasConflicted = new Array();
$(document).ready(function(){
	newgame();
});

function newgame(){
	//��ʼ�����̸�
	init();
 //��ʼ��();
	//���������������������
	generateOneNumber();
//�ո����������һ������
	generateOneNumber();
//�ո����������һ������
}

function init(){
	for( var i = 0 ; i < 4 ; i ++ )
		for( var j = 0 ; j < 4 ; j ++ ){
//˫��forѭ��
			var gridCell = $('#grid-cell-'+i+"-"+j);
//grideCell��ʾ��Ӧ����ֵ��С���ӡ�ȷ����ÿ��ID��div�����ϡ�
			gridCell.css('top', getPosTop( i , j ) );
//ͨ�� getPosLeft()��������ÿ�����Ӿඥ�˵ľ���
			gridCell.css('left', getPosLeft( i , j ) );
//ͨ�� getPosLeft()��������ÿ�����Ӿ���˵ľ���
	}

	for( var i = 0 ; i < 4 ; i ++ ){
//����board[i]������
		board[i] = new Array();
		hasConflicted[i] = new Array();
//�ٰ�board����ġ�i��ֵ����Ϊ���飬ʹ֮��Ϊ��ά���顣
		for(var j = 0 ; j < 4 ; j ++){
//����board[j]������
		board[i][j] = 0 ;
		hasConflicted[i][j] = false;

		}
	}
	updateBoardView();
//���ú���updaateBoarView��

score = 0;
//��ʼ��score��ʹ֮��ʼ����Ϊ0

}

function updateBoardView(){
//���庯��
	$(".number-cell").remove();
//���ԭ��numberֵ
	for( var i = 0 ; i < 4 ; i ++)
		for( var j = 0 ; j < 4 ; j ++){
//˫��forѭ��,ȡ����ֵ
		$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
//���������div��grid-container�����Ӷ��С����div��ʽ��id��
		var theNumberCell = $('#number-cell-'+i+'-'+j);
//����ID numberCell�����긳�����theNumberCell

	if(board[i][j] == 0 ){
//���board��[i][j]ֵ��Ϊ0,��ʽ���£�
		theNumberCell.css('width','0px');
		theNumberCell.css('height','0px');
		theNumberCell.css('top',getPosTop(i,j)+50);
		theNumberCell.css('left',getPosLeft(i,j)+50);
	}else{
//���board��[i][j]ֵ��Ϊ0,��ʽ���£�
		theNumberCell.css('width','100px');
		theNumberCell.css('height','100px');
		theNumberCell.css('top',getPosTop(i,j));
		theNumberCell.css('left',getPosLeft(i,j));
		theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
//��ʽ�����Ŀ��Ա䶨����һ���µ�switch��䣬���Ը���board��ֵ����switch���ı��Ӧ������ɫ��
		theNumberCell.css('color',getNumberColor(board[i][j]));
//��ʽ�����Ŀ��Ա䶨����һ���µ�if��䣬���Ը���board��ֵ����if���ı��Ӧ������ɫ��
		theNumberCell.text(board[i][j]);
//���board��ֵ��
			}
		hasConflicted[i][j] = false;
		}
}

function generateOneNumber(){
//����generateOneNumber
	if( nospace(board))
//�����������û�пո��ˣ�����:nospaceΪfalse��boardֵ����
		return false;
//���� �������������ˣ�������
	
//������п�λֵ�����������
//���������������һ��λ�ã����һ�����֣����λ������ʾ������֡�
	//���һ��λ��
var randx = parseInt( Math.floor(Math.random() * 4 ) );
var randy = parseInt( Math.floor(Math.random() * 4 ) );
	
	var times = 0 ;
	while( times < 50 ){
//whileѭ����䣨�������棩
	if( board[randx][randy] == 0 )
		break;
//������Ӷ�Ϊ��ֵ�Ļ�����������һ�������
//������ѭ��
//������еĻ�������ִ�����������������ѭ������������
	randx = parseInt( Math.floor( Math.random() * 4 ) );
	randx = parseInt( Math.floor( Math.random() * 4 ) );

	times ++;
}
	//���һ������
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
//��Ԫ���㣬����ֳ����������2��4
/*
Math random()
//�������0-1�ĸ���������ֵ���ڵ���0.0����С��1.
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

//�����λ����ʾ�������
	board[randx][randy] = randNumber;
	//�����λ�ã�����ֵ��λ�ò����֣���ʾ�����
	showNumberWithAnimation( randx , randy , randNumber );
	//����Ч�������������λ�õ�x��yֵ���������
	return true;
//������пո񣨺���:nospaceΪtrue��boardֵ���������سɹ�������ѭ������������
} 


/*
	JQ keydown() 
keydown�¼����ڼ��̰���ʱ����. 

��ü����϶�Ӧ��ascII�룺
$(document).keydown(function(event){ 
console.log(event.keyCode); 
}); 


*/
$(document).keydown( function (event){
//jq�����¼�����ȡ�û����̲���ֵ��������һ������
	switch( event.keyCode){
//��switch�¼��������û�ֵ�����������ҵ��жϲ���ִ�ж�Ӧ�������
	case 37://left
//����37�������
		if( moveLeft()){
			/*
			moveleft()�������ƶ���С���Ӷ���left�ƶ���
			���ǣ����ܶ�����ߵ�ʱ��û�취�����ƶ���
			���Լ�һ��if�ж��ܲ���ִ�У�
			�������ִ�����Ͳ���������֮
			*/
			setTimeout("generateOneNumber()",210);
			//����һ��������֣�
			setTimeout("isgameover()",300);
			//����һ�����ֿ��Ե�����Ϸ��������������һ��isgameover�������ж���Ϸ�Ƿ����
		}
		break;
//��������ѭ��
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

//nospace��û�пո��ˣ����� nomover û�а취��������������

	gameover();
//����gameoceer;
 }
}

function gameover(){
	alert('��Ϸ����');
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
//����������Ļ�����ִ�����ϲ�����
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
