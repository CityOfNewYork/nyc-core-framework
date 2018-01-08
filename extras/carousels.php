<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
    $page_description = 'Insert page description here';
    include_once($path . 'global-header.php');

    $section = 'extras';
?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main" class="<?php echo $section; ?>">

  <article>

    <?php include_once($path . 'sub-page-header.php'); ?>

    <div class="container-fluid wide mb-5">

      <?php include_once($path . 'nav-extras.php'); ?>

    </div>

    <hr class="mb-5">

    <section class="container">

      <h2 class="text-center mb-4">Carousels</h2>

      <div id="carouselExample" class="carousel slide mb-5" data-ride="carousel">

        <div class="carousel-inner">

          <div class="carousel-item active">
              <div class="gradient-overlay">
                <img class="d-block w-100" src="http://via.placeholder.com/1200x600/003558/FFFFFF" alt="First slide">
              </div>
              <div class="carousel-caption px-3">
                <h1 class="h2">Slide 1</h1>
                <p>Mus malesuada dapibus ac condimentum habitasse</p>
              </div>
          </div>
          <div class="carousel-item">
            <div class="gradient-overlay">
              <img class="d-block w-100" src="http://via.placeholder.com/1200x600/126BB2/FFFFFF" alt="Second slide">
            </div>
            <div class="carousel-caption px-3">
              <h1 class="h2">Slide 2</h1>
              <p>Mus malesuada dapibus ac condimentum habitasse</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="gradient-overlay">
              <img class="d-block w-100" src="http://via.placeholder.com/1200x600/00857b/FFFFFF" alt="Third slide">
            </div>
            <div class="carousel-caption px-3">
              <h1 class="h2">Slide 3</h1>
              <p>Mus malesuada dapibus ac condimentum habitasse</p>
            </div>
          </div>

          <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span class="d-none d-lg-block">
              <span class="fas fa-chevron-left fa-lg" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </span>
          </a>

          <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
            <span class="d-none d-lg-block">
              <span class="fas fa-chevron-right fa-lg" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </span>
          </a>

        </div>

        <ol class="carousel-indicators py-3">
          <li data-target="#carouselExample" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExample" data-slide-to="1"></li>
          <li data-target="#carouselExample" data-slide-to="2"></li>
        </ol>

      </div><!-- #carouselExample -->

      <div id="carouselExample2" class="carousel slide mb-5" data-ride="carousel">

        <div class="carousel-inner">

          <div class="carousel-item active">
              <div class="gradient-overlay">
                <img class="d-block w-100" src="http://via.placeholder.com/1200x600/003558/FFFFFF" alt="First slide">
              </div>
              <div class="carousel-caption px-3">
                <h1 class="h2">Slide 1</h1>
                <p>Mus malesuada dapibus ac condimentum habitasse</p>
              </div>
          </div>
          <div class="carousel-item">
            <div class="gradient-overlay">
              <img class="d-block w-100" src="http://via.placeholder.com/1200x600/126BB2/FFFFFF" alt="Second slide">
            </div>
            <div class="carousel-caption px-3">
              <h1 class="h2">Slide 2</h1>
              <p>Mus malesuada dapibus ac condimentum habitasse</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="gradient-overlay">
              <img class="d-block w-100" src="http://via.placeholder.com/1200x600/00857b/FFFFFF" alt="Third slide">
            </div>
            <div class="carousel-caption px-3">
              <h1 class="h2">Slide 3</h1>
              <p>Mus malesuada dapibus ac condimentum habitasse</p>
            </div>
          </div>

          <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span class="d-none d-lg-block">
              <span class="fas fa-chevron-left fa-lg" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </span>
          </a>

          <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
            <span class="d-none d-lg-block">
              <span class="fas fa-chevron-right fa-lg" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </span>
          </a>

        </div>

        <ol class="carousel-indicators py-3">
          <li data-target="#carouselExample2" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExample2" data-slide-to="1"></li>
          <li data-target="#carouselExample2" data-slide-to="2"></li>
        </ol>

      </div><!-- #carouselExample -->

  </article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>

