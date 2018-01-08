<?php

$path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
$page_description = 'Insert page description here';
include_once($path . 'global-header.php');

$section = 'elements';

?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main">

  <article>

    <?php include_once($path . 'sub-page-header.php'); ?>

    <div class="container-fluid wide">

      <div class="row">
        
        <div class="col-lg-4 mb-5 mb-lg-0 px-4">
          <?php include_once($path . 'aside-nav.php'); ?>
        </div>

        <div class="col-lg-8 px-4">

          <section class="mb-5">

            <header>
              <h2 class="h1 mb-4">Articles</h2>
            </header>
            
            <p >Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat <a href="#">parturient scelerisque</a>.</p>

            <h3>Here is an h3</h3>

            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>

            <h4>Here is an h4</h4>

            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>

            <figure class="figure py-4">
              <img src="http://via.placeholder.com/1200x600" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
              <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
            </figure>

            <h5>Here is an h5</h5>

            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>

            <h6>Here is an h6</h6>

            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
          
            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
          
          </section>

          <footer class="mb-5">

            <h6 class="mb-3 text-center">Here is an h6</h6>

            <div  class="card-deck related-articles">

              <div class="card">
                <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
                <div class="card-body">
                  <h5 class="card-title h5">Card 1 of 2</h5>
                  <p class="card-text">Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi.</p>
                </div>
                <div class="card-footer bg-transparent border-0 pt-0">
                  <a href="#" class="card-link">Card link</a>
                </div>
              </div>

              <div class="card">
                <img class="card-img-top" src="http://via.placeholder.com/600x300" alt="Placeholder">
                <div class="card-body">
                  <h5 class="card-title h5">Card 1 of 2</h5>
                  <p class="card-text">Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper.</p>
                </div>
                <div class="card-footer bg-transparent border-0 pt-0">
                  <a href="#" class="card-link">Card link</a>
                </div>
              </div>

          </div>

          </footer>

        </div>

      </div><!-- .row --> 

  </div><!-- .container -->

</article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>
