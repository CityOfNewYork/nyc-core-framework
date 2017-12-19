<?php include_once($path . 'nyc-top-header.php'); ?>

<?

  /*

  // Header Types
  
  nav_primary_right
  nav_primary_below
  nav_secondary_right_primary_below
  nav_navbar_only
  
  */

  $header_type = 'nav_secondary_right_primary_below';

  switch($header_type){

      case "nav_primary_right":
        include_once($path . 'nav_primary_right.php');
        break;

      case "nav_primary_below":
        include_once($path . 'nav_primary_below.php');
        break;

      case "nav_secondary_right_primary_below":
        include_once($path . 'nav_secondary_right_primary_below.php');
        break;

      case "nav_navbar_only":
        include_once($path . 'nav_navbar_only.php');
        break;
  }

?>

