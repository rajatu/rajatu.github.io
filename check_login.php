<?php

$mysql_database = "mysample";
$mysql_hostname = "localhost";
$mysql_user = "root";
$mysql_password = "";

$cc = mysql_connect($mysql_hostname,$mysql_user,$mysql_password) or die("can't connect to DB !!");
mysql_select_db($mysql_database,$cc) or die("couldn't select DB");

$myusername = $_POST['username'];
$mypassword = $_POST['password'];
$tbl = "users";

$sql = "SELECT * FROM $tbl WHERE user_name = '$myusername' and password = '$mypassword'";
$result = mysql_query($sql);

$count = mysql_num_rows($result);

if($count == 1){
	//session_register("myusername');
	//session_register('mypassword');
	$_SESSION['un'] = $myusername;
	$_SESSION['ps'] = $mypassword;
	header("location:login_success.php");
}
else{
	echo "Invalid Users";
}
?>