function showNumberWithAnimation( i , j , randNumber ){
//���庯��showNumberWithAnimation�Ķ�������������С�����ϡ�i���͡�j����λ�ã����������
	var numberCell = $('#number-cell-'+ i +'-'+ j);
//����numberCell��class��ʽ��
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	//������ɫ����֮ǰ�����getNumberBackgroundColor���������ǣ���������㣩
	numberCell.css('color',getNumberColor( randNumber ));
	//������ɫ����֮ǰ�����getNumberColor���������ǣ���������㣩
	numberCell.text(randNumber);
	//��������

	numberCell.animate({
//JQ��animate() ����ִ�� CSS ���Լ����Զ��嶯����
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
//����˵����ݷ��͵�ǰ̨ȥ�滻
}
