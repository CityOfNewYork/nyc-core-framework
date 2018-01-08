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
    <?php include_once($path . 'nav-extras.php'); ?>

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

      <div class="featured-panel box bg-emergency-red">

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

  </article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>

