 function getPosTop( i , j ){
	return 20 + i*120;
//��ʾ�ӱ����������ص�������������ִ�У�����ʱ�ɸ���һ������ֵ.

}

function getPosLeft( i , j ){
	return 20 + j*120;
//��ʾ�ӱ����������ص�������������ִ�У�����ʱ�ɸ���һ������ֵ.

}

function getNumberBackgroundColor( number){
//���庯��getNumberBackgroundColor��ȡֵ��
	switch( number){
//switch��䣨����--board��ȡֵ��
		case 2:return "#eee4da";break;
//�����2,����ֵ��"#eee4da"������ɫ������ϲ������������
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
//���û������ȡֵ�������޵�״̬��
}

function getNumberColor( number){
//����getNumberColor����������ȡֵ��
	if( number <= 4)
//�����ȡֵС�ڻ����4���ͻ��С�2���͡�4������ֵ����
		return "#776e65";
//����������ɫ"#776e65"��
	return "white";
//���򷵻ذ�ɫ��
}

function nospace(board){
//����nospace��ֵ��
	for( var i = 0 ; i < 4 ; i ++)
		for( var j = 0 ; j < 4 ; j ++ )
//˫��forѭ��
				if(board[i][j] == 0)
//�����ά����board��[i][j]��ֵ����0/��ֵ��ʱ��
					return false;
//����ֵ����
	return true;
//����ֵ����	
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
//����һ������noBlockHorizontal��i,k,j,board��
	for ( var i = col1 + 1 ; i < col2 ; i ++)
//for��������ʼ�� i , i=��1��K���ϱ�����1��ѭ�������ǣ�С����J,Ҳ�͵���4��ֵ��������i��
		if( board[row][i] != 0)
//���I�ж�������0�����ǿո�Ļ���
			return false;
		//���������ƶ�����֮
	return true;
//�����������̣�û�з����ϰ����ʱ�򣬿��������ƶ�
}



function noBlockVertical( col , row1 , row2 , board ){
//����һ������noBlockHorizontal��i,k,j,board��
	for ( var i = row1 + 1 ; i < row2 ; i ++)
//for��������ʼ�� i , i=��1��K���ϱ�����1��ѭ�������ǣ�С����J,Ҳ�͵���4��ֵ��������i��
		if( board[i][col] != 0)
//���I�ж�������0�����ǿո�Ļ���
			return false;
		//���������ƶ�����֮
	return true;
//�����������̣�û�з����ϰ����ʱ�򣬿��������ƶ�
}



function nomove(board){
	 if( canMoveLeft(board) ||
		 canMoveRight(board) ||
		 canMoveUp(board) ||
		 canMoveDown(board) )

		return false;

	return true;
}