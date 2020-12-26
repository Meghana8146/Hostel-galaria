<?php
$connect=mysqli_connect("localhost","root","","hostel");
$query="CALL LoginProcedure()";
if($result=mysqli_query($connect,$query))
{
	while($row=mysqli_fetch_row($result))
	{
		print_r($row);
		echo "<pre>";
	}
}