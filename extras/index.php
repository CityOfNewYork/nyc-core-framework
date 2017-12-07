<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
    $page_description = 'Insert page description here';
    include_once($path . 'global-header.php');

    $section = 'extras';
?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main" class="<?php echo $section; ?>">

  <article>

    <header class="p-4 p-md-5 mb-5 bg-deep-blue text-white">
      <h1 class="display-1 text-center"><?php echo $section; ?></h1>
    </header>

    <div class="container-fluid wide mb-5">

      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#">Featured panels</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Carousels</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cards</a>
        </li>
      </ul>

    </div>

    <section class="container-fluid p-0">

      <div class="featured-panel cover mb-5 bg-royal-blue">

        <div class="image">
          <img src="/images/feature/01.jpg" alt="Placeholder">
        </div>

        <div class="message">
          <div class="narrow text-center text-white p-4">
            <h1 class="display-3">This is an H1</h1>
            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
            <a href="#" class="btn btn-lg btn-true-blue has-arrow">Link Text</a>
          </div>
        </div>

      </div>

      <div class="featured-panel cover mb-5 bg-clean-green">

        <div class="image">
          <img src="/images/feature/02.jpg" alt="Placeholder">
        </div>
        
        <div class="message">
          <!-- Everything within here is variable. -->
          <div class="row no-gutters">
            <div class="col-md-5 offset-md-1 p-4">
                <h1 class="text-white mb-4"><em>Mus malesuada dapibus ac condimentum habitasse</em></h1>
                <a href="#" class="btn btn-lg btn-sun-yellow has-arrow">Link Text</a>
            </div>
          </div>
        </div>

      </div>

      <div class="featured-panel box mb-5 bg-royal-blue">

        <div class="image">
          <img src="/images/feature/03.jpg" alt="Placeholder">
        </div>

        <div class="message">
          <!-- Everything within here is variable. -->
          <div class="row no-gutters w-100">
            <div class="col-lg-4 offset-lg-7">
              <div class="card border-0 rounded-0 mb-4 mb-lg-0 bg-royal-blue">
                <div class="card-body text-white">
                  <h1 class="h2">This is an H1</h1>
                  <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
                </div>
                <div class="card-footer p-0 border-0 bg-transparent">
                  <a href="#" class="btn btn-lg btn-deep-blue rounded-0 text-left d-lg-block has-arrow">Link Text</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="featured-panel box mb-5 bg-emergency-red">

        <div class="image">
          <img src="/images/feature/04.jpg" alt="Placeholder">
        </div>

        <div class="message">
          <!-- Everything within here is variable. -->
          <div class="row no-gutters">
            <div class="col-lg-4 offset-lg-1 ">
              <div class="narrow bg-emergency-red text-white p-4">
                <h1 class="h2">This is an H1</h1>
                <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
                <a href="#" class="has-arrow">Link Text</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    <hr class="mb-5">

    <section class="d-none">

      <h2 class="text-center mb-4">Carousel</h2>

      <div id="marquee" class="carousel slide mb-5 container" data-ride="carousel">

        <div class="carousel-inner">

          <div class="carousel-item active">
              <img class="d-block w-100" src="http://via.placeholder.com/1200x600/003558/FFFFFF" alt="First slide">
              <div class="carousel-caption px-3">
                <h1 class="h2">Slide 1</h1>
                <p>Mus malesuada dapibus ac condimentum habitasse</p>
              </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="http://via.placeholder.com/1200x600/126BB2/FFFFFF" alt="Second slide">
              <div class="carousel-caption px-3">
                <h1 class="h2">Slide 2</h1>
                <p>Mus malesuada dapibus ac condimentum habitasse</p>
              </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="http://via.placeholder.com/1200x600/00857b/FFFFFF" alt="Third slide">
              <div class="carousel-caption px-3">
                <h1 class="h2">Slide 3</h1>
                <p>Mus malesuada dapibus ac condimentum habitasse</p>
              </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="http://via.placeholder.com/1200x600/FFE540/000000" alt="Fourth slide">
              <div class="carousel-caption px-3">
                <h1 class="h2">Slide 3</h1>
                <p>Mus malesuada dapibus ac condimentum habitasse</p>
              </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="http://via.placeholder.com/1200x600/CC2929/000000" alt="Fifth slide">
              <div class="carousel-caption px-3">
                <h1 class="h2">Slide 3</h1>
                <p>Mus malesuada dapibus ac condimentum habitasse</p>
              </div>
          </div>

        </div>

        <ol class="carousel-indicators">
          <li data-target="#marquee" data-slide-to="0" class="active"></li>
          <li data-target="#marquee" data-slide-to="1"></li>
          <li data-target="#marquee" data-slide-to="2"></li>
        </ol>

      </div><!-- #marquee -->

    </section>

  </article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>

