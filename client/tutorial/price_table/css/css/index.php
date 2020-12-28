<?php
    session_start();

    if($_SESSION){
		session_destroy();
		unset($_SESSION['id']);
		unset($_SESSION['username']);
		unset($_SESSION['email']);
		unset($_SESSION['verified']);
		unset($_SESSION['msg']);
		unset($_SESSION['alert-class']);
		
		header("location: ../../login_signup/login.php");
	}else{
		header("location: ../../index.php");
	}
?>