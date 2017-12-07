<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
    $page_description = 'Insert page description here';
    include_once($path . 'global-header.php');

    $section = 'home';
?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main" class="<?php echo $section; ?>">

    <section class="featured-panel cover mb-5 bg-deep-blue">

      <div class="image">
        <img src="/images/feature/01.jpg" alt="Placeholder">
      </div>

      <div class="message">
        <div class="narrow text-center text-white p-4">
          <h1 class="display-3">This is an H1</h1>
          <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
          <a href="#" class="btn btn-lg btn-royal-blue has-arrow">Link Text</a>
        </div>
      </div>

    </section>

    <section class="container mb-5">

      <h2 class="display-4 text-center mb-5">This is an H2</h2>

      <div class="row mb-5">

        <div class="col-lg">
          <div class="card border-0 mb-4 mb-lg-0 bg-clean-green">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
              <a href="#" class="text-black">Card link</a>
            </div>
          </div>
        </div>

        <div class="col-lg">
          <div class="card border-0 mb-4 mb-lg-0 bg-clean-green">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
              <a href="#" class="text-black">Card link</a>
            </div>
          </div>
        </div>

        <div class="col-lg">
          <div class="card border-0 bg-clean-green">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
              <a href="#" class="text-black">Card link</a>
            </div>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-md text-center p-4">

          <img src="http://via.placeholder.com/140x140" alt="Placeholder" class="rounded-circle mb-3">
          <h4>Here is an h4</h4>
          <p class="mb-0">Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
          <p><a href="#" class="btn btn-lg btn-link">Button Link</a></p>

        </div>

        <div class="col-md text-center p-4">
          
          <img src="http://via.placeholder.com/140x140/" alt="Placeholder" class="rounded-circle mb-3">
          <h4>Here is an h4</h4>
          <p class="mb-0">Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
          <p><a href="#" class="btn btn-lg py-3 text-btn-link">Button Link</a></p>

        </div>
        
      </div>

    </section>

    <hr class="mb-5 d-none">

    <h3 class="text-center mb-4 d-none">This is an h3</h3>

    <section class="container-fluid px-0">

          <div class="row no-gutters bg-deep-blue">
            <div class="col-md">
              <img class="d-block w-100" src="http://via.placeholder.com/1000x1000" alt="Placeholder">
            </div>
            <div class="col-md d-md-flex text-white">
              <div class="align-self-md-center p-4 w-100">
                <div class="narrow">
                  <h4 class="h1">Here is an h4</h4>
                  <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
                  <a href="#" class="btn-link btn-large has-arrow">Button Link</a>
                </div>
              </div>
            </div>
          </div>

    </section>

</div><!-- #content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>
