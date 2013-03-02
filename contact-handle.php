<?php 
 
//required fields
$Full_Name = $_POST["Full_Name"];
 
//required fields
$email_address = $_POST["email_address"];
 
	
//text areas
$Message = ltrim($_POST["Message"], " ");
	

// prove if a bot has entered data
$botty = strip_tags($_POST["botty"]);
 
if($botty != NULL){
	echo "barghh! darn bot!";
	die;
	}
 
// the email address where the script will email the form results to
$to = "info@joe-watkins.io";
 
// where the email will look like it is sent from
$from = "info@joe-watkins.io";

$subject = "Email from your website";

$headers = "From: info@joe-watkins.io" . "\r\n";
$headers .= "Reply-To: info@joe-watkins.io" . "\r\n";
$headers .= "Return-Path: info@joe-watkins.io" . "\r\n";
$body = "Full Name: " . $Full_Name . "\n";
$body .="Email Address: " . $email_address . "\n";

$body .= "Message: " .  $Message . "\n";

$isMailed = mail($to, $subject, $body, $headers);
 
	
?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<title>Roscoe, Roscoe, Roscoe - A cat that needs no introduction.</title>
	<meta name="description" content="A website dedicated to a special kitty cat and good code">
	<meta name="author" content="Joe Watkins">
	
	<script src="javascript/head.js"></script>
	<script>head.js(
		'javascript/jquery.min.js',
		'javascript/modernizr.custom.js',
		'javascript/jquery.flipshow.js',
		'javascript/extras.js',
		'javascript/smoothScroll.js',
		'javascript/toTop.js',
		'javascript/scripts.js'
	);</script>

	<link rel="stylesheet" href="styles/base.css">
	<link rel="stylesheet" href="styles/skeleton.css">
	<link rel="stylesheet" href="styles/layout.css">
	<link rel="stylesheet" href="styles/flipshow.css">

	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<link rel="shortcut icon" href="images/favicon.ico">
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
	
	<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="styles/font-awesome.min.css" type="text/css" media="all">
	<meta http-equiv="refresh" content="3;URL='http://joe-watkins.io/roscoe-roscoe-roscoe'">
</head>
<body>



	<div class="container">
		<h1 style="text-align:center;">
			<?php 
				if($isMailed){
				echo "Thank you for your inquiry, " . $FirstName . " " . $LastName . " We will get back to you shortly.";
				}else{
				echo "There seemed to be a problem";
				}
			?>	
		</h1>	
	</div><!--// .container -->
	

	
</body>
</html>