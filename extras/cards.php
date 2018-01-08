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

    <section class="container mb-5">

      <h2 class="text-center mb-4">Cards</h2>

      <div class="row mb-5">

        <div class="col-lg mb-4 mb-lg-0">
          <div class="card h-100">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
            </div>
            <div class="card-footer border-0 bg-none">
              <a href="#">Card link</a>
            </div>
          </div>
        </div>

        <div class="col-lg mb-4 mb-lg-0">
          <div class="card h-100">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse.</p>
            </div>
            <div class="card-footer border-0 bg-none">
              <a href="#">Card link</a>
            </div>
          </div>
        </div>

        <div class="col-lg mb-4 mb-lg-0 ">
          <div class="card h-100">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse.</p>
            </div>
            <div class="card-footer border-0 bg-none">
              <a href="#">Card link</a>
            </div>
          </div>
        </div>

      </div>

    </section>

    <hr class="mb-5">

    <section class="container">

      <h2 class="text-center mb-4">Cards</h2>

      <div class="row no-gutters mb-5">

        <div class="col-lg mb-4 mb-lg-0">
          <div class="card h-100">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient.</p>
            </div>
            <div class="card-footer border-0 bg-none">
              <a href="#">Card link</a>
            </div>
          </div>
        </div>

        <div class="col-lg mb-4 mb-lg-0">
          <div class="card h-100">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse.</p>
            </div>
            <div class="card-footer border-0 bg-none">
              <a href="#">Card link</a>
            </div>
          </div>
        </div>

        <div class="col-lg mb-4 mb-lg-0">
          <div class="card h-100 ">
            <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
            <div class="card-body">
              <h3 class="card-title">Card title</h3>
              <p class="card-text">Mus malesuada dapibus ac condimentum habitasse.</p>
            </div>
            <div class="card-footer border-0 bg-none">
              <a href="#">Card link</a>
            </div>
          </div>
        </div>

      </div>

    </section>

    <hr class="mb-5">

    <section class="container mb-5">

      <div class="card bg-clean-green text-white text-center border-0 mb-4">
        <img class="card-img opacity-50" src="/images/feature/05.jpg" alt="Card image">
        <div class="card-img-overlay d-flex">
          <div class="narrow align-self-center">
            <h2 class="card-title">Card title</h2>
          </div>
        </div>
      </div>

      <div class="row">

        <div class="col-md mb-4 mb-md-0">
            <div class="card bg-deep-blue text-white text-center border-0">
              <img class="card-img opacity-30" src="/images/feature/05.jpg" alt="Card image">
              <div class="card-img-overlay d-flex">
                <div class="narrow align-self-center">
                  <h2 class="card-title">Card title</h2>
                </div>
              </div>
            </div>
        </div>

        <div class="col-md">
            <div class="card bg-deep-blue text-white text-center border-0">
              <img class="card-img opacity-30" src="/images/feature/05.jpg" alt="Card image">
              <div class="card-img-overlay d-flex">
                <div class="narrow align-self-center">
                  <h2 class="card-title">Card title</h2>
                </div>
              </div>
            </div>
        </div>
      </div>

    </section>

  </article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>

