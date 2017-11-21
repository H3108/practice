<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>JSONP 实例</title>
</head>
<body>
    <div id="divCustomers"></div>
    <script type="text/javascript">
        function callbackFunction(result, methodName)
        {
            var html = '<ul>';
            for(var i = 0; i < result.length; i++)
            {
                html += '<li>' + result[i] + '</li>';
            }
            html += '</ul>';
            document.getElementById('divCustomers').innerHTML = html;
        }
    </script>
<script type="text/javascript" src="http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction"></script>
</body>
</html>

<?php
header('Content-type: application/json');
//获取回调函数名
//$_REQUEST -> (自动化的全局变量)用于收集HTML表单提交的数据,默认情况下包含了 $_GET，$_POST 和 $_COOKIE 的数组。
//htmlspecialchars把预定义的字符转换为 HTML 实体。就是让HTML标签转化为实例，可以直接输出。
$jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);
//json数据
$json_data = '["customername1","customername2"]';
//输出jsonp格式的数据
echo $jsoncallback . "(" . $json_data . ")";
?>