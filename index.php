<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
    $page_description = 'Insert page description here';
    include_once($path . 'global-header.php');

    $section = 'home';
?>

<?php include_once($path . 'head.php'); ?>

<div id="marquee" class="carousel mb-5" data-ride="carousel">

  <div class="carousel-inner">

    <div class="carousel-item active">
        <img class="d-block w-100" src="http://via.placeholder.com/1200x600/333333/666666" alt="First slide">
        <div class="carousel-caption px-2">
          <h1 class="h2">Slide 1</h1>
          <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://via.placeholder.com/1200x600/333333/666666" alt="Second slide">
        <div class="carousel-caption px-2">
          <h1 class="h2">Slide 2</h1>
          <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://via.placeholder.com/1200x600/333333/666666" alt="Third slide">
        <div class="carousel-caption px-2">
          <h1 class="h2">Slide 3</h1>
          <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo</p>
        </div>
    </div>

  </div>

  <a class="carousel-control-prev" href="#marquee" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  
  <a class="carousel-control-next" href="#marquee" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

  <ol class="carousel-indicators">
    <li data-target="#marquee" data-slide-to="0" class="active"></li>
    <li data-target="#marquee" data-slide-to="1"></li>
    <li data-target="#marquee" data-slide-to="2"></li>
  </ol>

</div><!-- #marquee -->

<div id="content" role="main" class="<?php echo $section; ?>">

  <div class="container">

  <section class="card-deck mb-5">

    <div class="card rounded-0">
      <a href="#" class="card-body text-white bg-primary">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="card-link">Card link</p>
      </a>
    </div>

    <div class="card rounded-0">
      <a href="#" class="card-body text-white bg-success">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="card-link">Card link</p>
      </a>
    </div>

    <div class="card rounded-0">
      <a href="#" class="card-body text-white bg-danger">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="card-link">Card link</p>
      </a>
    </div>

  </section>

  <section class="row mb-5">
    
    <div class="col-lg">
      <div class="card rounded-0 mr-lg-3">
        <a href="#" class="card-body text-white bg-primary">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="card-link">Card link</p>
        </a>
      </div>
    </div>

    <div class="col-lg">
      <div class="card rounded-0 mx-lg-3">
        <a href="#" class="card-body text-white bg-success">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="card-link">Card link</p>
        </a>
      </div>
    </div>

    <div class="col-lg">
      <div class="card rounded-0 ml-lg-3">
        <a href="#" class="card-body text-white bg-danger">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="card-link">Card link</p>
        </a>
      </div>
    </div>

  </section> 

  </div><!-- .container -->

</div><!-- #content -->

<?php include_once($path . 'foot.php'); ?>

<?php include_once($path . 'global-footer.php'); ?>
