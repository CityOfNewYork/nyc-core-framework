<?php 
    $template = basename($_SERVER["PHP_SELF"]); 
    $page_array = explode(".", $template);
    $page = $page_array[0];
    
    $parent = end(explode("/",dirname($_SERVER['SCRIPT_NAME'])));

    if (empty($parent)) {
        $parent = 'home'; // set as default
    }

    if (empty($section)) {
        $section = 'home'; // set as default
    }

?>

<!DOCTYPE html>

<html lang="en">

<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous"> 

    <!-- Font Awesome -->
    <script src="https://use.fontawesome.com/7e67af4332.js"></script>
    <link rel="stylesheet" href="/css/main.css">

</head>

<body>