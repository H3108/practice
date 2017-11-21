<!DOCTYPE html>
<html>
<head>
	<title>JSONP 实例</title>
	<script src="http://apps.bdimg.com/libs/jquery/1.8.3/jquery.js"></script>	
</head>
<body>
<div id="divCustomers"></div>
<script>
$.getJSON("http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?", function(data) {
	
	var html = '<ul>';
	for(var i = 0; i < data.length; i++)
	{
		html += '<li>' + data[i] + '</li>';
	}
	html += '</ul>';
	
	$('#divCustomers').html(html); 
});
</script>
</body>
</html> 