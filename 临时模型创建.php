<?php
//include "临时模型创建.php";
$Temporary_model=$_REQUEST['Temporary_model']
$file=fopen("临时模型.txt","w+");
fwrite($file,$Temporary_model);
fclose($file);
echo "<script>alert('生成成功');</script>";
?>
