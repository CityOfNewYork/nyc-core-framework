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

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i,900,900i" rel="stylesheet">

    <!-- NYC Bootstrap CDN -->
    <link rel="stylesheet" href="/css/nyc-bootstrap.css">

    <!-- Theme Styles -->
    <link rel="stylesheet" href="/css/theme.css">

</head>

<body class="has-shadow">