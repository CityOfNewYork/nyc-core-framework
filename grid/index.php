<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
    $page_description = 'Insert page description here';
    include_once($path . 'global-header.php');

    $section = 'grid';
?>

<?php include_once($path . 'head.php'); ?>

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
            <div class="col-lg">
              <p>1 of 3</p>
            </div>
            <div class="col-lg">
              <p>2 of 3</p>
            </div>
            <div class="col-lg">
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
              <div class="col-lg">
                1 of 2
              </div>
              <div class="col-lg">
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
