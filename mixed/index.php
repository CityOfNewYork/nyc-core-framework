<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
    $page_description = 'Insert page description here';
    include_once($path . 'global-header.php');

    $section = 'mixed';
?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main" class="<?php echo $section; ?>">

    <article>

      <header class="bg-success text-white">
        <h1 class="display-1 text-center">Mixed</h1>
      </header>

      <div class="container">

       <section class="mb-5">

          <div class="row">
            <div class="col-md">
              <h2>Here is an h2</h2>
              <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
            </div>
            <div class="col-md">
              <h2>Here is an h2</h2>
              <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
            </div>
          </div>

          <div class="row">
            <div class="col-lg">
              <h3>Here is an h3</h3>
              <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
            </div>
            <div class="col-lg">
              <h3>Here is an h3</h3>
              <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
            </div>
            <div class="col-lg">
              <h3>Here is an h3</h3>
              <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <dl>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
              </dl>
            </div>
            <div class="col-sm-6 col-lg-3">
              <dl>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
              </dl>
            </div>
            <div class="col-sm-6 col-lg-3">
              <dl>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
              </dl>
            </div>
            <div class="col-sm-6 col-lg-3">
              <dl>
                <dt>Description lists</dt>
                <dd>A description list is perfect for defining terms.</dd>
              </dl>
            </div>
          </div>

        <div class="row">
          <div class="col-lg-3">
            <h4>Here is an h4</h4>
            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
          </div>
          <div class="col-lg-6">
            <h2>Here is an h2</h2>
            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
          </div>
          <div class="col-lg-3">
            <h4>Here is an h4</h4>
            <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
          </div>
        </div>

      </section>

      <section class="mb-5">

        
      </section>

    </div><!-- .container -->

  </article>

</div><!-- content -->

<?php include_once($path . 'foot.php'); ?>

<?php include_once($path . 'global-footer.php'); ?>

