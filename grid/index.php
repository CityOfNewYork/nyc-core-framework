<?php
  $path = $_SERVER['DOCUMENT_ROOT'] . '/include/';
  $page_description = 'Insert page description here';
  include_once($path . 'global-header.php');

  $section = 'grid';
?>

<?php include_once($path . 'head.php'); ?>

<div id="content" role="main" class="<?php echo $section; ?>">

  <article>

    <?php include_once($path . 'sub-page-header.php'); ?>

    <section class="container mb-5">

      <h2 class="text-center mb-4">Common grid patterns</h2>

      <div class="row">
        <div class="col-md p-4 border border-teal">
          <p>1 of 2</p>
        </div>
        <div class="col-md p-4 border border-teal">
          <p>2 of 2</p>
        </div>
      </div><!-- .row -->

      <div class="row">
        <div class="col-lg p-4 border border-teal">
          <p>1 of 3</p>
        </div>
        <div class="col-lg p-4 border border-teal">
          <p>2 of 3</p>
        </div>
        <div class="col-lg p-4 border border-teal">
          <p>3 of 3</p>
        </div>
      </div><!-- .row -->

      <div class="row">
        <div class="col-sm-6 col-lg-3 p-4 border border-teal">
          <p>1 of 4</p>
        </div>
        <div class="col-sm-6 col-lg-3 p-4 border border-teal">
          <p>2 of 4</p>
        </div>
        <div class="col-sm-6 col-lg-3 p-4 border border-teal">
          <p>3 of 4</p>
        </div>
        <div class="col-sm-6 col-lg-3 p-4 border border-teal">
          <p>4 of 4</p>
        </div>
      </div><!-- .row -->

      <div class="row">
        <div class="col-md-4 p-4 border border-teal">
          <p>2 of 2</p>
        </div>
        <div class="col-md-8 p-4 border border-teal">
         <p>1 of 2</p>
         <div class="row no-gutters">
          <div class="col-lg p-4 border border-teal">
            1 of 2
          </div>
          <div class="col-lg p-4 border border-teal">
            <p>2 of 2</p>
          </div>
        </div>
      </div>
    </div><!-- .row -->

    <div class="row d-flex flex-row-reverse">
      <div class="col-md-4 p-4 border border-teal">
        <p>2 of 2</p>
      </div>
      <div class="col-md-8 p-4 border border-teal">
        <p>1 of 2</p>
        <div class="row no-gutters">
          <div class="col-lg-6 p-4 border border-teal">
            <p>1 of 2</p>
          </div>
          <div class="col-lg-6 p-4 border border-teal">
            <p>2 of 2</p>
          </div>
        </div>
      </div>
    </div><!-- .row -->

    <div class="row">
      <div class="col-lg-3 p-4 border border-teal">1 of 3</div>
      <div class="col-lg-6 p-4 border border-teal">2 of 3</div>
      <div class="col-lg-3 p-4 border border-teal">3 of 3</div>
    </div><!-- .row -->

  </section><!-- .container -->

  <hr class="mb-5">

  <section class="container mb-5">

    <h2 class="text-center mb-4">Mixed with typography</h2>

    <div class="row">
      <div class="col-md p-4 border border-teal">
        <h2>Here is an h2</h2>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
      </div>
      <div class="col-md p-4 border border-teal">
        <h2>Here is an h2</h2>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
      </div>
    </div><!-- .row -->

    <div class="row">
      <div class="col-lg p-4 border border-teal">
        <h3>Here is an h3</h3>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
      </div>
      <div class="col-lg p-4 border border-teal">
        <h3>Here is an h3</h3>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
      </div>
      <div class="col-lg p-4 border border-teal">
        <h3>Here is an h3</h3>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
      </div>
    </div><!-- .row -->

    <div class="row">
      <div class="col-sm-6 col-lg-3 p-4 border border-teal">
        <dl>
          <dt>Description list</dt>
          <dd>A description list is perfect for defining terms.</dd>
        </dl>
      </div>
      <div class="col-sm-6 col-lg-3 p-4 border border-teal">
        <dl>
          <dt>Description list</dt>
          <dd>A description list is perfect for defining terms.</dd>
        </dl>
      </div>
      <div class="col-sm-6 col-lg-3 p-4 border border-teal">
        <dl>
          <dt>Description list</dt>
          <dd>A description list is perfect for defining terms.</dd>
        </dl>
      </div>
      <div class="col-sm-6 col-lg-3 p-4 border border-teal">
        <dl>
          <dt>Description list</dt>
          <dd>A description list is perfect for defining terms.</dd>
        </dl>
      </div>
    </div><!-- .row -->

    <div class="row">
      <div class="col-md-8 p-4 border border-teal">
        <h2>Here is an h2</h2>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
        <div class="row no-gutters">
          <div class="col-lg p-4 border border-teal">
            <dl>
              <dt>Description list</dt>
              <dd>A description list is perfect for defining terms.</dd>
            </dl>
          </div>
          <div class="col-lg p-4 border border-teal">
            <dl>
              <dt>Description list</dt>
              <dd>A description list is perfect for defining terms.</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-4 border border-teal">
        <h4>Here is an h4</h4>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
      </div>
    </div><!-- .row -->

    <div class="row">
      <div class="col-lg-3 p-4 border border-teal">
        <h4>Here is an h4</h4>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
      </div>
      <div class="col-lg-6 p-4 border border-teal">
        <h2>Here is an h2</h2>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis pretium et dolor parturient cum. Est vehicula facilisis ad proin condimentum pretium augue accumsan sapien potenti non vestibulum aptent non cum ullamcorper fusce tincidunt class scelerisque facilisi mi dictumst porttitor est volutpat parturient scelerisque.</p>
      </div>
      <div class="col-lg-3 p-4 border border-teal">
        <h4>Here is an h4</h4>
        <p>Mus malesuada dapibus ac condimentum habitasse a praesent commodo penatibus parturient duis.</p>
      </div>
    </div>

  </section><!-- .container -->

  <hr class="mb-5">

  <section class="container-fluid mb-5">

    <h2 class="text-center mb-4">Full width grids</h2>

    <div class="row">
      <div class="col-md p-4 border border-teal">
        <p>1 of 2</p>
      </div>
      <div class="col-md p-4 border border-teal">
        <p>2 of 2</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg p-4 border border-teal">
        <p>1 of 3</p>
      </div>
      <div class="col-lg p-4 border border-teal">
        <p>2 of 3</p>
      </div>
      <div class="col-lg p-4 border border-teal">
        <p>3 of 3</p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 col-lg-3 p-4 border border-teal">
        <p>1 of 4</p>
      </div>
      <div class="col-sm-6 col-lg-3 p-4 border border-teal">
        <p>2 of 4</p>
      </div>
      <div class="col-sm-6 col-lg-3 p-4 border border-teal">
        <p>3 of 4</p>
      </div>
      <div class="col-sm-6 col-lg-3 p-4 border border-teal">
        <p>4 of 4</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 p-4 border border-teal">
        <p>1 of 2</p>
        <div class="row no-gutters">
          <div class="col-lg p-4 border border-teal">
            1 of 2
          </div>
          <div class="col-lg p-4 border border-teal">
            <p>2 of 2</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-4 border border-teal">
        <p>2 of 2</p>
      </div>
    </div>

    <div class="row d-flex flex-row-reverse">

      <div class="col-md-8 p-4 border border-teal">
        <p>1 of 2</p>
        <div class="row no-gutters">
          <div class="col-lg-6 p-4 border border-teal">
            <p>1 of 2</p>
          </div>
          <div class="col-lg-6 p-4 border border-teal">
            <p>2 of 2</p>
          </div>
        </div>

      </div>

      <div class="col-md-4 p-4 border border-teal">
        <p>2 of 2</p>
      </div>

    </div>

    <div class="row">
      <div class="col-lg-3 p-4 border border-teal">1 of 3</div>
      <div class="col-lg-6 p-4 border border-teal">2 of 3</div>
      <div class="col-lg-3 p-4 border border-teal">3 of 3</div>
    </div>

  </section><!-- .container -->

</article>

</div><!-- #content -->

<?php include_once($path . 'foot.php'); ?>
<?php include_once($path . 'global-footer.php'); ?>
