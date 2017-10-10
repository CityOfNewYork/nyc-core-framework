<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
    $page_description = 'Insert page description here';
    include_once($path . 'global-header.php');

    $section = 'home';
?>

<?php include_once($path . 'head.php'); ?>

<div id="marquee" class="carousel slide" data-ride="carousel">

  <div class="carousel-inner">

    <div class="carousel-item active">
        <img class="d-block w-100" src="http://via.placeholder.com/1200x600/333333/666666" alt="First slide">
        <div class="carousel-caption px-2">
          <h4>Here is an h4</h4>
          <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://via.placeholder.com/1200x600/333333/666666" alt="Second slide">
        <div class="carousel-caption px-2">
          <h4>Here is an h4</h4>
          <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://via.placeholder.com/1200x600/333333/666666" alt="Third slide">
        <div class="carousel-caption px-2">
          <h4>Here is an h4</h4>
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

    <article>

      <header class="bg-primary text-white">
        <h1 class="display-1 text-center">Grid</h1>
      </header>

      <div class="container">

         <section class="mb-5">

          <div class="row">
            <div class="col-md">
              <p>1 of 2</p>
            </div>
            <div class="col-md">
              <p>2 of 2</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md">
              <p>1 of 3</p>
            </div>
            <div class="col-md">
              <p>2 of 3</p>
            </div>
            <div class="col-md">
              <p>3 of 3</p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <p>1 of 4</p>
            </div>
            <div class="col-sm-6 col-lg-3">
              <p>2 of 4</p>
            </div>
            <div class="col-sm-6 col-lg-3">
              <p>3 of 4</p>
            </div>
            <div class="col-sm-6 col-lg-3">
              <p>4 of 4</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8">
             <p>1 of 2</p>
             <div class="row">
              <div class="col-lg-6">
                1 of 2
              </div>
              <div class="col-lg-6">
                <p>2 of 2</p>
              </div>
            </div>

          </div>

          <div class="col-md-4">
            <p>2 of 2</p>
          </div>

        </div>

        <div class="row d-flex flex-row-reverse">

          <div class="col-md-8">
            <p>1 of 2</p>
            <div class="row">
              <div class="col-lg-6">
                <p>1 of 2</p>
              </div>
              <div class="col-lg-6">
                <p>2 of 2</p>
              </div>
            </div>

          </div>

          <div class="col-md-4">
            <p>2 of 2</p>
          </div>

        </div>

        <div class="row">
          <div class="col-lg-3">1 of 3</div>
          <div class="col-lg-6">2 of 3</div>
          <div class="col-lg-3">3 of 3</div>
        </div>

      </section>

    </div><!-- .container -->

  </article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>

<?php include_once($path . 'global-footer.php'); ?>
